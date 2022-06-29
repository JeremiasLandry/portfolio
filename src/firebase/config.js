// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NUgbgH00983QL3ROwEXW7z9m_bKfkA4",
  authDomain: "portfolio-1ec33.firebaseapp.com",
  projectId: "portfolio-1ec33",
  storageBucket: "portfolio-1ec33.appspot.com",
  messagingSenderId: "874021394378",
  appId: "1:874021394378:web:fccf8370102f21f716a133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)