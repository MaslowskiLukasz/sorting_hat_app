<template>
  <div class="sorting-view">
    <h1>{{ selectedHouse }}</h1>
    <div v-if="selectedHouse">
      <img :src="getImagePath" :alt="`${selectedHouse} crest`" />
    </div>
    <div v-else>
      <h1>Get sorted by the Sorting Hat!</h1>
    </div>
    <button @click="getHouse()">Get Sorted!</button>
    <audio
      controls
      :src="currentAudio"
      type="audio/mp3"
      ref="audioRef"
      preload="metadata"
      autoplay
      @ended="switchAudio">
    </audio>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { selectAudio, selectHouse } from "../helpers/sortingHelpers"

const selectedHouse = ref("");
const audio = ref();
// const delays = ref([0]);
const currentAudio = ref();
const currentIndex = ref(0);
const audioRef = ref();


const getHouse = () => {
  selectedHouse.value = selectHouse();
  getAudio();
  // audioRef.value.play();
  // Object.values(audio.value).forEach((element, index) => {
  //   if (index > 0) {
  //     delays.value.push(delays.value[index - 1] + (element.duration || 0));
  //   }
  // });
  
    // Object.values(audio.value).forEach((element, index) => {
    //   setTimeout(() => {
    //     element.play();
    //   }, delays[index])
    // })

  // audio.value.map((element, index) => {
  //   if (index > 0) {
  //     delays.value.push(delays.value[index - 1] + (element.duration || 0))
  //   }
  // })
  // console.log("delays: ", delays.value);
  // audio.value.map((element) => {
  //   element.play();
  // })
}

const switchAudio = () => {
  currentIndex.value += 1;
  currentAudio.value = audio.value[currentIndex.value]
  // audioRef.value.play();
  setTimeout(() => audioRef.value.play(), 500)
}

const getAudio = () => {
  audio.value = selectAudio(selectedHouse.value);
  currentAudio.value = audio.value[0];
}

const getImagePath = computed(() => {
  return `/${selectedHouse.value.toLowerCase()}.png`;
});
</script>

<style scoped>
.sorting-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  max-height: 600px;
  background-color: transparent;
}
</style>
