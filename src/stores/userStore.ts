import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getDocs, query, where, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2-59mUOH-WHZb9kZKcb0qVfx1tToMBnw",
  authDomain: "idefix-510e6.firebaseapp.com",
  projectId: "idefix-510e6",
  storageBucket: "idefix-510e6.firebasestorage.app",
  messagingSenderId: "626090609176",
  appId: "1:626090609176:web:704c04f4325d45455f916d"
};

// Firebase initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface User {
  name: string;
  lastname: string;
  initials: string;
}

export const useUserStore = defineStore('users', () => {
  const user = ref<User | null>(null);

  const fetchUserByEmail = async (email: string) => {
    try {
      const usersCollection = collection(db, 'users');
      const q = query(usersCollection, where('email', '==', email)); // 'email' ile sorgu yap
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        user.value = {
          name: userData.name,
          lastname: userData.lastname,
          initials: `${userData.name[0]}${userData.lastname[0]}`.toUpperCase(),
        };
      } else {
        console.error('User not found!');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return {
    user,
    fetchUserByEmail,
  };
});
