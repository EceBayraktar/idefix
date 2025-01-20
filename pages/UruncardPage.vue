<template>
  <HeaderPage />
  <div class="row" style="background-color: white;">
    <div class="col-12" style="margin-left:50px; margin-top:10px;" >
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#" class="text-black">Ana Sayfa</a></li>
          <li class="breadcrumb-item"><a href="#" class="text-black">Hobi & Kültür</a></li>
          <li class="breadcrumb-item"><a href="#" class="text-black">Kitap</a></li>
          <li class="breadcrumb-item"><a href="#" class="text-black">Edebiyat</a></li>
          <li class="breadcrumb-item"><a href="#" class="text-black">Roman</a></li>
          <li class="breadcrumb-item active" aria-current="page">Türk Roman</li>
        </ol>
      </nav>
    </div>
    
    <div class="col-1"></div>

    <div class="col-4">
      <div class="outer-frame">
        <div class="product-image text-center position-relative inner-frame">
          <div class="top-right-images">
            <img
              src="https://asset.idefix.com/images/app-icons/empty-heart.svg"
              alt="Favorilere Ekle"
              class="top-image"
              @click="handleClick('empty-heart')"
            />
            <img
              src="https://asset.idefix.com/images/app-icons/pdp/bookmark.svg"
              alt="İşaretle"
              class="top-image"
              @click="handleClick('bookmark')"
            />
            <img
              src="https://asset.idefix.com/images/app-icons/pdp/share.svg"
              alt="Paylaş"
              class="top-image"
              @click="handleClick('share')"
            />
          </div>
          <img :src="showphoto" alt="Ürün Görseli" class="img-fluid" />
          <button class="arrow-button left-arrow" @click="previousImage">←</button>
          <button class="arrow-button right-arrow" @click="nextImage">→</button>
        </div>

        <div class="d-flex justify-content-left mt-3 thumbnail-container">
          <img
            v-for="(thumb, index) in thumbnail"
            :key="index"
            :src="thumb"
            alt="Küçük Resim"
            class="img-thumbnail mx-2"
            @click="updateMainImage(thumb)"
          />
        </div>
      </div>
    </div>

    <div class="col-3">
      <h1 class="product-name">{{ description }}</h1>
      <p class="text-muted">{{ productpage.yayınevi }}</p>
      <h2 class="price">{{ price.toLocaleString() }} TL</h2>

      <p></p>
      <div class="row g-3">
        <div
          class="col-12 d-flex align-items-center border p-2 rounded mb-3"
          v-for="(productpage, index) in colors"
          :key="index"
        >
          <input
            type="radio"
            :id="'color-' + index"
            :value="productpage.name"
            v-model="selectedColor"
            class="form-check-input me-3" 
          />
          <img
            :src="productpage.showpage"
            alt="Renk Resmi"
            class="img-fluid me-3"
            style="width: 35px; height: 65px;"
          />
          <div>
            <label :for="'color-' + index" class="form-check-label">
              {{ productpage.name }}
            </label>
            <p class="price-small m-0">{{ productpage.price.toLocaleString() }} TL</p>
          </div>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col-4">
          <p>Kitap Formatı</p>
          <p style="font-weight: bold">{{ format }}</p>
        </div>
        <div class="col-4">
          <p>Yazar</p>
          <p style="font-weight: bold; text-decoration: underline;">{{ yazar }}</p>
        </div>
        <div class="col-4">
          <p>Basım Dili</p>
          <p style="font-weight: bold">{{ dili }}</p>
        </div>

        <div class="col-4">
          <p>İlk Baskı Yılı</p>
          <p style="font-weight: bold">{{ ilkbaskı }}</p>
        </div>

        <div class="col-4">
          <p>Hamur Kalitesi</p>
          <p style="font-weight: bold">{{ kalite }}</p>
        </div>

        <div class="col-4">
          <p>Baskı Sayısı</p>
          <p style="font-weight: bold">{{ baskısayısı }}</p>
        </div>
      </div>
    </div>

    <div class="col-2">
      <div class="price-section">
        <h3 class="price">{{ price.toLocaleString() }} TL</h3>
        <p class="shipping-date">07 Aralık Perşembe kargoda</p>
        <p class="installment">
          Tek Çekim x <strong>{{ price.toLocaleString() }} TL</strong> = {{ price.toLocaleString() }} TL
        </p>
        <a href="#" class="installment-options">Farklı Taksit Seçenekleri</a>

        <!-- Sepete ekle butonu -->
        <button class="btn btn-success w-100 mt-3" @click="addToCart">Sepete Ekle</button>

        <div class="seller-info mt-4" style="display: flex; justify-content: space-between; align-items: center;">
          <span>
            Satıcı: <a href="#" class="seller-name">idefix (9.7)</a>
          </span>
          <a href="#" class="ask-seller">Satıcıya Soru Sor</a>
        </div>
        <hr />
        <div class="price-alert mt-3">
          <i class="bi bi-bell"></i>
          <a href="#" class="alert-link"> Fiyat Alarmı</a>
        </div>

        <div class="other-sellers mt-4">
          <h5>Diğer Satıcılar(1)</h5>
          <div class="seller-card p-3 mt-2">
            <div class="d-flex align-items-center">
              <h6 class="store-name mb-0">{{ satıcı }}</h6>
              <span class="badge ms-1" style="background-color:#55bd4f">{{ satıcıpuanı }}</span>
            </div>
            <p class="shipping-info">07 Aralık Cumartesi kargoda</p>
            <h6 class="store-price">{{ price.toLocaleString() }} TL</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app'; // Nuxt plugin'e erişim
import { getDocs, collection, addDoc } from 'firebase/firestore';

// Reactive değişkenler
const description = ref('');
const img = ref('');
const thumbnail = ref([]);
const price = ref(0);
const format = ref('');
const yazar = ref('');
const dili = ref('');
const ilkbaskı = ref('');
const kalite = ref('');
const baskısayısı = ref('');
const showphoto = ref('');
const colors = ref([]);
const satıcı = ref('');
const satıcıpuanı = ref('');
const productpage = ref({
  yayınevi: '',
});
const cart = ref([]); // Sepet değişkeni

import HeaderPage from '~/pages/HeaderPage.vue';
// Nuxt app içinden Firebase servisine erişim
const { $db } = useNuxtApp();

onMounted(async () => {
  try {
    const productRef = collection($db, 'productpage'); // Firestore collection name
    const querySnapshot = await getDocs(productRef);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        description.value = productData.description || '';
        img.value = productData.img || '';
        thumbnail.value = productData.thumbnail || [];
        showphoto.value = productData.showphoto || '';
        price.value = productData.price || 0;
        format.value = productData.format || '';
        yazar.value = productData.yazar || '';
        dili.value = productData.dili || '';
        satıcı.value = productData.satıcı || '';
        satıcıpuanı.value = productData.satıcıpuanı || '';
        ilkbaskı.value = productData.ilkbaskı || '';
        kalite.value = productData.kalite || '';
        baskısayısı.value = productData.baskısayısı || '';
        colors.value = productData.colors || [];
        productpage.value.yayınevi = productData.yayınevi || '';
      });
    } else {
      console.log('No products found in Firestore.');
    }
  } catch (error) {
    console.error('Error fetching product data from Firestore:', error);
  }
});

// Sepete ekleme işlemi (Firestore koleksiyonuna veri ekleme)
const addToCart = async () => {
  const cartItem = {
    description: description.value,
    price: price.value,
    img: showphoto.value,
    satıcı: satıcı.value,
    satıcıpuanı: satıcıpuanı.value,
    quantity: 1, // Varsayılan olarak 1 adet
  };

  try {
    // Firestore'da 'sepet' koleksiyonuna yeni bir belge ekle
    await addDoc(collection($db, 'sepet'), cartItem);
    console.log('Sepete Eklendi:', cartItem);
  } catch (error) {
    console.error('Sepete eklerken hata oluştu:', error);
  }
};

const updateMainImage = (thumb) => {
  showphoto.value = thumb;
};

const previousImage = () => {
  const currentIndex = thumbnail.value.indexOf(showphoto.value);
  const previousIndex = (currentIndex - 1 + thumbnail.value.length) % thumbnail.value.length;
  showphoto.value = thumbnail.value[previousIndex];
};

const nextImage = () => {
  const currentIndex = thumbnail.value.indexOf(showphoto.value);
  const nextIndex = (currentIndex + 1) % thumbnail.value.length;
  showphoto.value = thumbnail.value[nextIndex];
};
</script>

<style scoped>
/* Style rules here */
</style>


<style scoped>
.breadcrumb-item a {
color: black;
text-decoration: none;
}

.breadcrumb-item a:hover {
text-decoration: underline;
}
.arrow-button {
background-color: transparent;
border: none;
font-size: 24px;
cursor: pointer;
padding: 10px;
position: absolute;
top: 50%;
transform: translateY(-50%);
}

.left-arrow {
left: 10px;
}
/* Genel arka plan beyaz */
.body {
  background-color: white;
}

/* Belirli bir div için beyaz arka plan */
.outer-frame {
  background-color: white;
}


.right-arrow {
right: 10px;
}
.thumbnail-container {
display: flex;
gap: 10px; 
max-height: 80px;
height: 100%;
width:80px;
}
.img-thumbnail{
max-height: 80px;
height: 100%;
width:80px;
}

ul.list-unstyled li {
font-size: 1rem; 
margin-bottom: 10px; 
}

.d-flex {
display: flex;
}

.justify-content-between {
justify-content: space-between;
align-items: center;
}

span {
color: #555;
}

.product-name {
font-size: 1.3rem;
font-weight: bold;
}

.price {
font-size: 1rem;
}

.price-small {
font-size: 1rem;
}

.card {
border: 1px solid #ddd;
}

.card:hover {
box-shadow: 0px 4px 8px rgba(184, 48, 48, 0.1);
}
.img-fluid {
height: 100%;
max-height: 400px;
width: auto; 
margin-top: 5px;
}

.inner-frame {
background-color: rgb(255, 255, 255);
padding: 20px;
border-radius: 10px;
max-width: 570px;
width: 100%;
height: 520px;

justify-content: center; 
border: 1px solid #beb6b6; 
}

.col-12.d-flex.align-items-center.border {
padding: 1rem; 
border: 2px solid #ddd; 
width: auto; 
height: auto; 
display: flex;
align-items: center;
}

.top-right-images {
position: absolute;
top: 10px;
right: 10px;
display: flex;
gap: 10px;
}

.price-section {
  font-family: Arial, sans-serif;
  background-color: #fff;
  padding: 20px;
}
.top-right-images {
position: absolute;
top: 10px;
right: 10px;
display: flex;
gap: 10px;
}

.top-image {
cursor: pointer;
width: 30px;
height: 30px;
}
.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.shipping-date,
.installment {
  color: #555;
  font-size: 0.9rem;
}

.installment-options {
  color: #000;
  text-decoration: underline;
  font-size: 0.9rem;
}

.btn-success {
  font-size: 1rem;
  font-weight: bold;
  background-color: #55bd4f; 
border-color: #55bd4f;
}

.seller-info {
  font-size: 0.9rem;
  color: #555;
}

.seller-name {
  text-decoration: underline; 
  color: #000; 
}

.ask-seller {
  text-decoration: none;
  font-size: 0.9rem;
  color: #000; 
}

.price-alert {
  font-size: 0.9rem;
  color: #000; 
}


.other-sellers {
  font-size: 0.9rem;
  color: #333;
}

.seller-card {
  background-color: #dfdada;
}

.store-name {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline; 
  margin-bottom: 0;
}

.store-rating .badge {
  font-size: 0.8rem;
}

.shipping-info {
  font-size: 0.8rem;
  color: #555;
}

.store-price {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.ms-2 {
  margin-left: 0.5rem;
}
.alert-link {
text-decoration: none;
color: #000; 
}


</style>