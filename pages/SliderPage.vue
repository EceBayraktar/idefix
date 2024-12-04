<template>
  <div class="row">
    <div class="col"></div>
    <div class="col-8">
      <br>
      <span style="font-weight: bold; font-size: large; padding-left: 10px;">Günün Teklifi</span>
      <a style="font-weight: bold; font-size: large; float: right; color: black; padding-right: 10px;" href="#" class="card-link">Tümü</a>
      <div class="carousel-container">
        <br>
        <div class="carousel" ref="carousel">
          <div class="card" v-for="(card, index) in cards" :key="index">
          
            <div class="image-container">
              <img :src="card.img" class="card-img-top small-image" :alt="card.alt || card.title">
            </div>
            <div class="card-body">
            
              <div class="col-10" style="text-align:center; font-size:x-small">
                <div v-if="card.discountPrice" class="discount-price" style="border: 2px dashed rgb(38, 25, 158);">
                  Sepette {{ card.discountPrice }}
                </div>
                <div v-else class="empty-space" style="height:25px;"></div> 
              </div>
              <div class="stars">
                <i class="bi bi-star-fill" v-for="n in Math.floor(card.rating)" :key="'full-' + index + '-' + n"></i>

                <i class="bi bi-star-half" v-if="card.rating % 1 !== 0" :key="'half-' + index"></i>

                <i class="bi bi-star" v-for="emptyIndex in (5 - Math.ceil(card.rating))" :key="'empty-' + index + '-' + emptyIndex"></i>
                <span class="n">{{ card.reviews }}</span>
              </div>
              <p style="font-size: small">
                <span class="bold" style="font-weight: bold;">{{ card.title }}</span> {{ card.description }} <br>
                <span class="bold" style="font-weight: bold;">{{ card.price }}</span>
              </p>
            </div>
            <div style="text-align:center">
              <button type="button" class="btn">Sepete Ekle</button>
            </div>
          </div>
        </div>
        <button id="prev-btn" class="control-btn" @click="prevSlide">←</button>
        <button id="next-btn" class="control-btn" @click="nextSlide">→</button><br>
      </div>
    </div>
    <div class="col"></div>
    
  </div>
</template>


<script>
export default {
  name: 'SliderPage',
  data() {
    return {
      cards: [
        { img: "https://image01.idefix.com/resize/340/0/product/2053051/qualita-rossa-cekirdek-kahve-1-kg-66c24c86dd62f.jpg", title: "Lavazza", description: "Qualita Rossa Çekirdek Kahve 1 kg", price: "399,00 TL", discountPrice:"299,00 TL", rating: 4.5, reviews: 9 },
        { img: "https://image01.idefix.com/resize/800/0/product/589815/lego-classic-icons-10323-pac-man-arcade-2651-parca-66c73eb109b87.jpg", title: "LEGO Classic", description: " Icons 10323 Pac-Man Arcade (2651 Parça)", price: "11.999,99 TL", discountPrice: "11.057,99 TL", rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/340/0/product/3626064/emirates-team-new-zealand-ac75-yat-42174-66c126494649d.jpg", title: "LEGO", description: "Emirates Team New Zealand AC75 Yat 42174", price: "3697,07 TL", discountPrice: null,rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/340/0/product/5061092/karaca-hatir-hup-duet-aroma-turk-kahve-makinesi-imperial-red-6734671e3144b.jpg", title: "Karaca", description: "Hatır Hüp Düet Aroma Türk Kahve Makinesi Imperial Red", price: "2.999,00 TL", discountPrice: "2.154,99 TL", rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/340/0/product/1957321/stanley-klasik-vakumlu-termos-19-lt-yesil-66c291a674e83.jpg", title: "Stanley", description: "Klasik Growler Vakumlu Termos 1.9 Lt Yeşil", price: "2.299,00 TL", discountPrice: null, rating: 5, reviews: 1 },
        { img: "https://image01.idefix.com/resize/340/0/product/1535255/samsung-galaxy-s21-fe-5g-128-gb-8-gb-ram-gri-66c296681ceda.jpg", title: "Samsung", description: "Galaxy S21 Fe 5g 128 Gb 8Gb Ram Siyah (2.Nesil)", price: "17.049,00 TL",discountPrice:"16.386,24 TL", rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/340/0/product/3284387/guess-gugw0768l2-kadin-kol-saati-66bba22245995.jpg", title: "Guess", description: "GUGW0768L2 Kadın Kol Saati", price: "5.216,00 TL", discountPrice: null, rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/340/0/product/926265/apple-iphone-15-pro-max-256-8-gb-ram-5g-apple-turkiye-garantili-mavi-66c5c1c638440.jpg", title: "Apple", description: "İphone 15 Pro Max 256 8 GB Ram 5G (Apple Türkiye Garantili)", price: "99.000,00 TL", discountPrice: "95.040,00 TL", rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/340/0/product/690739/braun-silk-epil-1-1176-kablolu-epilator-66c6ffd6edfcd.jpg", title: "Braun", description: "Silk-Epil 1 1176 Kablolu Epilatör", price: "799,00 TL", discountPrice: null, rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/800/0/product/4947244/quantum-pwg1030550-erkek-kol-saati-672cc29f996d6.jpg", title: "Quantum e", description: "PWG1030.550 Erkek Kol Saati", price: "4.598,37 TL", discountPrice: "4.398,37 TL", rating: 0, reviews: 0 },
        { img: "https://image01.idefix.com/resize/800/0/product/1665679/idefix-outdoor-omuz-askili-spor-cantasi-siyah-66c3ab1cdce59.jpg", title: "İdefix Outdoor ", description: "Omuz Askılı Spor Çantası - Siyah", price: "119,90 TL", discountPrice: null, rating: 3.7, reviews: 10 },

      ],
      currentIndex: 0,
      visibleCards: 5,
      cardMargin: 20,
    };
  },
  computed: {
    cardWidth() {
      const card = this.$refs.carousel?.children[0];
      const cardWidth = card ? card.offsetWidth : 0;
      return cardWidth + this.cardMargin; 
    },
    fullStars() {
      return Array(Math.floor(5)).fill(0).map((_, i) => i);
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.cards.length - this.visibleCards) {
        this.currentIndex++;
        this.updateCarousel();
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateCarousel();
      }
    },
    updateCarousel() {
      const translateX = -(this.currentIndex * this.cardWidth);
      this.$refs.carousel.style.transform = `translateX(${translateX}px)`;
    },
  },
};
</script>

<style scoped>
.discount-price {
  font-size: 0.8rem;
  color: rgb(38, 25, 158);
  font-weight: bold;
  margin-bottom: 5px;
}
.with-discount {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 2px dashed rgb(38, 25, 158);
}

.container {
  padding-left: 0;
  padding-right: 0;
}

.row {
  margin-left: 0;
  margin-right: 0;
  margin-top: 30px;
  background-color: #d3dceb;
}

.col {
  padding-left: 0;
  padding-right: 0;
}

.carousel-container {
  position: relative;
  width: 100%;
  margin: 0 ;
  overflow: hidden;
}

.carousel {
  display: flex;
  width: 92%;
  transition: transform 0.3s ease-in-out;
}

.card {
  flex: 0 0 20%; 
  margin: 10px;
  height: 500px;
  background-color: #ffffff;
  margin-top: 10px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}


.image-container {
  width: 100%;
  height: 200px;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
}

.card-img-top {
  width: auto;
  height: 100%;
  max-width: 100%;
}

.stars {
  display: flex;
  justify-content: left;
  gap: 5px;
  font-size: 0.7em;
  margin-bottom: 10px;
}
.bi-star-fill, .bi-star-half {
  color: #ecd23e; 
}
.bi-star{
  color: #000;
}
.btn{
    width: 75%;
    margin-bottom: 10px;
    background-color: rgb(47, 199, 80);
}

.control-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  color: #0f0808;
  border: none;
  padding: 10px 15px; 
  cursor: pointer;
  font-size: 1.0rem;
  border-radius: 50%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  z-index: 1; 
}

.control-btn:hover {
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
}


.card-body {
  text-align: left;
}

#prev-btn {
  left: 0;
}

#next-btn {
  right: 0;
}

@media (max-width: 1200px) {
  .card {
    flex: 0 0 25%; 
  }
}

@media (max-width: 992px) {
  .card {
    flex: 0 0 33.33%; 
  }
}

@media (max-width: 768px) {
  .card {
    flex: 0 0 50%; 
  }
}

@media (max-width: 576px) {
  .card {
    flex: 0 0 100%; 
  }
}
</style>
