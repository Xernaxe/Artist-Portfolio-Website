<!-- eslint-disable -->
<template>
  <div class="popup" v-if="showPopup" @click.native="outsideClick">
    <div class="popupBox" :style="this.showLineup ? 'width: 613px':''">
      <img class="close" src="/close.svg" alt="CLOSE" @click="togglePopup" />
      <div class="showLineup" @click="this.showLineup = !this.showLineup">
        <p class="lineupP">Lineup</p>
        <img src="/mobileArrow.svg" alt="Expand" class="expand" :class="this.showLineup ? 'expandActive': ''">
      </div>
      <div class="popupWrapper" :style="this.showLineup ? 'width: 50%':''">
        <div class="popupDetails">
          <h3 class="popupSongName">{{ songName }}</h3>
          <h3 class="popupAlbumName">{{ albumName }}</h3>
          <h4 class="popupYear">{{ year }}</h4>
        </div>
        <div class="wrap">
          <div class="popupCd">
          <img class="popupCdImg spinCd" :src="imgSrc" alt="" />
          <img class="cdAnimation" src="/cdAnimation.svg" alt="">
          <div class="popupCdHole"></div>
          </div>
        <div class="links">
          <a :href="applemusicLink" v-if="applemusicLink" target="_blank" class="link">
            <img class="popupLink" src="/applemusic.svg" alt="Apple music" style="width: 24px;"/>
            <label for="socials">Apple Music</label>
          </a>
          <a :href="spotifyLink" v-if="spotifyLink" target="_blank" class="link">
            <img class="popupLink" src="/spotify.svg" alt="Spotify" style="width: 24px;"/>
            <label for="socials">Spotify</label>
          </a>
          <a :href="youtubeLink" v-if="youtubeLink" target="_blank" class="link">
            <img class="popupLink" src="/youtube.svg" alt="Youtube" style="width: 24px;"/>
            <label for="socials">Youtube</label>
          </a>
          <a :href="soundcloudLink" v-if="soundcloudLink" target="_blank" class="link">
            <img class="popupLink" src="/soundcloud.svg" alt="Soundcloud" style="width: 24px;"/>
            <label for="socials">SoundCloud</label>
          </a>
        </div>
      </div>
      </div>
      <div class="popupWrapperRight" v-if="showLineup" >
        <h4 class="popupSubHeader"  >Line-up:</h4>
        <ul class="popupUL" >
          <li class="popupLI" v-for="item in lineupArray" :key="item">
            {{ item }}
          </li>
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
      showLineup: false,
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    outsideClick(e) {
      if (e.target.className == "popup") {
        this.togglePopup();
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
    applemusicLink: {
      type: String,
    },
    spotifyLink: {
      type: String,
    },
    youtubeLink: {
      type: String,
    },
    soundcloudLink: {
      type: String,
    },
    lineupArray: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.cdAnimation{
  position: absolute;
  right: -30px;
}
.popupWrapperRight{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  transition: 0.5s;
}

.popupDetails{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}
.showLineup{
  position: absolute;
  top:50%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 9999;
}

.expand{
  width: 15px;
  transition: rotate .5s;
}
.lineupP, .expand{
  rotate: 90deg;
  cursor: pointer;
}

.expandActive{
  rotate: 270deg;
}

.link{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrap{
  display: flex;
  gap: 35px;
}
.close {
  position: absolute;
  right: 3%;
  top: 3%;
  cursor: pointer;
  z-index: 999999;
  width: 15px;
}

.popupSongName {
  font-weight: 600;
}

.popupSongName,
.popupAlbumName,
.popupSubHeader {
  color: #9d9171;
}
.popupSubHeader {
  font-size: 20px;
}

.popupLink {
  width: 48px;
}

.popupYear {
  color: #f1f1e6;
}
.links {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.links label {
  font-size: 10px;
}
.popupSongName {
  font-size: 24px;
}
.popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
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
  max-width: 296px;
  height: 320px;
  transition: 1s;
  cursor: pointer;
  background: linear-gradient(315deg, rgba(157, 145, 113, 1) 0%, rgba(97, 53, 84, 1) 80%) var(--pos, 0%)/ 200% ;
}

.song:hover{
  --pos: 100%;
}

.cdImg,
.popupCdImg {
  width: 200px;
  border-radius: 50%;
  height: 200px;
}
.spinCd{
  animation: spin 60s infinite linear;

}
@keyframes spin {
  from {rotate: 0deg}
  to {rotate: 360deg}
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

.popupWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  transition: 0.5s;
}

.cd {
  position: relative;
  width: 200px;
  height: 200px;
}

.cdHole,
.popupCdHole {
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

.popupCdHole {
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
  width: 413px;
  padding: 0 20px;
  height: 400px;
  display: flex;
  z-index: 2;
  background: linear-gradient(-20deg, #04070d 0%, #430c4a 100%);
  border-radius: 15px;
  transition: .5s;
}

@media only screen and (max-width: 376px) {
  .song {
    min-width: 140px;
    width: 140px;
    min-height: 200px;
    height: 200px;
    gap: 10px;
    justify-content: flex-start;
    padding-top: 10px;
  }

  .songAlbum,
  .songName {
    font-size: 12px;
  }

  .cdHole {
    width: 18px;
    height: 18px;
  }

  .cdImg {
    width: 95px;
    height: 95px;
  }

  .cd {
    width: auto;
    height: auto;
  }
}
</style>
