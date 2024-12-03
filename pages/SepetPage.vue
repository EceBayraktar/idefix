<template>
  <div class="container my-5">
    <div class="row">
      <!-- Sepet Alanı -->
      <div class="col-lg-8">
        <h4>Sepetim (1 Ürün)</h4>
        <hr />
        <!-- Satıcı Bilgileri -->
        <div
          class="p-2 mb-3  justify-content-between align-items-center"
          style="background-color: #f7f7f7; border: 1px solid #ddd;"
        >
        <span>Satıcı:</span> <a href="#" class="text-decoration-none text-dark" style="color: #333;">Teknoloji Dünyası  </a>  
          <span >(4.8) </span> <span style="color:blue">Ücretsiz Kargo</span>
        </div>
        <!-- Ürün Kartı -->
        <div class="d-flex align-items-start mb-3 border-bottom pb-3">
          <input type="checkbox" class="form-check-input me-3" />
          <!-- Resim Kutusu -->
          <div
            class="d-flex justify-content-center align-items-center me-3"
            style="width: 120px; height: 120px; border: 1px solid #ddd;"
          >
            <img
              src="https://image01.idefix.com/resize/170/0/product/1535255/samsung-galaxy-s21-fe-5g-128-gb-8-gb-ram-gri-66c296681ceda.jpg"
              alt="Ürün Resmi"
              class="img-fluid"
              width="70"
              height="70"
            />
          </div>
          <div>
            <!-- Ürün Detayları -->
            <p class="mb-1">
              <strong>Samsung </strong>Galaxy S21 Fe 5g 128 Gb 8 Gb Ram Siyah (2. Nesil)
            </p>
            <p class="text-muted mb-1">Renk: Gri</p>
            <p class="text-muted">Yarın Kargoda</p>
            <p class="fw-bold">17.069,00 TL</p>
            <!-- Ürün Sayısını Arttır/Azalt -->
            <div
              class="d-flex align-items-center justify-content-between"
              style="width: 100px; border: 1px solid black; padding: 5px;"
            >
              <button
                class="btn btn-sm btn-link text-dark p-0"
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
              >
                -
              </button>
              <span>{{ quantity }}</span>
              <button
                class="btn btn-sm btn-link text-dark p-0"
                @click="increaseQuantity"
              >
                +
              </button>
            </div>
          </div>
          <!-- Çöp Kutusu İkonu -->
          <div class="ms-auto">
            <button class="btn p-0">
              <i class="bi bi-trash" style="font-size: 1.5rem; color: black;"></i>
            </button>
          </div>
        </div>
        <!-- Butonlar -->
        <div class="d-flex justify-content-between mt-3">
          <!-- Alışverişe Devam Et -->
          <button class="btn btn-link text-decoration-none">
            <span class="me-2">&lt;</span>Alışverişe Devam Et
          </button>
          <!-- Sepeti Boşalt -->
          <div class="d-flex align-items-center">
            <button class="btn  me-2 rounded-circle">
              <i class="bi bi-trash" style="font-size:1.2rem; color: black;"></i>
            </button>
            <button class="btn btn-link  text-decoration-none">
              Sepeti Boşalt
            </button>
          </div>
        </div>
      </div>

      <!-- Sipariş Özeti Alanı -->
      <div class="col-lg-4">
        <h4>Sipariş Özeti</h4>
        <hr />
        <div class="d-flex justify-content-between">
          <span>1 Ürün</span>
          <span>17.069,00 TL</span>
        </div>
        <div class="d-flex justify-content-between text-success">
          <span>Kargo</span>
          <span>Ücretsiz</span>
        </div>
        <hr />
        <div class="d-flex justify-content-between fw-bold">
          <span>Toplam</span>
          <span>17.069,00 TL</span>
        </div>
        <button class="btn btn-primary w-100 my-3">Alışverişi Tamamla</button>
        <div class="border p-3 rounded">
          <p class="fw-bold mb-2">İndirim kodum var</p>
          <input type="text" class="form-control mb-2" placeholder="Kupon Kodu" />
          <button class="btn btn-dark w-100">Uygula</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SepetPage",
  data() {
    return {
      quantity: 1, // Başlangıç ürün sayısı
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>

<style>
/* Ek CSS */
.container {
  font-family: Arial, sans-serif;
}

h4 {
  color: #333;
}

.border-bottom {
  border-bottom: 1px solid #ddd !important;
}

button.btn-link {
  padding: 0;
}

button.btn-primary {
  background-color: #0056d2;
  border: none;
}

button.btn-primary:hover {
  background-color: #004bb5;
}


button.btn-dark {
  background-color: #3a3a3a;
  border: none;
}

button.btn-outline-dark {
  border: 1px solid black;
}

div[style*="background-color: #f7f7f7"] {
  font-size: 0.9rem;
}

.bi-trash {
  cursor: pointer;
}
</style>
