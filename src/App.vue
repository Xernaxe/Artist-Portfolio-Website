<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GalleryVue from './components/globalComponents/Gallery.vue';
import MobileNavbarVue from './components/globalComponents/MobileNavbar.vue';
import NavbarVue from './components/globalComponents/Navbar.vue';
import FooterSection from './components/globalComponents/FooterSection.vue';
import Background from './components/globalComponents/Background.vue'



function isMobile(){
  if(screen.width <= 765){
    return true
  } else if (screen.width >= 765){
    return false
  }
  
}

</script>


<template>
  <transition>
    <Background>
    </Background>
  </transition>
    <NavbarVue v-if="!isMobile()" />
    <main>
      <RouterView />
      <GalleryVue v-if="!isMobile()"/>
    </main>
    <FooterSection/>
    <MobileNavbarVue v-if="isMobile()"/>
</template>

<style scoped>

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

</style>
