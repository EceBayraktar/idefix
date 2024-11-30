<template>
    <div class="container text-center">
      <div class="row row-cols-auto">
        <div class="col d-flex justify-content-start">
          <!-- İlk sütun içerisine resim ekleme -->
          <img src="https://asset.idefix.com/images/app-icons/logo.svg" alt="Resim Açıklaması" class="img-fluid" style="width: 150px; height: 150px; margin-left: 0px;" />
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

    <div class="d-flex justify-content-center align-items-center ">
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck1">
    <label class="form-check-label" for="dropdownCheck1">
        <p class="lead fs-6">
        Turkuvaz Müzik Kitap Mağazacılık Pazarlama A.Ş tarafıma 
        <br>ticari elektronik ileti göndermesi için <a href="#" class="pe-auto">İletişim İzinleri’ni </a>  
        <br>okudum, onaylıyorum.
        </p>
    </label>
  </div>
</div>

<div
    class="d-flex justify-content-center align-items-center"
    style="margin-left: -20px;"
  >
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="dropdownCheck2"
      />
      <label class="form-check-label" for="dropdownCheck2">
        <p class="lead fs-6">
          <a href="#" class="pe-auto">Üyelik Sözleşmesi’ni</a> okudum,
          onaylıyorum.
          <span style="color: white;">-----------</span>
        </p>
      </label>
    </div>
  </div>


<div class="d-flex justify-content-center align-items-center">
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck3">
    <label class="form-check-label" for="dropdownCheck3">
        <p class="lead fs-6">
            <a href="#" class="pe-auto">idefix Üyeliği Aydınlatma Metni’ni</a> okudum, onaylıyorum.</p>
                   
    </label>
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
    name: "UyeolPage",
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
 ul {
   list-style-type: square; /* Kare işaret tipi */
   padding-left: 0; /* Soldan boşluk kaldırıldı */
   display: flex; /* Flexbox ile ortalama */
   flex-direction: column; /* Elemanları dikeyde sıralama */
   align-items: center; /* Her şeyi ortalamak için */
 }

 li {
   text-align: center; /* Yazıyı ortalar */
   margin-bottom: 10px; /* Her öğe arasına boşluk ekler */
 }
</style>
<style>
  /* Flexbox ile kutucukları ortalamak */
  .d-flex {
    display: flex;
    justify-content: flex-start; /* Yalnızca sola hizalar */
    align-items: start; /* Başlangıç hizasına alır */
  }


  /* Kutucuk ve yazı arasındaki mesafeyi ayarlamak */
  .form-check-input {
    margin-right: 10px; /* Kutucuk ile yazı arasındaki mesafeyi artır */
  }

  /* Yazı ve kutucuk arasındaki mesafeyi artırmak için */
  .form-check-label {
    display: inline-block;
    text-align: left;
  }
  /* Linkleri siyah yapmak ve altını çizmek için */
  a.pe-auto {
    color: black; /* Siyah renk */
    text-decoration: underline; /* Alt çizgi */
  }

  /* Linklerin üzerinde fareyle gezildiğinde rengi değişmesin */
  a.pe-auto:hover {
    color: black; /* Fareyle üzerine gelince renk değişmesin */
    text-decoration: underline; /* Alt çizgi devam etsin */
  }

  /* Linkler ziyaret edildikten sonra da siyah olsun */
  a.pe-auto:visited {
    color: black; /* Ziyaret edilen linklerin de rengi siyah olacak */
  }
</style>
<style>
.placeholder-container {
    position: relative;
  }
  
  .placeholder.half-colored {
    background: linear-gradient(to right, white 70%, orange 30%);
    height: 1px; /* Daha ince yapmak için */
    width: 75%; /* Genişlik */
    border-radius: 4px; /* Kenarları yuvarlatma */
  }
</style>
  