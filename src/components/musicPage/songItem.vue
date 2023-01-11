<!-- @click.native is deprecated but due to convenience it should work -->
<template>
  <div class="popup" v-if="showPopup" @click.native="outsideClick">
    <div class="popupBox">
      <img class="close" src="/close.svg" alt="CLOSE" @click="togglePopup">
      <div class="popupCd">
        <img class="popupCdImg" :src="imgSrc" alt="" />
        <div class="popupCdHole"></div>
      </div>
      <div class="popupWrapper">
        <h3 class="popupSongName">{{ songName }}</h3>
        <h3 class="popupAlbumName">{{ albumName }}</h3>
        <h4 class="popupYear">{{year}}</h4>
        <div class="links">
          <a :href="applemusicLink" v-if="applemusicLink">
            <img class="popupLink" src="/applemusic.svg" alt="Apple music" />
          </a>
          <a :href="spotifyLink" v-if="spotifyLink">
            <img class="popupLink" src="/spotify.svg" alt="Spotify" />
          </a>
          <a :href="youtubeLink" v-if="youtubeLink">
            <img class="popupLink" src="/youtube.svg" alt="Youtube" />
          </a>
          <a :href="soundcloudLink" v-if="soundcloudLink">
            <img class="popupLink" src="/soundcloud.svg" alt="Soundcloud" />
          </a>
        </div>
        <h4 class="popupSubHeader">Line-up:</h4>
        <ul class="popupUL">
          <li class="popupLI" v-for="item in lineupArray" :key="item">
          {{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="song" @click="togglePopup">
    <div class="cd">
      <img class="cdImg" :src="imgSrc" alt="" />
      <div class="cdHole"></div>
    </div>
    <div class="songDetails">
      <p class="songName">{{ songName }}</p>
      <p class="songAlbum">{{ albumName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    outsideClick(e) {
      console.log(e.target.className);
      if(e.target.className == "popup"){
        this.togglePopup()
      }

    },
  },
  props: {
    songName: {
      type: String,
      required: true,
    },
    albumName: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    applemusicLink:{
      type: String,
    },
    spotifyLink:{
      type: String,
    },
    youtubeLink:{
      type: String,
    },
    soundcloudLink:{
      type: String,
    },
    lineupArray: {
      type: Array,
    }
    
  },
};
</script>

<style scoped>
.close{
  position: absolute;
  right: 3%;
  top: 3%;
  cursor: pointer;
  z-index: 999999;
}
.popupSongName, .popupAlbumName, .popupSubHeader{
  color: #9D9171;
}
.popupSubHeader{
  font-size: 20px;
}

.popupLink{
  width: 48px;
}

.popupYear{
  color: #F1F1E6;
}
.links{
  margin: 10px 0;
  display: flex;
  gap: 30px;
}
.popupSongName{
  font-size: 24px;
}
.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #07071390;
}
.song {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-basis: 31%;
  gap: 20px;
  cursor: pointer;
  min-width: 296px;
  height: 320px;
  background: linear-gradient(
    315deg,
    rgba(157, 145, 113, 1) 0%,
    rgba(97, 53, 84, 1) 100%
  );
  cursor: pointer;
}
.cdImg, .popupCdImg {
  width: 200px;
  border-radius: 50%;
  height: 200px;
}

/* .popupCdImg {
  width: 292px;
  height: 292px;
  border-radius: 50%;
} */

.popupCd {
  display: flex;
  justify-content: center;
  margin: 5px 0;
}

.popupWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

/* .popupCdHole {
  width: 58px;
  height: 58px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: linear-gradient(#2e0b36 0%, #350b3c 100%);
  background-attachment: fixed;
} */
.cd {
  position: relative;
  width: 200px;
  height: 200px;
}

.cdHole, .popupCdHole {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    rgba(131, 105, 101, 1) 0%,
    rgba(126, 97, 98, 1) 100%
  );
  background-attachment: fixed;
  border-radius: 50%;
}

.popupCdHole{
  background: linear-gradient(#2e0b36 0%, #350b3c 100%);
}

.hideOverflow {
  overflow: hidden;
}

.songName {
  font-weight: 600;
  color: #070713;
}

.songAlbum {
  color: #070713;
}

.songName,
.songAlbum {
  text-align: center;
}

.popupBox {
  width: 486px;
  height: 650px;
  z-index: 2;
  background: linear-gradient(-20deg, #04070d 0%, #430c4a 100%);
  border-radius: 15px;
}

@media only screen and (max-width: 376px) {
  .song{
    min-width: 140px;
    width: 140px;
    min-height: 200px;
    height: 200px;
    gap: 10px;
    justify-content: flex-start;
    padding-top: 10px;
  }

  .songAlbum, .songName{
    font-size: 12px;
  }

  .cdHole{
    width: 18px;
    height: 18px;
  }

  .cdImg{
    width: 95px;
    height: 95px;
  }

  .cd{
    width: auto;
    height: auto;
  }
  
}
</style>
