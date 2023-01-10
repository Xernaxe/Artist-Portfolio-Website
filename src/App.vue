<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GalleryVue from './components/globalComponents/Gallery.vue';
import NavbarVue from './components/globalComponents/Navbar.vue';

</script>

<template>
  <div class="bg"><img class='imgBg' src="../public/bg.svg" alt=""></div>
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
    position: relative;
    
  }

  .imgBg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }


</style>
