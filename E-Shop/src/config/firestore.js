// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwIQ_r4BVXVRMSUpHXVHx0vVXY0hZX7ck",
  authDomain: "e-shop-5634a.firebaseapp.com",
  projectId: "e-shop-5634a",
  storageBucket: "e-shop-5634a.appspot.com",
  messagingSenderId: "857389740742",
  appId: "1:857389740742:web:b59d59b7ff66498c02ddc7",
  measurementId: "G-P9D281WZ0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
