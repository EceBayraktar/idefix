<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid d-flex align-items-center" style="gap: 20px;">
  
      <a class="navbar-brand" href="#">
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
        <span class="login-text" style="font-size: 12px; color: black; text-align: center; margin-right: 15px;">
          <span class="register-text" style="font-size: 14px; font-weight: bold; color: black;">Giriş Yap</span>
          <br> veya Üye Ol
        </span>
        <i class="bi bi-person" style="font-size: 25px; margin-right: 15px;"></i>
        <i class="bi bi-heart" style="font-size: 25px; margin-right: 15px;"></i>
        <i class="bi bi-bag" style="font-size: 25px; margin-right: 25px;"></i>
      </div>
    </div>

  <div class="container-fluid py-3">
    <div class="row categories-row justify-content-end">
      <div class="col-auto dropdown">
        <a href="#" class="category-link">Kitap</a>
      </div>
      <div class="col-auto dropdown">
        <a href="#" class="category-link">Telefon</a>
        <div class="dropdown-menu">
          <div class="dropdown-submenu">
            <a href="#" class="dropdown-item">Cep Telefonu</a>
            <a href="#" class="dropdown-item">Cep Telefonu Aksesuarları</a>
            <a href="#" class="dropdown-item">Yedek Parçalar</a>
            <a href="#" class="dropdown-item">GPS & Navigasyon</a>
            <a href="#" class="dropdown-item">Giyilebilir Teknoloji</a>
          </div>
          <div class="dropdown-images">
            <div>
              <img src="https://images.idefix.com/mpstatics/nav/b1e6dd4f43b7b7c5459f4c6bacd93a55-67486e974b732.jpg" alt="iPhone">
              <p>iPhone IOS Telefonlar</p>
            </div>
            <div>
              <img src="https://images.idefix.com/mpstatics/nav/edd209fb2b60f0681af37887b1f81703-67486ea285682.jpg" alt="Samsung">
              <p>Samsung Telefonlar</p>
            </div>
          </div>
    <div class="dropdown-additional">
      <a href="#" class="dropdown-item">iPhone Telefonlar</a>
      <a href="#" class="dropdown-item">Android Telefonlar</a>
      <a href="#" class="dropdown-item">Tuşlu Telefonlar</a>
      <a href="#" class="dropdown-item">Yenilenmiş Telefonlar</a>
    </div>
      </div>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Elektronik</a>
      
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Elektrikli Ev<br> Aletleri</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Kozmetik ve <br> Kişisel Bakım</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Moda</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Anne,Bebek,<br>Oyuncak</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Hobi,Müzik,<br>Kırtasiye,Ofis</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Ev,<br>Yaşam</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Spor,<br>Outdoor</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Pet Shop,<br>Süpermarket</a>
    </div>
    <div class="col-auto">
      <a href="#" class="category-link">Oto,Bahçe,Yapı,<br>Market</a>
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
  background-color: white !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #ddd;
}

.dropdown:hover .dropdown-menu {
      display: flex;
    }

    .dropdown-menu {
      display: none;
      flex-direction: row;
      background-color: white;
      border: 1px solid #ddd;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 700px;
    }

    .dropdown-submenu {
      width: 40%;
    }
.dropdown-additional {
    position: absolute;
    top: 0;
    left: 100%;
    width: 200px;
    display: none;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
}
.dropdown-item {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    display: block;
    padding: 5px 10px;
}

.dropdown-additional .dropdown-item:hover {
    background-color: #f0f0f0;
}

.dropdown-submenu:hover .dropdown-additional {
    display: block;
}

.dropdown-images {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
    .dropdown-images {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .dropdown-images img {
      width: 100%;
      max-width: 150px;
      border-radius: 5px;
    }  
    .categories-row {
      margin-top: 20px;
      justify-content: flex-end; 
      gap: 20px;
      flex-wrap: wrap;
    }

    .category-link {
      text-decoration: none;
      color: #000;
      font-size: 14px;
      cursor: pointer;
    }
    .categories-row .col-auto:first-child {
      margin-left: 50px; 
    }

    .category-link:hover {
      text-decoration: underline;
    }

</style>

