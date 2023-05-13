// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCjtZIFoyBD_JyYPnHhk9T8LO6X67syRQA",

  authDomain: "maplestays1.firebaseapp.com",

  projectId: "maplestays1",

  storageBucket: "maplestays1.appspot.com",

  messagingSenderId: "818069066096",

  appId: "1:818069066096:web:d64f71fdfc85adf2d8ffb5"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
export const db = getFirestore(app);