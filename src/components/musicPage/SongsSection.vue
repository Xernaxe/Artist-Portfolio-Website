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
    gap: 130px;
  }
  
  @media only screen and (max-width: 376px) {
  .Songs{
    width: 297px;
    gap: 15px;
  }
}
</style>