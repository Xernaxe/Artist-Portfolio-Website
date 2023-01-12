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
          <img
            class="arrow"
            style="transform: rotate(180deg)"
            src="/musicArrow.svg"
            alt="NEXT"
          />
        </div>
        <div class="Next" @click="Slider('next')"
          :class="index == dataArr.length - 1 ? 'invisible' : ''">
          <img class="arrow" src="/musicArrow.svg" alt="NEXT" />
        </div>
      </div>
      <div class="slider">
        <div
          class="musicWrapper"
          :style="{ transform: `translateX(-${index}00%)` }"
        >
          <musicItemVue
            v-for="item in dataArr"
            :key="item.id"
            :song-name="item.acf.songName"
            :music-description="item.acf.description"
            :album-name="item.acf.albumname"
            :songURL="item.acf.url"
            :applemusicLink="item.acf.applemusic"
            :spotify-link="item.acf.spotify"
            :youtube-link="item.acf.youtube"
            :soundcloud-link="item.acf.soundcloud"
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
      index: 0,
    };
  },
  methods: {
    Slider(move) {
      if (move == "next") {
        this.index++;
      }
      if (move == "back") {
        this.index--;
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
    dataArr: {
      type: Array,
      required: true,
    },
  }
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

.Next,
.Back {
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
  .slider {
    width: 257px;
  }

  .buttons {
    top: 37%;
  }

  .arrow {
    width: 20px;
  }
}
</style>
