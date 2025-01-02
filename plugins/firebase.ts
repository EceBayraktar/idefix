// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2-59mUOH-WHZb9kZKcb0qVfx1tToMBnw",
  authDomain: "idefix-510e6.firebaseapp.com",
  projectId: "idefix-510e6",
  storageBucket: "idefix-510e6.firebasestorage.app",
  messagingSenderId: "626090609176",
  appId: "1:626090609176:web:704c04f4325d45455f916d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app); 
const auth = getAuth(app);

// Nuxt plugin olarak export edin
export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebase: app,
      storage,
      db,
      auth
    }
  };
});
