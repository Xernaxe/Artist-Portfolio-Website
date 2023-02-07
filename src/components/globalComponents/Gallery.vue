<template>
  <section class="gallery">
    <img class="loading" v-if="isLoading1" src="/loading.svg" alt="Loading" />
    <div class="galleryInWrapper" :style="{'transform': getPercentage}">
      <div class="wrapper" v-for="image in galleryArr" :key="image.id">
        <GalleryItemVue :ext-link="image.acf.url" :img-url="image.acf.img.url"/>
      </div>
    </div>
  </section>
  <div class="galleryNavWrapper">
    <div @click="backArrow" class="galleryArrow"><img src="/mobileArrow.svg" style="rotate: -90deg;" alt="Back"></div>
    <div class="galleryNav">
      <div @click="this.index = 0" class="galleryButton" :class="index == 0 ? 'activeBtn' : ''"></div>
      <div @click="this.index = 1" class="galleryButton" :class="index == 1 ? 'activeBtn' : ''"></div>
      <div @click="this.index = 2" class="galleryButton" :class="index == 2 ? 'activeBtn' : ''"></div>
    </div>
    <div @click="nextArrow" class="galleryArrow"><img src="/mobileArrow.svg" style="rotate: 90deg;" alt="Next"></div>
  </div>
</template>
<script setup>
import GalleryItemVue from './GalleryItem.vue';
</script>

<script>
export default {
  data() {
    return {
      galleryArr: [],
      index: 0,
      isLoading1: true,
      isHovered: false,
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=21&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading1 = false;
        this.galleryArr = data;
      });
  },
  computed:{
    getPercentage(){
      let percentage
      switch (this.index) {
        case 0:
          percentage = 'translateX(0%)'
          break;
      
          case 1:
          percentage = 'translateX(-100vw)'
          break;

          case 2:
          percentage = 'translateX(-200vw)'
          break;
      }
      return percentage
    }
  },
  methods: {
    nextArrow(){
      this.index++
      this.index %= 3
    },
    backArrow(){
      if(this.index === 0){
        this.index = 3
      }
      this.index--
    }
  }
};
</script>

<style scoped>
@media (max-width: 420px){
  .gallery, .galleryNavWrapper{
    display: none!important;
  }
}

.galleryArrow, .galleryButton{
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.galleryArrow:hover {
  transform: scale(1.2);
}

.galleryButton:hover {
  transform: scale(1.1);
}

.galleryNav{
  width: 80px;
  height: 20px;
  background: linear-gradient(0deg, #623755 0%, #9B8E70 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  gap: 10px;
}
.galleryNavWrapper{
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 30px;
  align-items: center;
}

.galleryButton{
  width: 12px;
  height: 12px;
  background-color: #0E131F;
  border-radius: 50%;
  cursor: pointer;
}

.activeBtn{
  background-color: #F1F1E6;
}

.gallery {
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-direction: row;
  margin-bottom: 0;
}
.galleryInWrapper {
  display: flex;
  width: calc(289px * 20);
  gap: 10px;
  transition: transform 1s;
}



</style>
