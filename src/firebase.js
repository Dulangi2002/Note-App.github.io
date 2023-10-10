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
  apiKey: "AIzaSyALmMp61wuM3VyDPRBwoBBR7D4qX3VLRQA",
  authDomain: "note-app-c8641.firebaseapp.com",
  projectId: "note-app-c8641",
  storageBucket: "note-app-c8641.appspot.com",
  messagingSenderId: "36261164495",
  appId: "1:36261164495:web:b19bcb76695c7c5ce4ceba",
  measurementId: "G-DQTY8FK2EW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore  = getFirestore(app);
export const doc = firestore.doc;
export const storage = getStorage(app);
export const analytics = getAnalytics(app);


