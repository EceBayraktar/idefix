<template>
  <div class="col-12 my-5">
    <!-- Eğer sepet boşsa sadece bu alanı göster -->
    <div v-if="cartItems.length === 0" class="text-center" style="margin-top: 200px;">
      <svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.0556 8.59958L20.8708 1.32409C20.2962 1.02932 19.6536 0.875 19.0008 0.875C18.348 0.875 17.7054 1.02932 17.1308 1.32409L2.94598 8.59958C2.31981 8.92063 1.79666 9.39695 1.43204 9.97801C1.06743 10.5591 0.874939 11.2232 0.875004 11.8999V26.1016C0.874049 26.7781 1.06601 27.4422 1.43043 28.0231C1.79486 28.6041 2.31809 29.0801 2.94441 29.4004L17.1292 36.6759C17.7038 36.9707 18.3464 37.125 18.9992 37.125C19.652 37.125 20.2946 36.9707 20.8692 36.6759L35.054 29.4004C35.68 29.0795 36.203 28.6034 36.5676 28.0226C36.9322 27.4419 37.1248 26.778 37.125 26.1016V11.8999C37.1252 11.2234 36.933 10.5593 36.5686 9.97828C36.2043 9.39723 35.6815 8.92083 35.0556 8.59958ZM3.69305 28.0809C3.3176 27.8882 3.00393 27.6026 2.78529 27.2541C2.56664 26.9056 2.45116 26.5074 2.45109 26.1016V11.8999C2.45311 11.6781 2.48976 11.4578 2.55984 11.2462L18.212 19.7108V35.4793C18.0975 35.4465 17.9858 35.4054 17.8778 35.3564L3.69305 28.0809Z" fill="#0C45F5"></path></svg>
      <br> <br>
      <h5>Sepetinizde Henüz Ürün Bulunmamaktadır</h5>
      <button class="btn btn-primary mt-3" @click="continueShopping" style="width: 300px;">
        Alışverişe Başla
      </button>
    </div>

    <!-- Eğer sepet doluysa mevcut tasarım gösterilir -->
    <div v-else>
      <div class="row">
        <div class="col-1"></div>

        <div class="col-6">
          <h6>Sepetim ({{ cartItems.length }} Ürün)</h6>
          <hr />

          <!-- Sepet doluysa ürünler listelenir -->
          <div v-for="item in cartItems" :key="item.id" class="p-2 mb-3 justify-content-between align-items-center">
            <div class="mb-2" style="background-color: #f7f7f7;">
              <span>Satıcı: <strong>{{ item.satıcı }} ({{ item.satıcıpuanı }})</strong></span>
              <a href="#" class="text-decoration-none text-dark" style="color: #333;">{{ item.seller }}</a>
              <span style="color: blue">  Ücretsiz Kargo</span>
            </div>
            <div class="d-flex align-items-start mb-3 border-bottom pb-3">
              <input type="checkbox" class="form-check-input me-3" v-model="item.isChecked" />

              <div class="d-flex justify-content-center align-items-center me-3" style="width: 120px; height: 120px; border: 1px solid #ddd;">
                <img :src="item.img" alt="Ürün Resmi" class="img-fluid" style="max-width: 100%; max-height: 100%;" />
              </div>

              <div>
                <p class="mb-1">
                  <strong>{{ item.title }}</strong>
                </p>
                <p class="text-muted mb-1">Renk: {{ item.color }}</p>
                <p class="text-muted">{{ item.description }}</p>
                <p class="fw-bold">{{ parseFloat(item.price) }} TL</p>

                <div class="d-flex align-items-center justify-content-between" style="width: 120px; border: 1px solid gray; border-radius: 5px; height: 40px">
                  <button class="btn btn-sm btn-link text-dark p-0" @click="decreaseQuantity(item)" :disabled="item.quantity <= 1">
                    -
                  </button>
                  <span>{{ item.quantity }}</span>
                  <button class="btn btn-sm btn-link text-dark p-0" @click="increaseQuantity(item)">
                    +
                  </button>
                </div>
              </div>

              <div class="ms-auto">
                <button class="btn p-0" @click="removeItemByDescription(item.description)">
                  <i class="bi bi-trash" style="font-size: 1.5rem; color: black;"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-between mt-3">
            <button class="btn text-decoration-none" @click="continueShopping">
              <span class="me-2 align-items-center" style="font-weight: bold;"><i class="bi bi-chevron-left"></i></span>Alışverişe Devam Et
            </button>
            <div class="d-flex">
              <button class="btn rounded-circle">
                <i class="bi bi-trash" style="font-size: 1.0rem; color: black;"></i>
              </button>
              <button class="btn text-decoration-none" @click="clearCart">
                Sepeti Boşalt
              </button>
            </div>
          </div>
        </div>

        <div class="col-1"></div>

        <div class="col-2">
          <h4>Sipariş Özeti</h4>
          <br />
          <div class="d-flex justify-content-between">
            <span>{{ cartItems.length }} Ürün</span>
            <span>{{ totalPrice }} TL</span>
          </div>
          <br />
          <div class="d-flex justify-content-between text-black">
            <span>Kargo</span>
            <p class="text-success">Ücretsiz <span class="original-price">39,99 TL</span></p>
          </div>
          <hr />
          <div class="d-flex justify-content-between fw-bold">
            <span>Toplam</span>
            <span>{{ totalPrice }} TL</span>
          </div>
          <button class="btn btn-primary w-100 my-5">Alışverişi Tamamla</button>
          <div class="my-5">
            <button
              class="btn w-100 d-flex justify-content-between align-items-center coupon-button"
              @click="toggleCouponVisibility"
            >
              <span class="fs-6">İndirim Kodum Var</span>
              <i :class="isCouponVisible ? 'bi bi-dash' : 'bi bi-plus'"></i>
            </button>

            <div v-if="isCouponVisible" class="coupon-menu">
              <p class="mb-5 mt-3">
                İndirim kodunuzu aşağıdaki alana girerek sepete
                uygulayabilirsiniz.
              </p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control coupon-input"
                  placeholder="Kupon Kodu"
                />
                <button class="btn btn-dark apply-coupon-btn">Uygula</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Import Vue Router
import { useNuxtApp } from '#app';
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const { $db } = useNuxtApp();
const router = useRouter(); // Access the router instance
// Firestore'dan ürünleri depolamak için bir ref

const cartItems = ref([]);
const isCouponVisible = ref(false);

const toggleCouponVisibility = () => {
  isCouponVisible.value = !isCouponVisible.value;
};

// Redirect to the homepage
const continueShopping = () => {
  router.push('/'); // Assuming your homepage route is '/'
};

// Toplam fiyatı hesaplamak için computed property
const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity);

    if (isNaN(price) || isNaN(quantity)) {
      console.warn(`Geçersiz veri: ${item.title} - Fiyat: ${item.price}, Miktar: ${item.quantity}`);
      return total;
    }

    return total + (price * quantity);
  }, 0).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' });
});


// Sepet ürünlerini Firestore'dan çekme
const fetchCartItems = async () => {
  try {
    const querySnapshot = await getDocs(collection($db, 'sepet'));
    const fetchedItems = querySnapshot.docs.map(doc => ({
      id: doc.id, // Use Firestore document ID
      ...doc.data(),
      price: parseFloat(doc.data().price), // Convert price to a number
      quantity: 1, // Default quantity
    }));

    // Merge duplicate items and update quantities
    const mergedItems = [];
    fetchedItems.forEach(item => {
      const existingItem = mergedItems.find(i => i.title === item.title);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if the product already exists
        // Update the quantity in Firestore
        updateDoc(doc($db, 'sepet', item.id), { quantity: existingItem.quantity });
      } else {
        mergedItems.push(item);
      }
    });

    cartItems.value = mergedItems;
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
};


const increaseQuantity = async (item) => {
  try {
    item.quantity++;
    await updateDoc(doc($db, 'sepet', item.id), { quantity: item.quantity });
  } catch (error) {
    console.error('Error increasing quantity:', error);
  }
};

const decreaseQuantity = async (item) => {
  try {
    if (item.quantity > 1) {
      item.quantity--;
      await updateDoc(doc($db, 'sepet', item.id), { quantity: item.quantity });
    }
  } catch (error) {
    console.error('Error decreasing quantity:', error);
  }
};

const removeItemByDescription = async (description) => {
  try {
    // Firestore'daki 'sepet' koleksiyonundan belgeyi sorgula
    const q = query(collection($db, "sepet"), where("description", "==", description));
    const querySnapshot = await getDocs(q);

    // Eğer belge bulunduysa, sil
    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (docSnap) => {
        const docRef = doc($db, "sepet", docSnap.id); // Belge referansını al
        await deleteDoc(docRef); // Belgeyi sil
        console.log(`Ürün başarıyla silindi: ${description}`);
      });

      // Yerel veriyi güncelle
      cartItems.value = cartItems.value.filter((item) => item.description !== description);
    } else {
      console.log("Bu açıklamaya sahip bir ürün bulunamadı.");
    }
  } catch (error) {
    console.error("Ürünü silerken bir hata oluştu:", error);
  }
};


const clearCart = async () => {
  try {
    const querySnapshot = await getDocs(collection($db, 'sepet'));
    const deletePromises = querySnapshot.docs.map((docSnapshot) => {
      return deleteDoc(doc($db, 'sepet', docSnapshot.id));
    });

    await Promise.all(deletePromises); // Tüm öğeleri sil
    cartItems.value = []; // Vue tarafında sepeti boşalt
    console.log('Sepet başarıyla boşaltıldı!');
  } catch (error) {
    console.error('Sepeti boşaltırken bir hata oluştu:', error);
  }
};


// Sayfa yüklendiğinde sepetteki ürünleri al
onMounted(() => {
  fetchCartItems();
});
</script>

<style>
.btn {
  font-size: 1rem;
  border-radius:2px
}

.container {
  font-family: Arial, sans-serif;
}

h4 {
  color: #333;
}
button.btn-link {
  padding: 0;
  width: 40px; 
  text-decoration: none;
  font-weight: bold;
  color: black; 
}

.bi {
  font-size: 1.2rem;
  cursor: pointer;
}


.bi-trash {
  cursor: pointer;
}

.original-price {
  text-decoration: line-through; 
  color: #9b9b9b; 
}

.coupon-button {
  background-color: #0c45f51a;
  color: rgb(0, 0, 0);
  border-radius: 2px;  
}

.coupon-button:hover {
  background-color: #0c45f51a;
}
s
.coupon-button-active {
  background-color: #0c45f51a;
  color: rgb(0, 0, 0);
}

.coupon-menu {
  background-color:#0c45f51a;
  margin-top: 0;
  padding: 10px;
  border-top: 1px solid gray; 
}

.coupon-input {
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  transition: border-bottom-color 0.3s ease;
}
button.btn {
  height: 50px; 
}

</style>
