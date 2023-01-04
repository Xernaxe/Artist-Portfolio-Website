<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GalleryVue from './components/Gallery.vue';
import HelloWorld from './components/HelloWorld.vue'
import NavbarVue from './components/Navbar.vue';

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
