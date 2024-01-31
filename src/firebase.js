// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useDebugValue } from "react";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc2D0yjugcL0xEL9xCcUhbNVT_G_BzRF4",
  authDomain: "catalogo-92004.firebaseapp.com",
  projectId: "catalogo-92004",
  storageBucket: "catalogo-92004.appspot.com",
  messagingSenderId: "895134515834",
  appId: "1:895134515834:web:d2193bfa3a716fca1171c3",
  measurementId: "G-4G7QJ446NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export default firestore;

