<template>
    <div class="register-container">
      <div v-if="currentPage === 1">
        <div class="register-header">
          <h1>E-posta Doğrulama</h1>
        </div>
        <p class="description">
          Lütfen e-posta adresinizi girin.
        </p>
        <input
          type="email"
          v-model="email"
          placeholder="E-posta"
          class="input-field"
          required
        />
        <button :disabled="email.trim() === ''" @click="checkEmail" class="submit-button">
          Devam Et
        </button>
      </div>
  
      <div v-else-if="currentPage === 2">
        <div class="register-header">
          <button class="back-button" @click="goBack">&lt;</button>
          <h1>Üyeliğinizi Tamamlayın</h1>
        </div>
        <p class="description">
          Üyeliğinizi tamamlamak için aşağıdaki bilgileri eksiksiz ve doğru şekilde doldurun.
        </p>
        <form @submit.prevent="handleSubmit">
          <input
            type="text"
            v-model="form.firstName"
            placeholder="Ad"
            class="input-field"
            required
          />
          <input
            type="text"
            v-model="form.lastName"
            placeholder="Soyad"
            class="input-field"
            required
          />
          <div class="password-container">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              placeholder="Şifre"
              class="input-field"
              required
            />
            <button type="button" class="toggle-password" @click="togglePassword">
              <span>{{ showPassword ? '🙈' : '👁️' }}</span>
            </button>
          </div>
          <button :disabled="!isFormValid" type="submit" class="submit-button">
            Üye Ol
          </button>
        </form>
      </div>
    </div>
</template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { getDocs, collection, query, where } from 'firebase/firestore';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  const { $db, $auth } = useNuxtApp();
  const router = useRouter();
  
  const currentPage = ref(1);
  const email = ref('');
  const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  
  const showPassword = ref(false);
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  const isFormValid = computed(() => {
    return (
      form.value.firstName.trim() !== '' &&
      form.value.lastName.trim() !== '' &&
      form.value.password.trim() !== ''
    );
  });
  
  const checkEmail = async () => {
    try {
      const usersCollection = collection($db, 'users');
      const q = query(usersCollection, where('email', '==', email.value));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        form.value.email = email.value;
        currentPage.value = 2;
      } else {
        alert('Bu e-posta adresi zaten kayıtlı.');
      }
    } catch (error) {
      console.error('E-posta kontrol hatası:', error);
      alert('Bir hata oluştu.');
    }
  };
  
  const goBack = () => {
    currentPage.value = 1;
  };
  
  const handleSubmit = async () => {
    if (isFormValid.value) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          $auth,
          form.value.email,
          form.value.password
        );
        const user = userCredential.user;
  
        // Ek kullanıcı bilgilerini Firestore'a kaydetme
        const usersCollection = collection($db, 'users');
        await addDoc(usersCollection, {
          ad: form.value.firstName,
          soyad: form.value.lastName,
          email: form.value.email,
        });
  
        alert('Üyelik başarıyla tamamlandı!');
        router.push('/');
      } catch (error) {
        console.error('Kayıt hatası:', error);
        alert('Kayıt sırasında bir hata oluştu.');
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .register-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .back-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  
  .description {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .password-container {
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #888;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  