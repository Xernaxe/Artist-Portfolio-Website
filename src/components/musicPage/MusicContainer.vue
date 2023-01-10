<template>
  <div class="musicContainer">
    <h2 class="sectionH">{{ sectionText }}</h2>
    <h3 class="songsH">{{ headerText }}</h3>
    <div class="sliderWrapper">
      <div class="buttons">
        <div
          class="Back"
          @click="Slider('back')"
          :class="index ? '' : 'invisible'"
        >
        <img class="arrow" style="transform:rotate(180deg)" src="/musicArrow.svg" alt="NEXT">
        </div>
        <div class="Next" @click="Slider('next')"><img class="arrow" src="/musicArrow.svg" alt="NEXT"></div>
      </div>
      <div class="slider">
        <div
          class="musicWrapper"
          :style="{ transform: `translateX(-${index}00%)` }"
        >
          <musicItemVue
            :song-name="item1.songName"
            :music-description="item1.musicDescription"
            :album-name="item1.albumName"
            :songURL="item1.songURL"
          />

          <musicItemVue
            :song-name="item2.songName"
            :music-description="item2.musicDescription"
            :album-name="item2.albumName"
            :songURL="item2.songURL"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import musicItemVue from "./musicItem.vue";
</script>

<script>
export default {
  data() {
    return {
      item1: {
        songName: "Propagnosia",
        albumName: "The Collective Abroad",
        songURL: "https://www.youtube.com/embed/Dd6n-_Wf-aU",
        musicDescription: `The Collective Abroad performs contemporary improvised music originating from band members' music scenes: Berlin (DE), Hamburg (DE), Amsterdam (NL), Tallinn (EE), Basel (CH) and Aalborg (DK). The music combines the groove of modern jazz with an intimate atmosphere of Nordic folk and explosive power of a world-class horn section.`,
      },
      item2: {
        songName: "171662a",
        albumName: "T125125",
        songURL: "https://www.youtube.com/embed/Dd6n-_Wf-aU",
        musicDescription: `1231251251`,
      },
      index: 0,
    };
  },
  methods: {
    Slider(move) {
      if (move == "next") {
        this.index++;
        console.log(this.index);
      }
      if (move == "back") {
        this.index--;
        console.log(this.index);
      }
    },
  },
  props: {
    headerText: {
      type: String,
      required: true,
    },
    sectionText: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 955px;
}
.musicWrapper {
  position: relative;
  display: flex;
  transition: transform 0.5s;
}

.Next, .Back{
  cursor: pointer;
}

.buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  display: flex;
  transform: translate(-50%, -50%);
  justify-content: space-between;
  cursor: pointer;
}


.musicContainer {
  width: inherit;
}

.invisible {
  visibility: hidden;
}

@media only screen and (max-width: 376px) {
  .slider{
    width: 257px;
  }

  .buttons{
    top: 37%;
  }

  .arrow{
    width: 20px;
  }
}


</style>
