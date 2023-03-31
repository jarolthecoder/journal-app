// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Y6y8b57e4h_c9xYMCTmnhYXHXfkIyU8",
  authDomain: "journal-react-app-b52c9.firebaseapp.com",
  projectId: "journal-react-app-b52c9",
  storageBucket: "journal-react-app-b52c9.appspot.com",
  messagingSenderId: "479838696543",
  appId: "1:479838696543:web:ce96755f1bb59bcecc97ea"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);