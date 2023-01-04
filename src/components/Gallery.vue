<template>
  <section class="gallery">
    <div v-if="galleryArr" class="galleryInWrapper">
      <div class="1">1</div>
      <div class="1">2</div>
      <div class="1">3</div>
      <div class="1">4</div>
      <div class="1">5</div>
      <div class="1">5</div>
    </div>
    <div v-else class="loading">Loading...</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      galleryArr: null
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=12&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.galleryArr = data
      });
  },
};
</script>

<style></style>
