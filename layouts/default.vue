<template>
  <div>
    <!-- Üst kısmı -->
    <header class="d-flex align-items-center bg-primary text-white p-3">
      <div class="d-flex align-items-center">
        <button
          class="btn btn-light me-3 toggle-btn"
          @click="toggleSidebar"
          :class="{ 'toggle-btn-shifted': isSidebarOpen }"
        >
        </button>
      </div>
    </header>

    <!-- Sidebar -->
    <div
      class="sidebar bg-light position-fixed top-0 start-0 h-100 shadow"
      :class="{ 'sidebar-open': isSidebarOpen }"
    >
      <ul class="list-unstyled p-3">
        <li>
          <NuxtLink to="/">Ana Sayfa</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/HeaderPage">Header</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/GirisyapPage">Giriş Yap</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/UyeolPage">Üye Ol</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/CarouselPage">Carousel</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/CardPage">Card</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/SepetPage">Sepet</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/SliderPage">Slider</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/UruncardPage">Ürün Bilgisi</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/BegendiklerimPage">Beğendiklerim</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/FooterPage">Footer</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/PasswordPage">Password</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/UyedevamPage">Uyeol2</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- İçerik -->
    <div :class="{ 'content-shifted': isSidebarOpen }">
      <!-- Ana sayfa dışındaki sayfalarda bileşenleri gizle -->
      <HeaderPage v-if="isHomePage" />
      <CarouselPage v-if="isHomePage" />
      <SliderPage v-if="isHomePage" />
      <CardPage v-if="isHomePage" />
      <FooterPage v-if="isHomePage" />
      <UyeolPage v-if="isUyeolPage" />
      <UyedevamPage v-if="isUyedevamPage" />
      <GirisyapPage v-if="isGirisyapPage" />
      <SepetPage v-if="isSepetPage" />
      <UruncardPage v-if="isUruncardPage" /> 
      <BegendiklerimPage v-if="isBegendiklerimPage" />
      <PasswordPage v-if="isPasswordPage" />
      
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Sidebar durumu
const isSidebarOpen = ref(false);
const route = useRoute();
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Gerekli componentleri import et
import HeaderPage from '~/pages/HeaderPage.vue';
import CarouselPage from '~/pages/CarouselPage.vue';
import SliderPage from '~/pages/SliderPage.vue';
import CardPage from '~/pages/CardPage.vue';
import FooterPage from '~/pages/FooterPage.vue';
import UyeolPage from '~/pages/UyeolPage.vue';
import UyedevamPage from '~/pages/UyedevamPage.vue';
import GirisyapPage from '~/pages/GirisyapPage.vue';
import SepetPage from '~/pages/SepetPage.vue';
import UruncardPage from '~/pages/UruncardPage.vue';
import BegendiklerimPage from '~/pages/BegendiklerimPage.vue';
import PasswordPage from '~/pages/PasswordPage.vue';
const isHomePage = computed(() => route.name === 'index');  // 'index' genellikle ana sayfanın route adı
const isUyeolPage = computed(() => route.name == 'UyeolPage');
const isUyedevamPage = computed(() => route.name == 'UyedevamPage');
const isGirisyapPage = computed(() => route.name == 'GirisyapPage');
const isSepetPage = computed(() => route.name == 'SepetPage');
const isUruncardPage = computed(() => route.name == 'UruncardPage');
const isBegendiklerimPage = computed(() => route.name == 'BegendiklerimPage');
const isPasswordPage = computed(() => route.name == 'PasswordPage');

</script>

<style scoped>
/* Sidebar */
.sidebar {
  width: 250px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1050;
}

.sidebar-open {
  transform: translateX(0);
}

/* Butonun hareketi */
.toggle-btn {
  position: fixed;
  left: 10px;
  transition: left 0.3s ease;
  z-index: 1100;
  /* Buton boyutları */
  width: 50px; /* Genişlik */
  height: 25px; /* Yükseklik */
}

.toggle-btn-shifted {
  left: 260px; /* Sidebar genişliği + küçük bir boşluk */
}

/* İçerik kayması */
.content-shifted {
  margin-left: 250px;
  transition: margin-left 0.3s ease;
}
</style>