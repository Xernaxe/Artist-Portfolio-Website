<script setup>
import SongsSectionVue from "../components/musicPage/SongsSection.vue"
import MusicSectionVue from "../components/musicPage/MusicSection.vue";
import Playlist from "../components/musicPage/Playlist.vue";
import Discover from "../components/homePage/Discover.vue";

</script>

<script>
  export default{
    mounted(){
      document.title = 'Music Page'
    }
  }
</script>

<template>
  <MusicSectionVue/>
  <SongsSectionVue/>
<Playlist/>
  <Discover/>
</template>

<style>
</style>
