<script setup>
import DiscoverVue from '../components/homePage/Discover.vue';
import HeroVue from '../components/homePage/Hero.vue';
import MusicVue from '../components/globalComponents/Music.vue';
import Events from '../components/homePage/Events.vue';

function isMobile(){
  if(screen.width <= 765){
    return true
  } else if (screen.width >= 765){
    return false
  }
  
}
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
  <HeroVue/>
  <Events/>
  <DiscoverVue v-if="!isMobile()"/>
</template>

