// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVcFBetICuetwA9F4drSRfWxB9d5RYklc",
  authDomain: "note-fc0fc.firebaseapp.com",
  projectId: "note-fc0fc",
  storageBucket: "note-fc0fc.appspot.com",
  messagingSenderId: "278138305584",
  appId: "1:278138305584:web:f5a8b50a6421d2edb181f5",
  measurementId: "G-D5DTC7CZD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore  = getFirestore(app);