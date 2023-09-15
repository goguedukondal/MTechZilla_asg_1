// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArXNj-wMjls0EXYXvITQPD_WWP393rryU",
  authDomain: "react-authentication-1dc4b.firebaseapp.com",
  projectId: "react-authentication-1dc4b",
  storageBucket: "react-authentication-1dc4b.appspot.com",
  messagingSenderId: "233079254675",
  appId: "1:233079254675:web:2b538ab58c411ecab72766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
