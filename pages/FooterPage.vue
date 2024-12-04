<template>
<div>
<footer>
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

  <!--Bottom Footer Section -->
 <div class="footer-bottom">
   <p>&copy; 2024 idefix.com | <a href="#">Gizlilik Politikası</a> | <a href="#">Çerez Politikası</a></p>
 </div>
</footer>
</div>
</template>
<script>
  export default {
    name: "FooterPage",
  };
  </script>
  
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