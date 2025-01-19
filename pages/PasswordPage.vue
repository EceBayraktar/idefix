<template>
    <div class="col col-12" style="margin-left: 50px;" @click="goToindex">
    <img
      src="https://asset.idefix.com/images/app-icons/logo.svg"
      alt="Resim Açıklaması"
      class="img-fluid"
      style="width: 150px; height: 150px; margin-left: 0px;"
    />
  </div>
    <div class="login-container">
      <div class="back-link">
        <a href="#" class="back-button" @click.prevent="goToLoginPage">
            <i class="bi bi-chevron-left"></i> Giriş Yap
        </a>
      </div>
      <div class="login-text">
        <p>{{ emailText }}</p>
      </div>
      <form @submit.prevent="validatePassword">
        <div class="form-group">
          <label for="password"></label>
          <div class="password-input-container">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              id="password"
              v-model="password"
              class="password-input"
              :class="{ 'input-error': formError }"
              placeholder="Şifre"
              required
            />
            <i
              :class="passwordVisible ? 'bi bi-eye' : 'bi bi-eye-slash'"
              class="password-toggle"
              @click="togglePasswordVisibility"
            ></i>
          </div>
          <div v-if="formError" class="form-error">
            <i class="bi bi-x-circle"></i> Girdiğiniz şifre eksik veya hatalı. Kontrol edip tekrar deneyin.
          </div>
        </div>
        <div class="forgot-password-container">
          <div class="checkbox-container">
            <div
              class="checkbox-icon"
              :class="{ checked: isChecked }"
              @click="toggleCheck"
            >
              <i class="bi bi-check-square-fill"></i>
            </div>
            <label for="remember-me">Beni Hatırla</label>
          </div>
          <div class="forgot-password">
            <a href="#">Şifremi Unuttum</a>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="!password">Giriş Yap</button>
      </form>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const { $db } = useNuxtApp();

const email = ref('');
const password = ref('');
const passwordVisible = ref(false);
const emailText = ref('');
const formError = ref(false);
const isChecked = ref(false);

const router = useRouter();

onMounted(() => {
  const savedEmail = localStorage.getItem('email');
  if (savedEmail) {
    emailText.value = `${savedEmail} adresinizle giriş yapmak için son bir adımınız kaldı. Şifrenizi girin.`;
  }
});

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const goToLoginPage = () => {
  router.push('/GirisyapPage');
};
const goToindex = () => {
      router.push('/');
};
// Firebase Authentication ile şifre doğrulama
const validatePassword = async () => {
  const savedEmail = localStorage.getItem('email');
  const auth = getAuth();

  try {
    // Firebase Authentication ile giriş yapmaya çalış
    await signInWithEmailAndPassword(auth, savedEmail, password.value);
    
    // Eğer giriş başarılıysa, anasayfaya yönlendir
    router.push('/');
  } catch (error) {
    console.error(error.message);
    formError.value = true;
    if (error.code === 'auth/wrong-password') {
      formError.message = 'Şifre yanlış. Lütfen tekrar deneyin.';
    } else if (error.code === 'auth/user-not-found') {
      formError.message = 'Bu email ile kayıtlı bir kullanıcı bulunamadı.';
    } else {
      formError.message = 'Bir hata oluştu. Lütfen tekrar deneyin.';
    }
  }
};

const toggleCheck = () => {
  isChecked.value = !isChecked.value;
};
</script>

  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
  }
  
  .back-link {
    display: flex;
    justify-content: flex-start;
  }
  
  .back-button {
    font-size: 16px;
    text-decoration: none;
    color: #000000;
  }
  
  .login-text {
    text-align: center;
    font-size: 14px;
    margin: 15px 0;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .password-input-container {
    position: relative;
  }
  
  .password-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .password-toggle {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  
  .checkbox-container {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .checkbox-icon {
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 10px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }
  
  .checkbox-icon i {
    font-size: 17px;
    color: transparent;
  }
  
  .checkbox-icon.checked {
    background-color: #ffffff;
    border-color: #ffffff;
  }
  
  .checkbox-icon.checked i {
    color: #007bff;
  }
  
  .forgot-password-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .forgot-password,
  .remember-me {
    font-size: 14px;
  }
  
  .forgot-password a,
  .remember-me label {
    text-decoration: underline;
    color: #000000;
  }
  
  .forgot-password {
    text-align: left;
  }
  
  .remember-me {
    text-align: right;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .btn:disabled {
    background-color: #ccc;
  }
  
  .btn-primary {
    background-color: #007bff;
  }
  
  .form-error {
    color: black;
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .form-error i {
    color: red;
    margin-right: 5px;
  }
  
  .input-error {
    border: 1px solid red;
  }
  </style>
  