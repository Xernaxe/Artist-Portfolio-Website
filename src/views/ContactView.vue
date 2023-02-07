<script setup>
import ContactVue from '../components/contactPage/Contact.vue';
import MusicVue from '../components/globalComponents/Music.vue';
import HeroVue from '../components/homePage/Hero.vue';
import Contact from '../components/contactPage/Contact.vue';
import Discover from '../components/homePage/Discover.vue';

</script>

<script>
  export default{
    mounted(){
      document.title = 'Contact Page'
    }
  }
</script>


<template>
  <MusicVue :audioTitle="'I’ll See You Again - Footprints by Pasaravičienė/Sedlák'" :audioSrc="'./SeeYouAgain.mp3'" quote="“Remembering the time we just spent together, realizing the time which is to pass before we meet again. Saying good-bye and promising each other: I’ll See You Again.”
"/>
  <HeroVue photoSrc="/heroImage.png"/>
  <Contact/>
  <Discover/>
</template>

<style>
</style>
