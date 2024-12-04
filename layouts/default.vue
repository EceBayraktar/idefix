<template>
  <div>
    <!-- Üst kısmı -->
    <header class="d-flex align-items-center bg-primary text-white p-3">
      <!-- Buton ve Menü -->
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
      </ul>
    </div>

    <!-- İçerik -->
    <div :class="{ 'content-shifted': isSidebarOpen }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Sidebar durumu
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
isSidebarOpen.value = !isSidebarOpen.value;
};
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
