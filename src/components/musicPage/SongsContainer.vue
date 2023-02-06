<template>
  <div class="songsContainer">
    <h2 class="sectionH">{{ sectionText }}</h2>
    <h3 class="songsH">{{ headerText }}</h3>
    <div class="songsWrapper" :style="{ height: height + 'px!important' }">
      <songItemVue
        v-for="item in dataArr"
        :key="item.id"
        :songName="item.acf.songName"
        :albumName="item.acf.albumname"
        :imgSrc="item.acf.img.url"
        :year="item.acf.year"
        :applemusicLink="item.acf.applemusic"
        :spotifyLink="item.acf.spotify"
        :youtubeLink="item.acf.youtube"
        :soundcloudLink="item.acf.soundcloud"
        :lineupArray="createLineupArr(item)"
      />
    </div>
    <div class="more" @click="changeHeight" v-if="dataArr.length > 3">
      <div class="disclosureWrapper" :class="isMoreTriggered ? 'hidden': ''">
        <div class="disclosure" :class="isMoreTriggered ? 'hidden': ''"></div>
        <div class="disclosure" :class="isMoreTriggered ? 'hidden': ''"></div>
        <div class="disclosure" :class="isMoreTriggered ? 'hidden': ''"></div>
      </div>
      <img
        class="songArrow"
        src="/songArrow.svg"
        alt="Button"
        :style="height == 340 ? '' : 'transform:rotate(180deg)'"
      />
    </div>
  </div>
</template>

<script setup>
import songItemVue from "./songItem.vue";
</script>

<script>
export default {
  data() {
    return {
      height: 340,
      lineupArr: [],
      isMoreTriggered: false,
    };
  },
  methods: {
    changeHeight() {
      if (this.height == 340) {
        this.height = 340 * 2;
      } else {
        this.height = 340;
      }
      this.isMoreTriggered = !this.isMoreTriggered
    },
    createLineupArr(obj){
      return this.lineupArr =  obj.acf.lineup.split(';')
    }
  },
  // mounted(){
  //   this.createLineupArr()
  // },
  props: {
    headerText: {
      type: String,
      required: true,
    },
    sectionText: {
      type: String,
      required: false,
    },
    dataArr: {
      type: Array,
      // required: true,
    },
  },
};
</script>

<style scoped>

.disclosureWrapper{
  display: flex;
  gap: 25px;
  height: 114px;
  transition: height 0.8s;
}
.songsWrapper {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row;
  max-height: fit-content;
  gap: 30px;
  transition: height 0.8s;
}

.disclosure{
  width: 296px;
  height: 114px;
  border-radius: 10px;
  background: linear-gradient(-15deg, rgba(255, 255, 255, 0) 40%,  #613554 100%);
  transition: height 1s;
}

.more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 30px 0;
  cursor: pointer;
  flex-direction: column;
  gap: 20px;
}
.hidden{
  height: 0!important;
  transition: height 0.8s;

}

.songArrow {
  transition: transform 0.8s;
}

@media only screen and (max-width: 376px) {
  .songsWrapper {
    gap: 15px;
    height: 200px !important;
  }
}
</style>
