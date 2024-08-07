import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs00i5y6T_03pEi4EDxqR-DrJhtY_KzuI",
  authDomain: "dev-f5r--chat.firebaseapp.com",
  databaseURL: "https://dev-f5r--chat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dev-f5r--chat",
  storageBucket: "dev-f5r--chat.appspot.com",
  messagingSenderId: "994208815119",
  appId: "1:994208815119:web:8b01b2e84f399926bb2b7a",
  measurementId: "G-6YFSKKF51H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
