  <script setup>
  import SongsContainerVue from "./SongsContainer.vue";
  </script>

<template>
  <section class="Songs">
    <SongsContainerVue :section-text="'Discography'" :headerText="`Albums and EP’s`"/>
    <SongsContainerVue :headerText="`Singles`"/>
  </section>
</template>


<style scoped>

  .Songs{
    gap: 50px;
  }
  
</style>