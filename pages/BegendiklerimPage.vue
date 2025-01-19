<template>
    <div class="page-container">
      <div class="container">
        <!-- Üst Bilgiler -->
        <div class="row mb-6 align-items-center">
          <div class="col d-flex justify-content-start align-items-center">
            <div v-if="user">
              <h1>{{ user.name }} {{ user.lastname }}</h1>
              <p>Initials: {{ user.initials }}</p>
            </div>
            <div v-else>
              <p>User not found or loading...</p>
            </div>
            <div class="ms-6">
              <a href="#" class="custom-link" style="font-size: 14px;">Çıkış Yap</a>
            </div>
          </div>
        </div>
 
        <!-- İçerik -->
        <div class="row">
          <!-- Sol Menü -->
          <div class="sidebar col-md-3">
            <h6>Listelerim</h6>
            <div class="sidebar-links">
              <a href="#">Beğendiklerim</a>
              <a href="#">Sonra Satın Alacaklarım</a>
              <a href="#">Stok Habercim</a>
              <a href="#">Fiyat Alarmı</a>
              <a href="#">Özel Listelerim (0)</a>
            </div>
          </div>
    
          <!-- Sağ İçerik -->
          <div class="content col-md-9">
                         <!-- Hesabım Menüsüne Dön -->
    <div class="d-flex align-items-center gap-2 mb-3">
    <i class="bi bi-chevron-left"></i> 
    <a href="#" class="text-dark text-decoration-none fw-bold">Hesabım Menüsüne Dön</a>
  </div>
        
            <div class="d-flex justify-content-between align-items-center">
         <div><br>
            <h5 class="fw-bold">Beğendiklerim</h5>
                <p class="text-muted mb-0">1 Ürün</p><br>
              </div>
              <br>
              <br>
              <button type="button" class="btn custom-btn px-5 py-3 d-flex align-items-center justify-content-center gap-2 rounded-2 border">
  <span class="font-weight-medium">Filtrele</span>
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5765 16.514V16.2505L14.4116 16.0448L8.56266 8.75H23.424L17.4986 16.041L17.3307 16.2477V16.514V23.0683L14.5765 21.903V16.514Z" stroke="#292020" stroke-width="1.5" stroke-linecap="round"></path>
  </svg>
</button>

            
            </div>
  
            <!-- Ürün Kartı -->
            <div class="product-card d-flex align-items-center justify-content-between mt-3">
                <label class="d-flex align-items-center gap-3 py-3 cursor-pointer">
  <input type="checkbox" class="form-check-input custom-checkbox" value="">
  <img src="https://i.idefix.com/cache/600x600-0/originals/0001801769001-1.jpg" alt="Kitap Resmi">

</label>

              <div class="d-flex align-items-center">
                
               
                    <div class="ms-0" style="margin-right: 200px;">
                  <h6>Rezonans Kanunu</h6>
                  <p class="mb-0">150,00 TL</p>
                  <p class="text-muted" style="font-size: 14px;">Satıcı: idefix</p>
                </div>
              </div>
              <div class="d-flex flex-column align-items-end">
  <!-- Çöp Kutusu Sağ Üste -->
  <button class="btn btn-outline-light btn-sm mb-1">
  <i class="bi bi-trash text-dark"></i> <!-- Çöp kutusu simgesi siyah olacak -->
</button>


  <!-- Sepete Ekle Butonu -->
  <button type="button" class="btn btn-outline-dark custom-button text-center d-flex align-items-center justify-content-center gap-2">
  Sepete Ekle
</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  
  
<script setup>
import { useUserStore } from '@/stores/userStore';
// Store'u import et

const userStore = useUserStore();  // Store'u kullanmaya başla

const email = 'user@example.com';  // Burada kullanıcı e-posta adresini kullanabilirsiniz

// Sayfa yüklendiğinde kullanıcı verisini çek
userStore.fetchUserByEmail(email);

// Veriyi almak için user'a eriş
const user = userStore.user;
</script> 

  

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #f8f9fa; 
  min-height: 100%;
}

.page-container {
  background-color: #f8f9fa; 
  min-height: 100vh;
  padding-top: 80px;
}

.container {
  padding: 0 15px; 
}

.user-info {
  background-color: #007bff; 
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

div.sidebar .sidebar-links a {
  color: #4e4b4b;
  text-decoration: none;
  padding-top: 20px;
}


.sidebar-links a:hover {
  color: #555; 
}
.sidebar-links {
  display: flex;
  flex-direction: column;
}

.sidebar{
  margin-top: 50px;
}


.filter-btn {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  font-size: 14px;
  padding: 5px 10px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: white;
}

.product-card img {
  max-width: 80px;
  height: auto;
}

.mt-3 {
  margin-top: 20px;
}
.custom-link {
  color: #4a4a4a; 
  text-decoration: none; 
  
}

.custom-link:hover {
  color: #000;
}
input[type="checkbox"].rounded-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.custom-menu {
  margin-left: 50px;
}
.custom-button {
    width: 200px;
    height: 40px; 
    font-size: 16px; 
    border-radius: 5px; 
  }
  .custom-btn {
    background-color: white;
    color: #292020; 
  }
  .custom-font-weight {
    font-weight: 1000; 
  }
  .custom-padding {
    padding-left: 0 !important; 
    margin-left: 0 !important;
  }
</style>







