<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GalleryVue from './components/globalComponents/Gallery.vue';
import MobileNavbarVue from './components/globalComponents/MobileNavbar.vue';
import NavbarVue from './components/globalComponents/Navbar.vue';
import FooterSection from './components/globalComponents/FooterSection.vue';
import Background from './components/globalComponents/Background.vue'
</script>


<template>
  <transition>
    <Background>
    </Background>
  </transition>
    <NavbarVue/>
    <main>
      <RouterView />
      <GalleryVue/>
    </main>
    <FooterSection/>
    <MobileNavbarVue/>
</template>

<style scoped>

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

</style>
