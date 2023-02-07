<script setup>
import EssayVue from "../components/storyPage/Essay.vue";
import MusicVue from "../components/globalComponents/Music.vue";
import StoryVue from "../components/storyPage/Story.vue";
import Discover from '../components/homePage/Discover.vue';
</script>

<script>
  export default{
    mounted(){
      document.title = 'Story Page'
    }
  }
</script>

<template>
  <MusicVue
    :audioSrc="'./RustyBridges.mp3'"
    :audioTitle="'Rusty Bridges - The Collective Abroad'"
    quote="“Once upon a time in my beloved homeland, I was driving my old Škoda 105 back from the 80's over another one of the rusty bridges. About a week before my ride, a similar bridge in the center of Prague collapsed with people on it. As I drive over the bridge, I hear the screws rattling. The bridge rumbles, the car roars. My heart stops beating, my breath stops and my Škoda 105 stops as well.”
"
  />
  <StoryVue />
  <EssayVue />
  <Discover/>
</template>

<style></style>
