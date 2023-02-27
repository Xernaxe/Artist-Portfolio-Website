<template>
  <div class="musicContainer">
    <h2 class="sectionH">{{ sectionText }}</h2>
    <h3 class="songsH">{{ headerText }}</h3>
    <div class="sliderWrapper">
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
      <div class="btnWrapper">
        <div @click="backArrow" class="arrow">
          <img src="/mobileArrow.svg" style="rotate: -90deg" alt="Back" :class="index == 0 ? 'inactive' : ''"/>
        </div>
        <div class="musicNav">
          <div
            @click="index = 0"
            class="button"
            :class="index == 0 ? 'activeBtn' : ''"
          ></div>
          <div
            @click="index = 1"
            class="button"
            :class="index == 1 ? 'activeBtn' : ''"
          ></div>
          <div
            @click="index = 2"
            class="button"
            :class="index == 2 ? 'activeBtn' : ''"
          ></div>
        </div>
        <div @click="nextArrow" class="arrow">
          <img
            src="/mobileArrow.svg"
            style="rotate: 90deg"
            alt="Next"
            :class="index == 2 ? 'inactive' : ''"
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
    nextArrow() {
      if (this.index < 2) this.index++;
    },
    backArrow() {
      if (this.index > 0) this.index--;
    },
  },
  props: {
    headerText: {
      type: String,
      // required: true,
    },
    sectionText: {
      type: String,
      // required: false,
    },
    dataArr: {
      type: Array,
      // required: true,
    },
  },
};
</script>

<style scoped>
.arrow,
.button {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
}

.inactive{
  opacity: 0.2;
}

.arrow:hover {
  transform: scale(1.2);
}

.sliderWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.musicNav {
  width: 80px;
  height: 20px;
  background: linear-gradient(0deg, #623755 0%, #9b8e70 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  gap: 10px;
}
.button {
  width: 12px;
  height: 12px;
  background-color: #0e131f;
  border-radius: 50%;
  cursor: pointer;
}

.activeBtn {
  background-color: #f1f1e6;
}

.btnWrapper {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 30px;
  align-items: center;
}
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

@media (max-width: 970px) {
  .slider {
    width: 90vw;
  }
}
@media (max-width: 755px) {
  .slider {
    width: 66vw;
  }
}
</style>
