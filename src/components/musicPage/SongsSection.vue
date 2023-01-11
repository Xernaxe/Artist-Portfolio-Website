  <script setup>
  import SongsContainerVue from "./SongsContainer.vue";
  </script>

<template>
  <section class="Songs">
    <!-- <SongsContainerVue  :dataArr="singlesArr" :section-text="'Discography'" :headerText="`Albums and EP’s`"/> -->
    <SongsContainerVue :dataArr="singlesArr" :headerText="`Singles`"/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      epArr: [],
      singlesArr: [],
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=17&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.epArr = data;
        console.log(data);
      });
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=20&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.singlesArr = data;
        console.log(data);
      });
  },
};
</script>

<style scoped>

  .Songs{
    gap: 50px;
  }
  
  @media only screen and (max-width: 376px) {
  .Songs{
    width: 297px;
    gap: 15px;
  }
}
</style>