// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyC2BbdzLDuywvB7SDcOV6vFG4PngkNW4Vo",

  authDomain: "maplestays2.firebaseapp.com",

  projectId: "maplestays2",

  storageBucket: "maplestays2.appspot.com",

  messagingSenderId: "613905574101",

  appId: "1:613905574101:web:c0e5e1ef4ac429a4a91a5c"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
export const db = getFirestore(app);