<template>
  <section class="gallery">
    <img class="loading" v-if="isLoading1" src="/loading.svg" alt="Loading" />
    <div class="galleryInWrapper">
      <div class="wrapper" v-for="image in galleryArr" :key="image.id">
        <GalleryItemVue :ext-link="image.acf.url" :img-url="image.acf.img.url"/>
      </div>
      <div class="wrapper" v-for="image in galleryArr" :key="image.id">
        <GalleryItemVue :ext-link="image.acf.url" :img-url="image.acf.img.url"/>
      </div>
    </div>
  </section>
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
      slider: 0,
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
};
</script>

<style scoped>
/* https://www.youtube.com/watch?v=3Z780EOzIQs endless gallery animation */


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
  animation: move 100s linear infinite;
}



/* .galleryInWrapper:hover{
  animation-play-state: paused;
} */


@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-289px * 10));
  }
}
</style>
