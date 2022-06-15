// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8nd5CfQTw4IaVRi7CZlEpZhDnCkp4B-k",
  authDomain: "ix-task-list-ad323.firebaseapp.com",
  projectId: "ix-task-list-ad323",
  storageBucket: "ix-task-list-ad323.appspot.com",
  messagingSenderId: "322955660498",
  appId: "1:322955660498:web:063daa05fce11f2278710b",
  measurementId: "G-C7LRYPWZ86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
};