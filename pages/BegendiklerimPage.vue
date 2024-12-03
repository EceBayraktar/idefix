<template>
    <div class="page-container">
      <div class="container">
        <!-- Üst Bilgiler -->
        <div class="row mb-3 align-items-center">
          <div class="col d-flex justify-content-start align-items-center">
            <div class="user-info">
              EB
            </div>
            <div class="ms-3">
              <h5 class="mb-1">Ece Bayraktar</h5>
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
              <a href="#">Beğendiklerim</a><br><br>
              <a href="#">Sonra Satın Alacaklarım</a><br><br>
              <a href="#">Stok Habercim</a><br><br>
              <a href="#">Fiyat Alarmı</a><br><br>
              <a href="#">Özel Listelerim (0)</a>
            </div>
          </div>
  
          <!-- Sağ İçerik -->
          <div class="content col-md-9">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6>Beğendiklerim</h6>
                <p class="text-muted mb-0">1 Ürün</p>
              </div>
              <!-- Filtre Butonu -->
              <button class="btn filter-btn">
                <i class="bi bi-filter"></i> Filtrele
              </button>
            </div>
  
            <!-- Ürün Kartı -->
            <div class="product-card d-flex align-items-center justify-content-between mt-3">
              <div class="d-flex align-items-center">
                <img src="https://i.idefix.com/cache/600x600-0/originals/0001801769001-1.jpg" alt="Kitap Resmi">
                <div class="ms-3">
                  <h6>Rezonans Kanunu</h6>
                  <p class="mb-0">150,00 TL</p>
                  <p class="text-muted" style="font-size: 14px;">Satıcı: idefix</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <button class="btn btn-outline-danger btn-sm me-2">
                  <i class="bi bi-trash"></i>
                </button>
                <button class="btn btn-primary btn-sm">Sepete Ekle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  export default {
    name: "BegendiklerimPage",
  };
  </script>
  

  

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #f8f9fa; /* Açık gri arka plan */
  min-height: 100%;
}

.page-container {
  background-color: #f8f9fa; /* Sayfa arka planı */
  min-height: 100vh;
  padding-top: 20px; /* Hafif üst boşluk */
}

.container {
  padding: 0 15px; /* Varsayılan padding */
}

.user-info {
  background-color: #007bff; /* Mavi arka plan */
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
}


.sidebar-links a:hover {
  color: #555; /* İsteğe bağlı: Üzerine gelindiğinde koyu gri */
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
  color: #4a4a4a; /* Koyu gri */
  text-decoration: none; /* Altı çizgisiz */
  
}

.custom-link:hover {
  color: #000; /* İsteğe bağlı: Üzerine gelindiğinde daha koyu gri */
}

</style>


<!--<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Footer Design</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .footer-social {
      background-color: #f0f0f0;
      padding: 10px 0;
    }

    .footer-social .social-icons i {
      font-size: 24px;
      margin: 0 10px;
      color: black;
    }

    .footer-main {
      background-color: #ffffff;
      padding: 40px 0;
    }

    .footer-main h6 {
      font-weight: bold;
    }

    .footer-bottom {
      background-color: #f0f0f0;
      padding: 10px 0;
      text-align: center;
      font-size: 14px;
    }
  </style>
</head>
<body>

<footer>
   Social Media Section
  <div class="footer-social text-center">
    <span class="fw-bold me-3">Bizi Takip Edin</span>
    <span class="social-icons">
      <i class="bi bi-facebook"></i>
      <i class="bi bi-twitter"></i>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-youtube"></i>
      <i class="bi bi-whatsapp"></i>
    </span>
  </div>

   Main Footer Section 
  <div class="footer-main">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h6>Kurumsal</h6>
          <ul class="list-unstyled">
            <li><a href="#">Biz Kimiz</a></li>
            <li><a href="#">İdefix'te Satış Yap</a></li>
            <li><a href="#">Kariyer</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6>Yardım</h6>
          <ul class="list-unstyled">
            <li><a href="#">İşlem Rehberi</a></li>
            <li><a href="#">Teslimat</a></li>
            <li><a href="#">Ödeme</a></li>
            <li><a href="#">İade ve Değişim</a></li>
            <li><a href="#">SSS</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6>Popüler Markalar</h6>
          <ul class="list-unstyled">
            <li><a href="#">Xiaomi</a></li>
            <li><a href="#">Apple</a></li>
            <li><a href="#">Samsung</a></li>
            <li><a href="#">Sony</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h6>Popüler Sayfalar</h6>
          <ul class="list-unstyled">
            <li><a href="#">Kişisel Bakım</a></li>
            <li><a href="#">Laptop</a></li>
            <li><a href="#">Can Yayınları</a></li>
            <li><a href="#">Kozmetik</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

   Bottom Footer Section 
  <div class="footer-bottom">
    <p>&copy; 2024 idefix.com | <a href="#">Gizlilik Politikası</a> | <a href="#">Çerez Politikası</a></p>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"></script>
</body>
</html>
-->






