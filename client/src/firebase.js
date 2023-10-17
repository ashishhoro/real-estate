// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-fbdca.firebaseapp.com",
  projectId: "real-estate-fbdca",
  storageBucket: "real-estate-fbdca.appspot.com",
  messagingSenderId: "409201587407",
  appId: "1:409201587407:web:1a6cca23721219ba7d73ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);