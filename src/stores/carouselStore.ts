import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getDocs, collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import type { DocumentData } from 'firebase/firestore'; // type-only import

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2-59mUOH-WHZb9kZKcb0qVfx1tToMBnw",
  authDomain: "idefix-510e6.firebaseapp.com",
  projectId: "idefix-510e6",
  storageBucket: "idefix-510e6.firebasestorage.app",
  messagingSenderId: "626090609176",
  appId: "1:626090609176:web:704c04f4325d45455f916d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useCarouselStore = defineStore('carousel', () => {
  // Türü açıkça tanımlayın: DocumentData[]
  const images = ref<DocumentData[]>([]); // Firebase'den gelen carousel resimleri için

  const loading = ref(false); // Yüklenme durumu
  const error = ref<string | null>(null); // Hata mesajı

  const fetchCarouselImages = async () => {
    loading.value = true;
    error.value = null;
    try {
      const querySnapshot = await getDocs(collection(db, 'carousel'));
      const imageData = querySnapshot.docs.map((doc) => doc.data());
      console.log(imageData); // Veriyi kontrol et
      images.value = imageData;
    } catch (err) {
      console.error('Veriler alınırken hata oluştu:', err);
      error.value = 'Veriler alınırken bir hata oluştu.';
    } finally {
      loading.value = false;
    }
  };
  
  
  

  return {
    images,
    loading,
    error,
    fetchCarouselImages,
  };
});
