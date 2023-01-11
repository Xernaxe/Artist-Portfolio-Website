<template>
  <section class="Music">
    <img class="loading" v-if="isLoading1" src="/loading.svg" alt="Loading" />
    <MusicContainerVue
      v-else
      :dataArr="projectsArr"
      :sectionText="'Projects'"
      :headerText="'As bandleader'"
    />
    <img class="loading" v-if="isLoading2" src="/loading.svg" alt="Loading" />
    <MusicContainerVue
      v-else
      :dataArr="playerArr"
      :headerText="'As a bass player'"
    />
  </section>
</template>

<script setup>
import MusicContainerVue from "./MusicContainer.vue";
</script>

<script>
export default {
  data() {
    return {
      projectsArr: [],
      playerArr: [],
      isLoading1: true,
      isLoading2: true,
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=17&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading1 = false;
        this.projectsArr = data;
      });
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=18&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading2 = false;
        this.playerArr = data;
      });
  },
};
</script>

<style scoped>
.Music {
  gap: 70px;
  margin: 90px 0 130px 0;
}
</style>
