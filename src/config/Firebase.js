import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_plzoPy4xGtOI_nNMVj7txlY7qTVcq2w",
    authDomain: "form-93258.firebaseapp.com",
    projectId: "form-93258",
    storageBucket: "form-93258.appspot.com",
    messagingSenderId: "138696067113",
    appId: "1:138696067113:web:be30271bdab461ed4cf438",
    measurementId: "G-XJ3X9PGH44"

};

initializeApp(firebaseConfig)

const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut };