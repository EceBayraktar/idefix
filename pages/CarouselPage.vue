<template>
  <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button
        v-for="(image, index) in carouselImages"
        :key="index"
        type="button"
        :data-bs-target="'#carouselExampleRide'"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(image, index) in carouselImages"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <img :src="image.img" class="d-block w-100" alt="Carousel image" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleRide"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleRide"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCarouselStore } from '@/stores/carouselStore'; // Pinia store import

// Pinia store'dan carousel verilerini almak
const { images: carouselImages, fetchCarouselImages, loading, error } = useCarouselStore();

// Verileri çekmek için component yüklendiğinde çağır
onMounted(() => {
  fetchCarouselImages();
});
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.carousel-control-prev {
  left: 50px;
}

.carousel-control-next {
  right: 50px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #e61010;
}
</style>
