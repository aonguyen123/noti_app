import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
request.interceptors.request.use(async (config) => {
  //handle token here
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