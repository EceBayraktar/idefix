<template>
  <div class="container text-center">
    <div class="row row-cols-auto">
      <div class="col d-flex justify-content-start">
        <!-- İlk sütun içerisine resim ekleme -->
        <img src="C:\Users\Asus\Desktop\logo.png" alt="Resim Açıklaması" class="img-fluid" style="width: 150px; height: 150px; margin-left: 0px;" />
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>

  <div class="container text-center">
    <div class="row justify-content-md-center">
      <div class="col col-lg-2"></div>
      <div class="col-md-auto" style="font-size: 28px; font-weight: 600;">
        idefix'e Hoş Geldiniz
      </div>
      <div class="col col-lg-2"></div>
    </div>
  </div>

  <div class="container text-center">
    <div class="row row-cols-4">
      <div class="col">-</div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>

  <div class="container text-center">
    <div class="row row-cols-4">
      <div class="col"></div>
      <div class="col"><p class="h5"> Giriş Yap</p></div>
      <div class="col"><p class="h5">Üye Ol</p></div>
      <div class="col"></div>
    </div>
  </div>
  <div class="placeholder-container">
  <span class="placeholder col-12 placeholder-xs half-colored"></span>
</div>

 
  


  <div class="email-container">
    <form>
      <div class="form-group">
        <label for="email-input"></label>
        <input
          type="email"
          id="email-input"
          class="email-input"
          placeholder="E-posta/Cep Telefonu"
          required
        />
      </div>
    </form>
  </div>

  <div class="container text-center">
    <div class="row">
      <div class="col-md-6 offset-md-3"></div>
    </div>
  </div>

  <button 
  type="submit" 
  class="btn btn-primary mx-auto py-3 disabled" 
  style="width: 350px;" 
  disabled>
  Devam Et
</button>


</template>

<script>
export default {
  name: "GirisyapPage",
};
</script>

<style>
/* Kapsayıcı Stilleri */
.email-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto; /* Ortala */
  padding: 20px;
  text-align: left;
}

/* Form Grubu */
.form-group {
  margin-bottom: 15px;
}

/* E-posta Giriş Alanı */
.email-input {
  width: 100%; /* Tam genişlik */
  padding: 10px 15px; /* İç boşluk */
  font-size: 1rem;
  color: #333; /* Ana yazı rengi */
  border: 1px solid #ccc; /* Hafif gri kenarlık */
  border-radius: 5px; /* Köşeleri yuvarlat */
  outline: none; /* Odak çizgisini kaldır */
  background-color: #eaeaea; /* Gri arka plan */
}

/* Placeholder Rengi */
.email-input::placeholder {
  color: #aaa; /* Gri renk */
  font-style: italic; /* İtalik yazı */
}

/* Odak Durumu */
.email-input:focus {
  border-color: #007bff; /* Odaklanıldığında mavi kenarlık */
  background-color: #fff; /* Beyaz arka plan */
}


</style>

<style>
  /* Özelleştirilmiş stil */
  .btn-primary {
    background-color: #0C45F5; /* Mavi renk */
    border: none; /* Kenarlık kaldırılır */
    font-size: 1rem; /* Yazı boyutu */
    font-weight: 500; /* Yazı kalınlığı */
    border-radius: 0.2rem; /* Köşeleri yuvarlatır */
  }

  .btn-primary:disabled {
    background-color: #5F5353; /* Pasif durum gri renk */
    opacity: 0.35; /* Şeffaflık efekti */
    cursor: not-allowed; /* Pasif işaretçi */
  }

  /* Butonu ortalamak için mx-auto ekleyebiliriz */
  .mx-auto {
    display: block; /* Yatayda ortalanmasını sağlar */
    margin-left: auto;
    margin-right: auto;
  }
</style>
<style>
  body {
    background-color: #ffffff; /* Arka plan rengini değiştir */
  }
</style>
<style>
.placeholder-container {
    position: relative;
  }
  
  .placeholder.half-colored {
    background: linear-gradient(to left, white 40%, orange 60%);
    height: 1px; /* Daha ince yapmak için */
    width: 100%; /* Genişlik */
    border-radius: 4px; /* Kenarları yuvarlatma */
  }
</style>