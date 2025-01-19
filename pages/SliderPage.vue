<template>
  <div class="row">
    <div class="col"></div>
    <div class="col-8">
      <br>
      <span style="font-weight: bold; font-size: large; padding-left: 10px;">Günün Teklifi</span>
      <a style="font-weight: bold; font-size: large; float: right; color: black; padding-right: 10px;" href="#" class="card-link">Tümü</a>
      <div class="carousel-container">
        <br>
        <div class="carousel" ref="carousel">
          <div class="card" v-for="(card, index) in products" :key="index">
            <div class="image-container">
              <img :src="card.img" class="card-img-top small-image" :alt="card.alt || card.title">
            </div>
            <div class="card-body">
              <div class="col-10" style="text-align:center; font-size:x-small">
                <div v-if="card.discountPrice" class="discount-price" style="border: 2px dashed rgb(38, 25, 158);">
                  Sepette {{ card.discountPrice }}
                </div>
                <div v-else class="empty-space" style="height:25px;"></div>
              </div>
              <div class="stars">
                <i class="bi bi-star-fill" v-for="n in Math.floor(card.rating)" :key="'full-' + index + '-' + n"></i>
                <i class="bi bi-star-half" v-if="card.rating % 1 !== 0" :key="'half-' + index"></i>
                <i class="bi bi-star" v-for="emptyIndex in (5 - Math.ceil(card.rating))" :key="'empty-' + index + '-' + emptyIndex"></i>
                <span class="n">{{ card.reviews }}</span>
              </div>
              <p style="font-size: small">
                <span class="bold" style="font-weight: bold;">{{ card.title }}</span> {{ card.description }} <br>
                <span class="bold" style="font-weight: bold;">{{ card.price }}</span>
              </p>
            </div>
            <div style="text-align:center">
              <button type="button" class="btn" @click="addToCart(card)">Sepete Ekle</button>
            </div>
          </div>
        </div>
        <button id="prev-btn" class="control-btn" @click="prevSlide">←</button>
        <button id="next-btn" class="control-btn" @click="nextSlide">→</button><br>
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useProductsStore } from '@/stores/productsStore';

const store = useProductsStore();
const products = ref([]); // Reaktif olarak ürünleri saklama
const currentIndex = ref(0);
const carousel = ref(null);
const visibleCards = 5;

const cardWidth = computed(() => {
  const cardElement = carousel.value?.children[0];
  return cardElement ? cardElement.offsetWidth + 20 : 0; // Card genişliği + margin
});

const fetchCards = async () => {
  try {
    await store.fetchProducts();
    products.value = store.products; // Store'dan ürünleri çekme
  } catch (error) {
    console.error('Ürünler yüklenirken hata oluştu:', error);
  }
};

const addToCart = async (card) => {
  try {
    await store.addProductToCart(card);
    console.log(`${card.title} sepete eklendi.`);
  } catch (error) {
    console.error('Sepete eklenirken hata oluştu:', error);
  }
};

const updateCarousel = () => {
  const translateX = -(currentIndex.value * cardWidth.value);
  if (carousel.value) {
    carousel.value.style.transform = `translateX(${translateX}px)`;
  }
};

const nextSlide = () => {
  if (currentIndex.value < products.value.length - visibleCards) {
    currentIndex.value++;
    updateCarousel();
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    updateCarousel();
  }
};

onMounted(() => {
  fetchCards(); // Bileşen yüklendiğinde ürünleri getir
});

</script>

<style scoped>
.discount-price {
  font-size: 0.8rem;
  color: rgb(38, 25, 158);
  font-weight: bold;
  margin-bottom: 5px;
}
.with-discount {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 2px dashed rgb(38, 25, 158);
}

.container {
  padding-left: 0;
  padding-right: 0;
}

.row {
  margin-left: 0;
  margin-right: 0;
  margin-top: 30px;
  background-color: #d3dceb;
}

.col {
  padding-left: 0;
  padding-right: 0;
}

.carousel-container {
  position: relative;
  width: 100%;
  margin: 0 ;
  overflow: hidden;
}

.carousel {
  display: flex;
  width: 92%;
  transition: transform 0.3s ease-in-out;
}

.card {
  flex: 0 0 20%; 
  margin: 10px;
  height: 500px;
  background-color: #ffffff;
  margin-top: 10px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}


.image-container {
  width: 100%;
  height: 200px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
}

.card-img-top {
  width: auto;
  height: 100%;
  max-width: 100%;
}

.stars {
  display: flex;
  justify-content: left;
  gap: 5px;
  font-size: 0.7em;
  margin-bottom: 10px;
}
.bi-star-fill, .bi-star-half {
  color: #ecd23e; 
}
.bi-star{
  color: #000;
}
.btn{
    width: 75%;
    margin-bottom: 10px;
    background-color: rgb(47, 199, 80);
}

.control-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  color: #0f0808;
  border: none;
  padding: 10px 15px; 
  cursor: pointer;
  font-size: 1.0rem;
  border-radius: 50%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  z-index: 1; 
}

.control-btn:hover {
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
}


.card-body {
  text-align: left;
}

#prev-btn {
  left: 0;
}

#next-btn {
  right: 0;
}

@media (max-width: 1200px) {
  .card {
    flex: 0 0 25%; 
  }
}

@media (max-width: 992px) {
  .card {
    flex: 0 0 33.33%; 
  }
}

@media (max-width: 768px) {
  .card {
    flex: 0 0 50%; 
  }
}

@media (max-width: 576px) {
  .card {
    flex: 0 0 100%; 
  }
}
</style>