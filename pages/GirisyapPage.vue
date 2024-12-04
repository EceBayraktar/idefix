<template>
  <div class="container text-center">
    <div class="row row-cols-auto">
      <div class="col d-flex justify-content-start">
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
      <div class="col underline-orange"><p class="h5"> Giriş Yap</p></div>
      <div class="col"><p class="h5">Üye Ol</p></div>
      <div class="col"></div>
    </div>
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
.email-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

.email-input {
  width: 100%;
  padding: 10px 15px; 
  font-size: 1rem;
  color: #333; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  outline: none; 
  background-color: #eaeaea; 
}

.email-input::placeholder {
  color: #aaa; 
  font-style: italic;
}

.email-input:focus {
  border-color: #007bff; 
  background-color: #fff;
}


</style>

<style>
  .btn-primary {
    background-color: #0C45F5; 
    border: none;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.2rem; 
  }

  .btn-primary:disabled {
    background-color: #5F5353;
    opacity: 0.35;
    cursor: not-allowed;
  }

  .mx-auto {
    display: block; 
    margin-left: auto;
    margin-right: auto;
  }
</style>
<style>
  body {
    background-color: #ffffff; 
  }
</style>
<style>
.placeholder-container {
    position: relative;
  }
  
  .placeholder.half-colored {
    background: linear-gradient(to left, white 40%, orange 60%);
    height: 1px; 
    width: 100%; 
    border-radius: 4px; 
  }
</style>