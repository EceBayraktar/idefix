<template>
  <div class="card-container">
    <div
      class="card"
      v-for="card in cards"
      :key="card.id"
      @click="handleCardClick(card)"
    >
      <img :src="card.img" alt="Card Image" class="card-image" />
      <div class="card-overlay">
        <p>{{ card.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.card {
  position: relative;
  width: 510px;
  height: 250px;
  overflow: hidden;
  border-radius: 5px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover {
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100%;
  background-color: rgba(20, 20, 255, 0.89);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.card-overlay p {
  margin: 0;
  font-size: 1.3em;
  text-align: left;
  font-weight: bold;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app'; // Nuxt plugin'e erişim
import { getDocs, collection } from 'firebase/firestore';

// Reactive değişkenler
const cards = ref([]); // Firebase'den çekilecek veriler

// Nuxt app içinden Firebase servisine erişim
const { $db } = useNuxtApp();

// Firebase'den verileri çekmek için method
const fetchCards = async () => {
  try {
    const querySnapshot = await getDocs(collection($db, 'cards'));
    const cardData = querySnapshot.docs.map((doc) => doc.data());
    console.log(cardData); // Verileri kontrol edin
    cards.value = cardData;
  } catch (error) {
    console.error('Veriler alınırken hata oluştu:', error);
  }
};

// Kart tıklama işlemi
const handleCardClick = (card) => {
  console.log('Tıklanan kart:', card);
};

// Bileşen yüklendiğinde verileri çek
onMounted(() => {
  fetchCards();
});
</script>
