import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLwezPtRnbZsATRKwZ1qVJXkjHKuEqDkw",
  authDomain: "web-kursovaya.firebaseapp.com",
  projectId: "web-kursovaya",
  storageBucket: "web-kursovaya.appspot.com",
  messagingSenderId: "915901706358",
  appId: "1:915901706358:web:a5d6ceac4682b4374baf57"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore(app);