// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getMessaging } from "firebase/messaging";



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
export const auth = getAuth(app);
export const firestore  = getFirestore(app);
export const doc = firestore.doc;
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
// export const messaging = getMessaging(app);

// export const askforPermissioToReceiveNotifications = async () => {
//   try {
//       const messaging = getMessaging();
//       await messaging.requestPermission();
//       const token = await messaging.getToken();
//       console.log('token do usuario:', token);
      
//       return token;
//       } catch (error) {
//       console.error(error);
//       }
// }




