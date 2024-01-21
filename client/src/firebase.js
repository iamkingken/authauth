// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-2ebb3.firebaseapp.com",
  projectId: "auth-2ebb3",
  storageBucket: "auth-2ebb3.appspot.com",
  messagingSenderId: "1073028486967",
  appId: "1:1073028486967:web:78ca629f2fb1d9b54e6cb2"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);