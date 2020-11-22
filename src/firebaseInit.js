import firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://socialapp-f7a3f.firebaseio.com",
  projectId: "socialapp-f7a3f",
  storageBucket: "socialapp-f7a3f.appspot.com",
  messagingSenderId: "841465032063",
  appId: "1:841465032063:web:3f2dab606a100be3c3be4a",
};
const firebaseInit = firebase.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotification = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

export {firebaseInit};
