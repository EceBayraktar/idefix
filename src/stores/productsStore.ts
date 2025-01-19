import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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

// Define Product Type
interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  rating: number;
  reviews: number;
  discountPrice?: number;
  color?: string;
  seller?: string; // 'satıcı' yerine daha genel bir İngilizce terim kullandım
  sellerRating?: number; // 'satıcıpuanı' için daha uygun bir isim
}

// Define Store
export const useProductsStore = defineStore('products', () => {
  // Reactive State
  const products = ref<Product[]>([]);
  const cart = ref<Product[]>([]);

  /**
   * Fetch products from Firestore
   */
  const fetchProducts = async (): Promise<void> => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      products.value = productData;
      console.log('Products fetched successfully:', productData);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  /**
   * Add a product to the cart and Firestore
   * @param product The product to add to the cart
   */
  const addProductToCart = async (product: Product): Promise<void> => {
    try {
      const cartItem = { ...product, quantity: 1 };
      cart.value.push(cartItem); // Add to local cart state
      await addDoc(collection(db, 'sepet'), cartItem); // Add to Firestore
      console.log('Product added to cart:', cartItem);
    } catch (err) {
      console.error('Error adding product to cart:', err);
    }
  };

  return {
    products,
    cart,
    fetchProducts,
    addProductToCart,
  };
});
