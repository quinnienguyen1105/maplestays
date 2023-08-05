// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD_JSd3YQtP6MF2dLchiSVzDT7XIegQIG8",

  authDomain: "maplestays3.firebaseapp.com",

  projectId: "maplestays3",

  storageBucket: "maplestays3.appspot.com",

  messagingSenderId: "401566727071",

  appId: "1:401566727071:web:660118828d872918759baa"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
export const db = getFirestore(app);