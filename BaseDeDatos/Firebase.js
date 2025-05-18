// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEA3FRRfd1rwDr0yeWljKGtAGJene-OUM",
  authDomain: "gestionclientes-3ef5c.firebaseapp.com",
  projectId: "gestionclientes-3ef5c",
  storageBucket: "gestionclientes-3ef5c.firebasestorage.app",
  messagingSenderId: "873590562518",
  appId: "1:873590562518:web:263717273446a049263377"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;