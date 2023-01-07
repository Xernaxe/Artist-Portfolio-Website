<template>
  <section class="asd">
    <h2 class="sectionH">{{ sectionText }}</h2>
    <h3 class="songsH">{{ headerText }}</h3>
    <div class="songsWrapper">
      <songItemVue :songName="`Footprints - Path I`" :albumName="`Agne Pasaravičienė/Jan Sedlák`" :imgSrc="`../../src/assets/heroImg.png`"/>
      <songItemVue :songName="`Xhud`" :albumName="`Glen Montanaro`" :imgSrc="`../../src/assets/heroImg.png`"/>
      <songItemVue :songName="`Cycle`" :albumName="`The Collective Abroad`" :imgSrc="`../../src/assets/heroImg.png`"/>
    </div>
    <div class="more" v-if="songsArr.length > 3">MORE</div>
  </section>
</template>

<script setup>
import songItemVue from "./songItem.vue";
</script>

<script>
export default {
  data() {
    return{
      songsArr: [1,2,3,4],
    }
  },
  props:{
    headerText:{
      type: String,
      required: true,
    },
    sectionText:{
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .songsWrapper{
    display: flex;
    flex-direction: row;
    gap: 35px;
  }
</style>