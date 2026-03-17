import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWbtJJX8LQBzNdwApAvme78pfrQ3BzOYA",
  authDomain: "nextzensec.firebaseapp.com",
  projectId: "nextzensec",
  storageBucket: "nextzensec.firebasestorage.app",
  messagingSenderId: "214772769779",
  appId: "1:214772769779:web:fabd361dc4393787716886"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
