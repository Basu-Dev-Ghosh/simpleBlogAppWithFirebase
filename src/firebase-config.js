// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCkMMmV91AGlrb6PR8ZekOEJwfCyF-woKk",
  authDomain: "fir-blog-app-b0582.firebaseapp.com",
  projectId: "fir-blog-app-b0582",
  storageBucket: "fir-blog-app-b0582.appspot.com",
  messagingSenderId: "516220779274",
  appId: "1:516220779274:web:6e1993759400689f3658f3",
  measurementId: "G-VFFRE6S6NR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
