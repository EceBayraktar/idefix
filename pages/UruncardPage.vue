<template>
  <div class="row">
  <div class="col-12" style="margin-left:50px; margin-top:10px;">
    
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
            alt="Resim 1"
            class="top-image"
            @click="handleClick('empty-heart')"
          />
          <img
            src="https://asset.idefix.com/images/app-icons/pdp/bookmark.svg"
            alt="Resim 2"
            class="top-image"
            @click="handleClick('bookmark')"
          />
          <img
            src="https://asset.idefix.com/images/app-icons/pdp/share.svg"
            alt="Resim 3"
            class="top-image"
            @click="handleClick('share')"
          />
        </div>
        <img :src="mainImage" alt="Ürün Görseli" class="img-fluid " />
        <button class="arrow-button left-arrow" @click="previousImage">←</button>
        <button class="arrow-button right-arrow" @click="nextImage">→</button>
      
      </div>

      <div class="d-flex justify-content-left mt-3 thumbnail-container">
        <img
          v-for="(thumb, index) in thumbnails"
          :key="index"
          :src="thumb"
          alt="Küçük Resim"
          class="img-thumbnail mx-2"
          max
          @click="updateMainImage(thumb)"
        />
      </div>
    </div>
</div>
    <div class="col-3">
      <h1 class="product-name">{{ productName }}</h1>
      <p class="text-muted">Guardian Yayınları</p>
      <h2 class="price">{{ price.toLocaleString() }} TL</h2>

      <p>Kitap Formatı</p>
      <div class="row g-3">
        <div
          class="col-12 d-flex align-items-center border p-2 rounded mb-3"
          v-for="(option, index) in colors"
          :key="index"
        >
          <input
            type="radio"
            :id="'color-' + index"
            :value="option.name"
            v-model="selectedColor"
            class="form-check-input me-3"
          />
          <img
            :src="option.image"
            alt="Renk Resmi"
            class="img-fluid me-3"
            style="width: 35px; height: 65px;"
          />
          <div>
            <label :for="'color-' + index" class="form-check-label">
              {{ option.name }}
            </label>
            <p class="price-small  m-0">{{ option.price.toLocaleString() }} TL</p>
          </div>
        
      </div>
     
      <div class="row"> 
          <div class="col-4">
              <p>Kitap Formatı</p>
              <p style="font-weight:bold">{{ format }}</p>
          </div>
          
          <div class="col-4">
              <p>Yazar</p>
              <p style="font-weight:bold; text-decoration: underline;" >{{ yazar }}</p>
          </div>
          <div class="col-4">
              <p>Basım Dili</p>
              <p style="font-weight:bold">{{ dili }}</p>
          </div>

          <div class="col-4">
              <p>İlk Baskı Yılı</p>
              <p style="font-weight:bold">{{ ilkbaskı }}</p>
          </div>
          
          <div class="col-4">
              <p>Hamur Kalitesi</p>
              <p style="font-weight:bold">{{ kalite }}</p>
          </div>

          <div class="col-4">
              <p>Baskı Sayısı</p>
              <p style="font-weight:bold">{{ baskısayısı }}</p>
          </div>
          </div>

    </div>
  </div>
  <div class="col-2">
    <div class="price-section">
      <h3 class="price">184,78 TL</h3>
      <p class="shipping-date">07 Aralık Perşembe kargoda</p>
      <p class="installment">
        Tek Çekim x <strong>184,78 TL</strong> = 184,78 TL
      </p>
      <a href="#" class="installment-options">Farklı Taksit Seçenekleri</a>

      <button class="btn btn-success w-100 mt-3">Sepete Ekle</button>

      <div class="seller-info mt-4" style="display: flex; justify-content: space-between; align-items: center;">
        <span>
          Satıcı: <a href="#" class="seller-name">idefix (9.7)</a>
        </span>
        <a href="#" class="ask-seller">Satıcıya Soru Sor</a>
      </div>
      <hr/>
      <div class="price-alert mt-3">
        <i class="bi bi-bell"></i>
        <a href="#" class="alert-link"> Fiyat Alarmı</a>
      </div>

      <div class="other-sellers mt-4">
        <h5>Diğer Satıcılar(1)</h5>
        <div class="seller-card p-3 mt-2">
          <div class="d-flex align-items-center">
            <h6 class="store-name mb-0">KitapStore</h6>
            <span class="badge  ms-1" style="background-color:#55bd4f">4.1</span>
          </div>
          <p class="shipping-info">07 Aralık Cumartesi kargoda</p>
          <h6 class="store-price">184,78TL</h6>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      productName: 'Bronz 3 - İmparatoriçe Özge Naz',
      price: 18478,
      format: 'Ciltli',
      yazar: 'Özge Naz',
      dili: 'Türkçe',
      ilkbaskı: '',
      kalite: '2.Hamur',
      baskısayısı: '1.Basım',
      mainImage: 'https://i.idefix.com/resize/800/0/cache/600x600-0/originals/0002150379001-1.jpg',
      thumbnails: [
            'https://i.idefix.com/resize/150/0/cache/600x600-0/originals/0002150379001-1.jpg',
            'https://i.idefix.com/resize/150/0/cache/600x600-0/originals/0002150379001-2.jpg',
      ],
      colors: [
        {
          name: 'Ciltli',
          price: 18478,
          image:
            'https://i.idefix.com/resize/100/0/cache/600x600-0/originals/0002150379001-1.jpg',
        },
      ],
      selectedColor: 'Ciltli',
    };
  },
  methods: {
    updateMainImage(image: string) {
      this.mainImage = image;
    },
    nextImage() {
    let currentIndex = this.thumbnails.indexOf(this.mainImage);
    if (currentIndex < this.thumbnails.length - 1) {
      this.mainImage = this.thumbnails[currentIndex + 1];
    }
  },
  previousImage() {
    let currentIndex = this.thumbnails.indexOf(this.mainImage);
    if (currentIndex > 0) {
      this.mainImage = this.thumbnails[currentIndex - 1];
    }
  },
  handleClick(action: string) {
    console.log(action + ' tıklandı');
  },
  },
});
</script>

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
  background-color: #f9f9f9;
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