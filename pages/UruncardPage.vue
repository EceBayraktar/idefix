<template>
    <div class="container mt-5">
      <!-- Ürün Görseli ve Küçük Resimler -->
      <div class="row">
        <div class="col-md-6">
          <!-- Dış Kutuda İç İçe Kutular -->
          <div class="outer-box">
            <!-- İç Kutudaki Ana Ürün Görseli -->
            <div class="inner-box">
              <img :src="mainImage" alt="Ürün Görseli" class="img-fluid rounded" />
            </div>
            
            <!-- Küçük Resimler Dış Kutuda -->
            <div class="thumbnails d-flex justify-content-center mt-3">
              <img
                v-for="(thumb, index) in thumbnails"
                :key="index"
                :src="thumb"
                alt="Küçük Resim"
                class="img-thumbnail mx-2"
                width="80"
                height="80"
                @click="updateMainImage(thumb)"
              />
            </div>
          </div>
        </div>
  
        <!-- Ürün Detayları -->
        <div class="col-md-6">
          <h1 class="product-name">{{ productName }}</h1>
          <p class="text-muted">Apple (Türkiye Garantili)</p>
          <h2 class="price text-danger">{{ price.toLocaleString() }} TL</h2>
          <p>
            <strong>Renk:</strong>
            <span v-for="(option, index) in colors" :key="index" class="ms-3">
              <input
                type="radio"
                :id="'color-' + index"
                :value="option.name"
                v-model="selectedColor"
              />
              <label :for="'color-' + index">{{ option.name }}</label>
            </span>
          </p>
          <p>
            <strong>Depolama:</strong> {{ storage }}
          </p>
          <ul class="list-unstyled">
            <li><strong>Kamera:</strong> {{ camera }}</li>
            <li><strong>Yüz Tanıma:</strong> {{ faceRecognition }}</li>
          </ul>
          <button class="btn btn-success btn-lg w-100 mt-4">Sepete Ekle</button>
          <p class="text-muted mt-2">Tahmini Teslimat: 4 Aralık Çarşamba</p>
        </div>
      </div>
    </div>
</template>
 
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        productName: 'Apple iPhone 15 Pro Max 256 GB Ram 5G',
        price: 99000,
        storage: '256 GB',
        camera: '48 MP',
        faceRecognition: 'Var',
        mainImage: 'https://via.placeholder.com/500x500?text=Ürün+Resmi', // Ana Ürün Resmi
        thumbnails: [
          'https://via.placeholder.com/80x80?text=R1',
          'https://via.placeholder.com/80x80?text=R2',
        ], // Küçük Resimler
        colors: [
          { name: 'Beyaz', price: 94999 },
          { name: 'Mavi', price: 99000 },
          { name: 'Natürel', price: 96999 },
        ],
        selectedColor: 'Mavi',
      };
    },
    methods: {
      updateMainImage(image: string) {
        this.mainImage = image;
      },
    },
  });

  </script>
  
  <style scoped>
  /* Ürün Detayları */
  .product-name {
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  .price {
    font-size: 2rem;
    font-weight: bold;
  }
  /* Ürün Görseli Kutusu */
.product-image-box {
  border: 1px solid #f5f2f2; /* Kutunun çevresindeki çizgi */
  border-radius: 8px; /* Kenarları yuvarlat */
  padding: 15px; /* İç boşluk */
  background-color: #833131;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Hafif gölge efekti */
  margin-bottom: 20px; /* Küçük resimler ile arasındaki mesafe */
}

.product-image img {
  max-height: 400px;
}

/* Küçük Resimlerin Stil Ayarları */
img.img-thumbnail {
  cursor: pointer;
}

img.img-thumbnail:hover {
  border: 2px solid #28a745; /* Hover durumunda yeşil kenarlık */
}

  </style>
  