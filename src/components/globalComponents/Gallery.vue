<template>
  <section class="gallery">
    <div class="galleryInWrapper" >
      <div v-for="image in arr" :key="image" class="imageWrapper">
        <img  :src="image" class="galleryImg" />
      </div>
      <div v-for="image in arr" :key="image" class="imageWrapper">
        <img  :src="image" class="galleryImg" />
      </div>
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
/* https://www.youtube.com/watch?v=3Z780EOzIQs endless gallery animation */
.gallery {
  width: 100%;
  position: relative;
  overflow: hidden;
  flex-direction: row;
}
.galleryInWrapper {
  display: flex;
  width: calc(289px * 20);
  animation: move 60s linear infinite;
}

.imageWrapper{
  padding: 10px;
  width: 289px;
  display: flex;
  align-items: center;
}

/* .galleryInWrapper:hover{
  animation-play-state: paused;
} */
.galleryImg {
  width: 100%;
  border-radius: 10px;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-289px * 10));
  }
  
}
</style>
