<template>
  <div class="songsContainer">
    <h2 class="sectionH">{{ sectionText }}</h2>
    <h3 class="songsH">{{ headerText }}</h3>
    <div class="songsWrapper" :style="{ height: height + 'px'}">
      <songItemVue :songName="`Footprints - Path I`" :albumName="`Agne Pasaravičienė/Jan Sedlák`" :imgSrc="`../../src/assets/heroImg.png`"/>
      <songItemVue :songName="`Xhud`" :albumName="`Glen Montanaro`" :imgSrc="`../../src/assets/heroImg.png`"/>
      <songItemVue :songName="`Cycle`" :albumName="`The Collective Abroad`" :imgSrc="`../../src/assets/heroImg.png`"/>
      <songItemVue :songName="`Footprints - Path I`" :albumName="`Agne Pasaravičienė/Jan Sedlák`" :imgSrc="`../../src/assets/heroImg.png`"/>
      <songItemVue :songName="`Xhud`" :albumName="`Glen Montanaro`" :imgSrc="`../../src/assets/heroImg.png`"/>
      <songItemVue :songName="`Cycle`" :albumName="`The Collective Abroad`" :imgSrc="`../../src/assets/heroImg.png`"/>
    </div>
    <div class="more" @click="changeHeight" v-if="songsArr.length > 3"><img class="songArrow" src="../../assets/songArrow.svg" alt="Button" :style="height == 340 ? '' : 'transform:rotate(180deg)'"></div>
  </div>
</template>

<script setup>
import songItemVue from "./songItem.vue";
</script>

<script>
export default {
  data() {
    return{
      songsArr: [1,2,3,4],
      height: 340,
    }
  },
  methods:{
    changeHeight(){
      if(this.height == 340){
        this.height = 340 * 2
      } else {
        this.height = 340
      }
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
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: row;
    max-height: fit-content;
    gap: 30px;
    transition: height 0.8s;
  }

  .more{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 30px 0;
    cursor: pointer;
  }

  .songArrow{
    transition: transform 0.8s;
  }


</style>