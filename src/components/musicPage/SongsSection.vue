<script setup>
import SongsContainerVue from "./SongsContainer.vue";
</script>

<template>
  <section class="Songs">
    <img class="loading" v-if="isLoading1" src="/loading.svg" alt="Loading" />
    <SongsContainerVue
      v-else
      :dataArr="epArr"
      :section-text="'Discography'"
      :headerText="`Albums and EP’s`"
    />
    <img class="loading" v-if="isLoading2" src="/loading.svg" alt="Loading" />
    <SongsContainerVue v-else :dataArr="singlesArr" :headerText="`Singles`" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      epArr: [],
      singlesArr: [],
      isLoading1: true,
      isLoading2: true,
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=19&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading1 = false;
        this.epArr = data;
      });
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=20&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading2 = false;
        this.singlesArr = data;
      });
  },
};
</script>

<style scoped>
.Songs {
  gap: 50px;
}

@media only screen and (max-width: 376px) {
  .Songs {
    width: 297px;
    gap: 15px;
  }
}
</style>
