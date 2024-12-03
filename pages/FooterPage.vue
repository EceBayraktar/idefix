<template>
   <!-- Footer Section -->
<footer class="bg-white">
  <!-- Upper Light Grey Section with Social Media Links -->
  <div class="bg-light text-dark py-3">
    <div class="container ">
        <div class="row">
    <div class="col">
     Bizi Takip Edin
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
  </div>

  <!-- Main Footer Content -->
  <div class="container py-5">
    <div class="row">
      <!-- About Section -->
      <div class="col-md-3 mb-4">
        <h5>Hakkımızda</h5>
        <p>Şirketimiz, kaliteli ürünler ve müşteri odaklı hizmet anlayışıyla sektördeki lider konumunu sürdürmektedir.</p>
      </div>

      <!-- Quick Links Section -->
      <div class="col-md-3 mb-4">
        <h5>Hızlı Bağlantılar</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-dark text-decoration-none">Hakkımızda</a></li>
          <li><a href="#" class="text-dark text-decoration-none">Ürünler</a></li>
          <li><a href="#" class="text-dark text-decoration-none">İletişim</a></li>
          <li><a href="#" class="text-dark text-decoration-none">Sıkça Sorulan Sorular</a></li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div class="col-md-3 mb-4">
        <h5>İletişim</h5>
        <p>Telefon: (555) 123-4567</p>
        <p>Email: info@ornek.com</p>
      </div>

      <!-- Newsletter Section -->
      <div class="col-md-3 mb-4">
        <h5>Bülten Aboneliği</h5>
        <p>Yeniliklerden haberdar olmak için bültenimize abone olun!</p>
        <input type="email" class="form-control" placeholder="Email Adresinizi Girin">
        <button class="btn btn-primary mt-2 w-100">Abone Ol</button>
      </div>
    </div>

    <hr class="border-top border-dark">

    <!-- Footer Bottom Section -->
    <div class="text-center py-3">
      <p class="mb-0">© 2024 Örnek Şirketi. Tüm Hakları Saklıdır.</p>
    </div>
  </div>
</footer>



</template>

<style>
/* Footer Custom Styles */
footer {
  background-color: white;
}

footer h5 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;
}

footer p {
  font-size: 14px;
}

footer a {
  font-size: 14px;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #ddd;
}

footer .social-media-icons i {
  font-size: 30px; /* Icon büyüklüğü */
  transition: color 0.3s ease;
}

footer .social-media-icons i:hover {
  color: #ddd;
}

footer hr {
  margin-top: 1rem;
  border-color: #ddd;
}

footer .social-media-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .social-media-icons a {
  font-size: 50px;
  margin: 0 10px; /* Aralarındaki boşluk */
}

footer .bg-light {
  background-color: #f0f0f0; /* Açık gri renk */
}



footer .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

footer .btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
.follow-text {
    font-size: 3 rem; /* Yazıyı büyütmek için font boyutunu artırdık */
    font-weight: bold; /* Yazıyı kalınlaştırmak için */
    text-align: left; /* Sol tarafa hizalama */
    margin-left: 0; /* Sola yapıştırmak için */
}


</style>




<script>
  export default {
    name: "FooterPage.vue",
  };
  </script>