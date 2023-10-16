// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCLWpcKbt_ipmwRTIvpfbX17BWP8UGI8Co",
  authDomain: "speak-up-ae15f.firebaseapp.com",
  projectId: "speak-up-ae15f",
  storageBucket: "speak-up-ae15f.appspot.com",
  messagingSenderId: "24332814255",
  appId: "1:24332814255:web:6369cb2612708d09b5115a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app)
