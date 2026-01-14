import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYimcnryeeRGXeBkRq8h3rRWQddvFe1ug",
  authDomain: "resumeboostai-bbcba.firebaseapp.com",
  projectId: "resumeboostai-bbcba",
  storageBucket: "resumeboostai-bbcba.firebasestorage.app",
  messagingSenderId: "94954661522",
  appId: "1:94954661522:web:468b81c5ee585925b7a84b",
};

const app = initializeApp(firebaseConfig);

// ✅ Auth (Email/Password)
export const auth = getAuth(app);
