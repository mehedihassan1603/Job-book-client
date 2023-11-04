// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2DKIV-7qMPVmaOBuh85JFfP-xeISij9c",
  authDomain: "job-book-ae502.firebaseapp.com",
  projectId: "job-book-ae502",
  storageBucket: "job-book-ae502.appspot.com",
  messagingSenderId: "258190940804",
  appId: "1:258190940804:web:6e6466ef227996ee9d40d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;