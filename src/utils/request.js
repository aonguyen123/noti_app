import axios from "axios";
import firebase from "firebase";

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser
  if(currentUser) return currentUser.getIdToken()
  return new Promise((resolve, reject) => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if(!user) {
        reject(null)
      }
      const token = await user.getIdToken()
      resolve(token)
      unregisterAuthObserver()
    })
  })
}

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

request.interceptors.request.use(async (config) => {
  const token = await getFirebaseToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    if (response?.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //handle error
    throw error;
  }
);

export default request;
