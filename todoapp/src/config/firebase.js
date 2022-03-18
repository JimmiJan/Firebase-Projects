// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwj3R2p7qGBxGUsWdGaKKQmQlGo91c-Io",
  authDomain: "forms-foryou.firebaseapp.com",
  projectId: "forms-foryou",
  storageBucket: "forms-foryou.appspot.com",
  messagingSenderId: "549901773527",
  appId: "1:549901773527:web:26b16ddfd32234b43f1e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {auth , db}

