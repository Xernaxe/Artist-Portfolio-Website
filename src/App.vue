<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GalleryVue from './components/globalComponents/Gallery.vue';
import MobileNavbarVue from './components/globalComponents/MobileNavbar.vue';
import NavbarVue from './components/globalComponents/Navbar.vue';
import FooterSection from './components/globalComponents/FooterSection.vue';



function isMobile(){
  console.log(screen.width);
  if(screen.width <= 765){
    return true
  } else if (screen.width >= 765){
    return false
  }
  
}

console.log(isMobile());
</script>


<template>
  <div class="bg"><img class='imgBg' src="/bg.svg" alt=""></div>
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

  .imgBg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }


</style>
