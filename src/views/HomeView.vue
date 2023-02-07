<script setup>
import DiscoverVue from '../components/homePage/Discover.vue';
import HeroVue from '../components/homePage/Hero.vue';
import MusicVue from '../components/globalComponents/Music.vue';
import Events from '../components/homePage/Events.vue';
</script>

<script>
  export default{
    mounted(){
      document.title = 'Home Page'
    }
  }
</script>

<template>
  <MusicVue :audioTitle="'Black Coal Meadow - Jan Sedlák Trio'" :audioSrc="'./BlackCoalMeadow.mp3'" quote="“Black Coal Meadow” is a landscape around my hometown - a beautiful medieval town from the 11th century which was torn down in 1965 to leave space for colossal coal mines, turning the entire region into moon-like landscape. “"/>
  <HeroVue  photoSrc="./heroImage2.png"/>
  <Events/>
  <DiscoverVue/>
</template>

