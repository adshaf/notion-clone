import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCcJ6FoC5Bj0aHPNJKl1i2SAokreH7_8n0",
  authDomain: "notion-clone-da24e.firebaseapp.com",
  projectId: "notion-clone-da24e",
  storageBucket: "notion-clone-da24e.firebasestorage.app",
  messagingSenderId: "820183023735",
  appId: "1:820183023735:web:dc80d62925726ddcd64672"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();  // To prevent double initialisation issues that sometimes happens when using NextJS.
const db = getFirestore(app);

export { db };