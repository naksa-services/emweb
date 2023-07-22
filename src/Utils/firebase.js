import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7CDZC5gfCsiVVCeqNfM75o9U45OJzWJk",
  authDomain: "naksa-60265.firebaseapp.com",
  projectId: "naksa-60265",
  storageBucket: "naksa-60265.appspot.com",
  messagingSenderId: "1053971998858",
  appId: "1:1053971998858:web:53fecee674690d67d86573",
  measurementId: "G-0N6MZ9FEG9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()