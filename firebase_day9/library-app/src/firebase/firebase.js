// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl5Bhv1V2K_4wwvRcyyMX9CQA3Y0NAN1Q",
  authDomain: "fir-library-app-fc8b9.firebaseapp.com",
  projectId: "fir-library-app-fc8b9",
  storageBucket: "fir-library-app-fc8b9.appspot.com",
  messagingSenderId: "1011884490488",
  appId: "1:1011884490488:web:7ca1d3cee0f5678e83050d",
  measurementId: "G-YFK7CFMEPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
};