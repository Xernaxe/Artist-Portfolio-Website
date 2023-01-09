<template>
  <section class="gallery">
    <div class="galleryInWrapper" >
      <img  v-for="image in arr" :key="image" :src="image" class="galleryImg" />
    </div>
  </section>
</template>



<script>

export default {
  data() {
    return {
      galleryArr: null,
      arr: [
        "/heroImg.png",
        "/heroImg.png",
        "/heroImg.png",
        "/heroImg.png",
        "/heroImg.png",
        "/heroImg.png",
        "/heroImg.png",
      ],
      index: 0,
      slider: 0,
    };
  },
  methods:{
    slide(){

    }
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=12&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.galleryArr = data;
      });
  },
};
</script>

<style scoped>
.gallery {
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-direction: row;
}
.galleryInWrapper {
  display: flex;
  position: relative;
  width: 100%;
  transform: translateX(0);
  transition: transform 20s;
}

.galleryImg {
  width: 289px;
  border-radius: 10px;
}
</style>
