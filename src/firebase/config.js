// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWQvBWCRjwj7Hh9Jy4xt-KLNIdxjSW3YU",
    authDomain: "app-aranam.firebaseapp.com",
    projectId: "app-aranam",
    storageBucket: "app-aranam.appspot.com",
    messagingSenderId: "968367907644",
    appId: "1:968367907644:web:2f0d534e8c0c39afc3b439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirestore = () => app