<template>
  <section class="Music">
    <MusicContainerVue
      :dataArr="projectsArr"
      :sectionText="'Projects'"
      :headerText="'As bandleader'"
    />
    <MusicContainerVue 
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
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=17&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.projectsArr = data;
        // console.log(data);
      });
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=18&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.playerArr = data;
        // console.log(data);
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
