// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqFjGEGBCS5zCyxBQnCFRo132faHh2rHU",
  authDomain: "react-app-7c36d.firebaseapp.com",
  projectId: "react-app-7c36d",
  storageBucket: "react-app-7c36d.appspot.com",
  messagingSenderId: "932438702467",
  appId: "1:932438702467:web:d74c807f5ffa79aec79eb6",
  measurementId: "G-23SPNLWKQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};