<template>
  <nav class="navbar bg-body-tertiary">
    <div class="sticky-header container-fluid d-flex align-items-center" style="gap: 20px;">
  <a class="navbar-brand" href="#" @click.prevent="navigateTo('home')">
    <img src="https://asset.idefix.com/images/app-icons/logo.svg" alt="Logo" width="80" height="70" class="d-inline-block align-text-top">
  </a>

  <div class="d-flex justify-content-center align-items-center flex-grow-1 mx-3">
    <div style="position: relative; width: 70%;">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Ürün, kategori veya marka ara" 
        style="width: 100%; padding-right: 40px; height: 45px; background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 4px;" />
      <i class="bi bi-search" 
        style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); font-size: 20px; color: #333;"></i>
    </div>
  </div>

  <div class="d-flex align-items-center" style="margin-left: 30px;">
    <a  href="#"
    class="login-text" 
    style="font-size: 12px; color: black; text-align: center; margin-right: 15px; text-decoration: none;"
    
  >
    <span class="register-text" style="font-size: 14px; font-weight: bold; color: black;" @click.prevent="navigateTo('login')">Giriş Yap</span>
    <br> <span @click.prevent="navigateTo('signin')"> veya Üye Ol</span>
  </a>
   
    <i 
      class="bi bi-person" 
      style="font-size: 25px; margin-right: 15px;" 
      @click="navigateTo('login')"
    >
    </i>
    <i 
      class="bi bi-heart" 
      style="font-size: 25px; margin-right: 15px;" 
      @click="navigateTo('favorites')"
    ></i>
    <i 
      class="bi bi-bag" 
      style="font-size: 25px; margin-right: 25px;" 
      @click="navigateTo('cart')"
    ></i>
  </div>
</div>

    <div class="col-1"></div>
    <div class="col-10">  
      <div class="row categories-row">
        <div v-for="category in categories" :key="category.id" class="col-auto dropdown">
          <a href="#" class="category-link">{{ category.name }}</a>
          <div v-if="category.subcategories && category.subcategories.length" class="dropdown-menu">
            <div class="dropdown-submenu">
              <a 
                v-for="sub in category.subcategories" 
                :key="sub" 
                href="#" 
                class="dropdown-item">
                {{ sub }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1"></div>
  </nav>
</template>


<script>
import { ref, onMounted } from 'vue'; // Vue'nun reaktif özellikleri
import { useRouter } from 'vue-router'; // Vue Router
import { useNuxtApp } from '#app'; // Nuxt plugin'e erişim
import { getDocs, collection, query, orderBy } from 'firebase/firestore';

export default {
  name: "HeaderPage",
  setup() {
    const categories = ref([]); // Kategoriler için reaktif bir değişken
    const { $db } = useNuxtApp(); // Nuxt app üzerinden Firestore'a erişim
    const router = useRouter(); // Vue Router kullanımı

    const fetchCategories = async () => {
      try {
        // Firestore'dan kategorileri çek
        const categoriesRef = collection($db, "categories");
        const q = query(categoriesRef, orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        // Kategorileri listeye ekle
        categories.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Kategoriler alınırken hata oluştu:", error);
      }
    };

    const navigateTo = (page) => {
      const routes = {
        home: "/",
        login: "/GirisyapPage",
        favorites: "/BegendiklerimPage",
        cart: "/SepetPage",
        signin: "/UyeolPage",
      };
      router.push(routes[page]);
    };

    onMounted(fetchCategories); // Bileşen yüklendiğinde kategorileri çek

    return {
      categories,
      navigateTo,
    };
  },
};
</script>

<style>
.navbar {
  background-color: white !important;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}
.sticky-header {
  position: sticky;
  top: 0; /* Sayfanın üst kısmına yapışmasını sağlar */
  z-index: 1000; /* Diğer öğelerin üzerine çıkması için yüksek bir z-index değeri verin */
  background-color: white; /* Arka plan rengi, kaydırma sırasında uyumlu görünmesi için */
  padding: 10px 20px;
}


/* Search Bar */
.search-input {
  width: 100%;
  padding-right: 40px;
  height: 45px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #333;
}

/* User Actions */
.user-actions {
  margin-left: 30px;
}

.login-text {
  font-size: 12px;
  color: black;
  text-align: center;
  margin-right: 15px;
}

.register-text {
  font-size: 14px;
  font-weight: bold;
  color: black;
}

.action-icon {
  font-size: 25px;
  margin-right: 15px;
  cursor: pointer;
}


.categories-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 5px;
}
.category-link {
  max-width: 90px;
  text-align: center;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  display: inline-block;
}

.category-link:hover {
  text-decoration: underline;
}
</style>
