<template>
  <div class="col-12 my-5">
    <div class="row">
      <div class="col-1"></div>
      
      <div class="col-6"  >
        <h6>Sepetim (1 Ürün)</h6>
        <hr />
        
        <div
          class="p-2 mb-3  justify-content-between align-items-center"
          style="background-color: #f7f7f7;"
        >
        <span>Satıcı:</span> <a href="#" class="text-decoration-none text-dark" style="color: #333;">Teknoloji Dünyası  </a>  
          <span >(4.8) </span> <span style="color:blue">Ücretsiz Kargo</span>
        </div>
       
        <div class="d-flex align-items-start mb-3 border-bottom pb-3">
          <input type="checkbox" class="form-check-input me-3" v-model="isChecked" />
          
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
            <p class="mb-1">
              <strong>Samsung </strong>Galaxy S21 Fe 5g 128 Gb 8 Gb Ram Siyah (2. Nesil)
            </p>
            <p class="text-muted mb-1">Renk: Gri</p>
            <p class="text-muted">Yarın Kargoda</p>
            <p class="fw-bold">17.069,00 TL</p>
            <div
              class="d-flex align-items-center justify-content-between"
              style="width: 120px; border: 1px solid gray;border-radius: 5px; height:40px"
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
          <div class="ms-auto">
            <button class="btn p-0">
              <i class="bi bi-trash" style="font-size: 1.5rem; color: black;"></i>
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <button class="btn  text-decoration-none">
            <span class="me-2 align-items-center" style="font-weight:bold; "><i class="bi bi-chevron-left"></i></span>Alışverişe Devam Et
          </button>
          <div class="d-flex ">
            <button class="btn rounded-circle ">
              <i class="bi bi-trash" style="font-size:1.0rem; color: black;"></i>
            </button>
            <button class="btn  text-decoration-none">
              Sepeti Boşalt
            </button>
          </div>
        </div>
      </div>
      
      <div class="col-1"></div>

      <div class="col-2">
        <h4>Sipariş Özeti</h4>
        <br>
        <div class="d-flex justify-content-between">
          <span>1 Ürün</span>
          <span>17.569,00 TL</span>
        </div> <br>
        <div class="d-flex justify-content-between text-black">
         
          <span >Kargo</span>
          <p class="text-success"> Ücretsiz
          <span class="original-price">39,99 TL</span></p>
          
        </div>
        <hr />
        <div class="d-flex justify-content-between fw-bold">
          <span>Toplam</span>
          <span>17.569,00 TL</span>
        </div>
        <button class="btn btn-primary w-100 my-5">Alışverişi Tamamla</button>

        <div class="my-5">
          <button
            class="btn w-100 d-flex justify-content-between align-items-center coupon-button"
            @click="toggleCouponVisibility"
          >
            <span class="fs-6">İndirim Kodum Var</span>
            <i :class="isCouponVisible ? 'bi bi-dash' : 'bi bi-plus'"></i>
          </button>

          <div v-if="isCouponVisible" class="coupon-menu">
            <p class="mb-5 mt-3">
              İndirim kodunuzu aşağıdaki alana girerek sepete
              uygulayabilirsiniz.
            </p>
            <div class="input-group">
              <input
                type="text"
                class="form-control coupon-input"
                placeholder="Kupon Kodu"
              />
              <button class="btn btn-dark apply-coupon-btn">Uygula</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SepetPage",
  data() {
    return {
      quantity: 1,
      isChecked: true, 
      isCouponVisible: false,
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
    toggleCouponVisibility() {
      this.isCouponVisible = !this.isCouponVisible; 
    },
  },
};
</script>


<style>
.btn {
  font-size: 1rem;
  border-radius:2px
}

.container {
  font-family: Arial, sans-serif;
}

h4 {
  color: #333;
}
button.btn-link {
  padding: 0;
  width: 40px; 
  text-decoration: none;
  font-weight: bold;
  color: black; 
}

.bi {
  font-size: 1.2rem;
  cursor: pointer;
}


.bi-trash {
  cursor: pointer;
}

.original-price {
  text-decoration: line-through; 
  color: #9b9b9b; 
}

.coupon-button {
  background-color: #0c45f51a;
  color: rgb(0, 0, 0);
  border-radius: 2px;  
}

.coupon-button:hover {
  background-color: #0c45f51a;
}
s
.coupon-button-active {
  background-color: #0c45f51a;
  color: rgb(0, 0, 0);
}

.coupon-menu {
  background-color:#0c45f51a;
  margin-top: 0;
  padding: 10px;
  border-top: 1px solid gray; 
}

.coupon-input {
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  transition: border-bottom-color 0.3s ease;
}
button.btn {
  height: 50px; 
}


</style>
