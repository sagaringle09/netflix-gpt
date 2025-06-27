// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBJLxM0gQYDHFONwXGcHkf1uhUDjkpYC4",
  authDomain: "netflixgpt-f06f7.firebaseapp.com",
  projectId: "netflixgpt-f06f7",
  storageBucket: "netflixgpt-f06f7.firebasestorage.app",
  messagingSenderId: "505192766907",
  appId: "1:505192766907:web:c5f674a2876566288ab89e",
  measurementId: "G-BH68S5ZT3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);