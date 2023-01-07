<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GalleryVue from './components/globalComponents/Gallery.vue';
import NavbarVue from './components/globalComponents/Navbar.vue';

</script>

<template>
  <NavbarVue/>
  <main>
    <RouterView />
    <GalleryVue />
  </main>
</template>

<style scoped>

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }


</style>
