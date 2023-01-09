<template>
  <section class="gallery">
    <div v-if="galleryArr" class="galleryInWrapper">
      <img class="galleryImg" src="../../assets/heroImg.png" alt="Photo of me">
      <img class="galleryImg" src="../../assets/heroImg.png" alt="Photo of me">
      <img class="galleryImg" src="../../assets/heroImg.png" alt="Photo of me">
      <img class="galleryImg" src="../../assets/heroImg.png" alt="Photo of me">
      <img class="galleryImg" src="../../assets/heroImg.png" alt="Photo of me">
      <img class="galleryImg" src="../../assets/heroImg.png" alt="Photo of me">
      <img class="galleryImg" src="../../assets/heroImg.png" alt="Photo of me">
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

<style scoped>
.gallery{
  width: 100%;
}
.galleryInWrapper{
  display: flex;
  width: 100%;
  overflow: hidden;
}

.galleryImg{
  width: 286.6px;
  border-radius: 10px;
}
</style>
