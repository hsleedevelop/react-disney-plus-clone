// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcb5f9TGqYHcwRlrragajB0OVMwPwEHb4",
  authDomain: "react-disney-plus-clone-b922a.firebaseapp.com",
  projectId: "react-disney-plus-clone-b922a",
  storageBucket: "react-disney-plus-clone-b922a.appspot.com",
  messagingSenderId: "939926562172",
  appId: "1:939926562172:web:581af60e3a10e314da30f9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;