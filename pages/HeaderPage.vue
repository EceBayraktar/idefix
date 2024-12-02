<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid d-flex align-items-center" style="gap: 20px;">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="https://asset.idefix.com/images/app-icons/logo.svg" alt="Logo" width="100" height="90" class="d-inline-block align-text-top" style="margin-left: 30px;">
      </a>

      <!-- Search Box -->
      <div class="d-flex justify-content-center align-items-center" style="width: 45%; margin-left: 250px;">
        <div style="position: relative; width: 100%; max-width: 3000px;">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Ürün, kategori veya marka ara" 
            style="width: 100%; padding-right: 40px; height: 45px; background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 4px;" />
          <i class="bi bi-search" 
            style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); font-size: 20px; color: #333;"></i>
        </div>
      </div>

      <!-- Icons and Login Section -->
      <div class="d-flex ms-auto align-items-center">
        <span class="login-text" style="font-size: 18px; color: black; margin-right: 15px;">
          Giriş Yap<br>
          <span class="register-text" style="font-size: 12px; font-weight: bold; color: black;">veya Üye Ol</span>
        </span>
        <i class="bi bi-person" style="font-size: 30px; margin-right: 15px;"></i>
        <i class="bi bi-heart" style="font-size: 25px; margin-right: 15px;"></i>
        <i class="bi bi-bag" style="font-size: 25px; margin-right: 25px;"></i>
      </div>
    </div>
 
    <div class="container-fluid py-3">
  <div class="row justify-content-start text-center" style="margin-left: 2%; margin-right: 2%;">
    <div class="col-auto px-2">
      Kitap
    </div>
    <div class="col-auto px-2">
      <div class="btn-group">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Menu item</a></li>
          <li><a class="dropdown-item" href="#">Menu item</a></li>
          <li><a class="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>
    </div>
    <div class="col-auto px-2">
      Elektrikli <br>Ev Aletleri
    </div>
    <div class="col-auto px-2">
      Kozmetik ve <br>Kişisel Bakım
    </div>
    <div class="col-auto px-2">
      Moda
    </div>
    <div class="col-auto px-2">
      Anne, Bebek,<br>Oyuncak
    </div>
    <div class="col-auto px-2">
      Hobi, Müzik,<br>Kırtasiye, Ofis
    </div>
    <div class="col-auto px-2">
      Ev,<br>Yaşam
    </div>
    <div class="col-auto px-2">
      Spor,<br>Outdoor
    </div>
    <div class="col-auto px-2">
      PetShop,<br>Süpermarket
    </div>
    <div class="col-auto px-2">
      Oto, Bahçe, Yapı,<br>Market
    </div>
  </div>
</div>



</nav>

  
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style>
.navbar {
  background-color: white !important; /* Arka planı beyaz yapar */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Hafif gölge */
  border-bottom: 1px solid #ddd; /* Alt çizgi (isteğe bağlı) */
}
</style>
<style>
  .custom-container {
    margin-left: 10px; /* Sol boşluk */
    max-width: 100%;  /* Ekranın tamamını kapsar */
  }
  .dropdown-menu {
  left: 0; /* Butonun altına hizalar */
  right: auto; /* Sağ hizalamayı devre dışı bırakır */
  }
</style>
