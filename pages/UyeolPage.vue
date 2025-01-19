<template>
  <div class="col col-12" style="margin-left: 50px;" @click="goToindex">
    <img
      src="https://asset.idefix.com/images/app-icons/logo.svg"
      alt="Resim Açıklaması"
      class="img-fluid"
      style="width: 150px; height: 150px; margin-left: 0px;"
    />
  </div>

  <div class="container text-center">
    <div class="row justify-content-md-center">
      <div class="col-md-auto" style="font-size: 28px; font-weight: 600;">
        idefix'e Hoş Geldiniz
      </div>
    </div>
  </div>
  <br />

  <div class="container text-center">
    <div class="row row-cols-4">
      <div class="col"></div>
      <div class="col tab inactive" @click="goToGirisyapPage">
        <p class="h5">Giriş Yap</p>
        <div class="underline-grey"></div>
      </div>
      <div class="col tab active">
        <p class="h5">Üye Ol</p>
        <div class="underline-orange"></div>
      </div>
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
          v-model="email"
          @input="checkEmailExistence"
        />
      </div>
    </form>
    <div v-if="emailExists" class="email-warning">
    Bu e-posta adresi zaten kayıtlı!
  </div>
  </div>

  <div class="container text-center">
    <div class="row">
      <div class="col-md-6 offset-md-3"></div>
    </div>
  </div>

  <div class="d-flex justify-content-center align-items-center">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck1" v-model="check1" />
      <label class="form-check-label" for="dropdownCheck1">
        <p class="lead fs-6">
          Turkuvaz Müzik Kitap Mağazacılık Pazarlama A.Ş tarafıma
          <br />ticari elektronik ileti göndermesi için
          <a href="#" class="pe-auto">İletişim İzinleri’ni </a>
          <br />okudum, onaylıyorum.
        </p>
      </label>
    </div>
  </div>

  <div
    class="d-flex justify-content-center align-items-center"
    style="margin-left: -20px;"
  >
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck2" v-model="check2" />
      <label class="form-check-label" for="dropdownCheck2">
        <p class="lead fs-6">
          <a href="#" class="pe-auto">Üyelik Sözleşmesi’ni</a> okudum,
          onaylıyorum.
        </p>
      </label>
    </div>
  </div>

  <div class="d-flex justify-content-center align-items-center">
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="dropdownCheck3" v-model="check3" />
      <label class="form-check-label" for="dropdownCheck3">
        <p class="lead fs-6">
          <a href="#" class="pe-auto">idefix Üyeliği Aydınlatma Metni’ni</a> okudum, onaylıyorum.
        </p>
      </label>
    </div>
  </div>

  <button
    type="submit"
    class="btn btn-primary mx-auto py-3"
    style="width: 350px;"
    :disabled="isButtonDisabled"
    @click="goToUyedevamPage"
  >
    Devam Et
  </button>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"; // Router importu
import { useNuxtApp } from "#app"; // Nuxt plugin'e erişim
import { getDocs, collection } from "firebase/firestore";

export default {
  name: "UyeolPage",
  setup() {
    const { $db } = useNuxtApp();
    const router = useRouter(); // Router instance
    const email = ref("");
    const check1 = ref(false);
    const check2 = ref(false);
    const check3 = ref(false);
    const emailExists = ref(false);
    
    const isButtonDisabled = ref(true); // Başlangıçta buton devre dışı
    
    const checkEmailExistence = async () => {
      // E-posta alanı boşsa buton devre dışı kalır
      if (!email.value) {
        isButtonDisabled.value = true;
        return;
      }


      // Firestore email collection check
      const usersRef = collection($db, "users"); // 'users' koleksiyonunu değiştirin
      const querySnapshot = await getDocs(usersRef);
      emailExists.value = false;

      querySnapshot.forEach((doc) => {
        if (doc.data().email === email.value) {
          emailExists.value = true;
        }
      });

      // E-posta mevcut değilse ve checkbox'lar işaretliyse buton aktif olur
      // Eğer email mevcut değilse ve her iki checkbox işaretli ise buton aktif
      isButtonDisabled.value = emailExists.value || !(check2.value && check3.value);
    };
    
    const goToUyedevamPage = () => {
      if (!isButtonDisabled.value) {
        router.push("/UyedevamPage"); // UyedevamPage'e yönlendir
      }
    };
    const goToGirisyapPage = () => {
      router.push('/GirisyapPage');
    };
    const goToindex = () => {
      router.push('/');
    };

    

    return {
      email,
      check1,
      check2,
      check3,
      emailExists,
      isButtonDisabled,
      checkEmailExistence,
      goToUyedevamPage,
      goToGirisyapPage,
      goToindex,
    };
  }
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

.email-input-container {
  position: relative;
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

.check-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: white;
  background-color: rgb(81, 197, 81);
  border-radius: 50%;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.check-icon i {
  font-size: 0.8rem;
}

.btn-primary {
  background-color: #0c45f5;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.2rem;
}

.btn-primary:disabled {
  background-color: #5f5353;
  opacity: 0.35;
  cursor: not-allowed;
}

.mx-auto {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

body {
  background-color: #ffffff;
}

.tab {
  padding-bottom: 10px;
  cursor: pointer;
}

.tab .underline-orange {
  height: 2px;
  background-color: orange;
  width: 100%;
  margin-top: 5px;
}

.tab.active .underline-orange {
  background-color: orange;
}

.tab.inactive .underline-grey {
  height: 2px;
  background-color: #ccc;
  width: 100%;
  margin-top: 5px;
  margin-left: 0px;
}

/* Yeni stil - e-posta uyarısı */
.email-warning {
  color: #e74c3c;
  font-size: 14px;
  text-align: center;
}
</style>