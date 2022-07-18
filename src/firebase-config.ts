import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3R-c4crevVgRp6A-5SSkBBv4UTXXaCk8",
  authDomain: "form-data-eb602.firebaseapp.com",
  projectId: "form-data-eb602",
  storageBucket: "form-data-eb602.appspot.com",
  messagingSenderId: "292785221787",
  appId: "1:292785221787:web:ff38c8ae1ebc55d4fed63e",
  measurementId: "G-DT5FPQD4QB"
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore();