  <script setup>
  import SongsContainerVue from "./SongsContainer.vue";
  </script>

<template>
  <section class="Songs">
    <SongsContainerVue :section-text="'Discography'" :headerText="`Albums and EP’s`"/>
    <SongsContainerVue :headerText="`Singles`"/>
  </section>
</template>


<style>

</style>