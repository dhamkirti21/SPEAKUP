// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_YqjBEHus1Y9Q5ZVESoImwvNLC5smOeA",
  authDomain: "hackathon-270d4.firebaseapp.com",
  projectId: "hackathon-270d4",
  storageBucket: "hackathon-270d4.appspot.com",
  messagingSenderId: "425379023568",
  appId: "1:425379023568:web:09a83dec5fa982e6766cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app)
