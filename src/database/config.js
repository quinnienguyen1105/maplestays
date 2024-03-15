// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBZDCazSXRtDLxmA9KPd1I2fWJxrk2-uo4",

  authDomain: "datamaplestay.firebaseapp.com",

  projectId: "datamaplestay",

  storageBucket: "datamaplestay.appspot.com",

  messagingSenderId: "1028375414649",

  appId: "1:1028375414649:web:20ce0155e9d3baaeae91a8",

  measurementId: "G-E5QY9JWB90"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);