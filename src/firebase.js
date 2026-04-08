import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyBA2mNhhrgKx1J-tXtFnkebDXkTN39NO-Q",
  authDomain: "zinc-style-481802-a7.firebaseapp.com",
  projectId: "zinc-style-481802-a7",
  storageBucket: "zinc-style-481802-a7.firebasestorage.app",
  messagingSenderId: "966232441372",
  appId: "1:966232441372:web:f50e5e23410a000afed5d9",
  measurementId: "G-46PF5S1RXR"
};

const app = initializeApp(firebaseConfig);

// 🔹 EXPORTS QUE O PROJETO PRECISA
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
