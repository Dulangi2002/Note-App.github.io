// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging , getToken  } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnrHnXmXluzU-Q2pDuNo52m1pLTcI3rt4",
  authDomain: "note-e9e0e.firebaseapp.com",
  projectId: "note-e9e0e",
  storageBucket: "note-e9e0e.appspot.com",
  messagingSenderId: "907989927153",
  appId: "1:907989927153:web:2326b3e45a3e55b0fb5550",
  measurementId: "G-H0WDH1X2S7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore  = getFirestore(app);
export const doc = firestore.doc;
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
 const messaging = getMessaging();

getToken(messaging , {vapidKey: "BC1tpF14C7tN9Z6Le1pJVAurM25oUniIqoZRTFMGnyAxLICwksQxWsS2azoOE33UjdONa4-SRgd7UiWCpAEopIY"}
).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});



function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
}
