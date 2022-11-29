import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS-Z9wWZA0Hae-8CemfzSBnhzfYDIMP0g",
  authDomain: "react-netflix-clone-5d043.firebaseapp.com",
  projectId: "react-netflix-clone-5d043",
  storageBucket: "react-netflix-clone-5d043.appspot.com",
  messagingSenderId: "314221416751",
  appId: "1:314221416751:web:7b80a94d89c664aeff91da",
  measurementId: "G-F4TYERWSG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);