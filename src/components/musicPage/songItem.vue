<!-- @click.native is deprecated but due to convenience it should work -->
<template>
  <div class="popup" v-if="showPopup" @click.native="outsideClick">
    <div class="popupBox">
      <img class="close" src="../../assets/close.svg" alt="CLOSE" @click="togglePopup">
      <div class="popupCd">
        <img class="popupCdImg" :src="imgSrc" alt="" />
        <div class="popupCdHole"></div>
      </div>
      <div class="popupWrapper">
        <h3 class="popupSongName">{{ songName }}</h3>
        <h3 class="popupAlbumName">{{ albumName }}</h3>
        <h4 class="popupYear">2022</h4>
        <div class="links">
          <img class="popupLink" src="../../assets/applemusic.svg" alt="Apple music" />
          <img class="popupLink" src="../../assets/spotify.svg" alt="Spotify" />
          <img class="popupLink" src="../../assets/youtube.svg" alt="Youtube" />
          <img class="popupLink" src="../../assets/soundcloud.svg" alt="Soundcloud" />
        </div>
        <h4 class="popupSubHeader">Line-up:</h4>
        <ul class="popupUL">
          <li class="popupLI">Jaap de Vries - trumpet</li>
          <li class="popupLI">Tadas Pasaravičius/Lauri Kadalipp - tenor saxophone</li>
          <li class="popupLI">Denis Pavlenko/Josh Schofield - alto saxophone</li>
          <li class="popupLI">Casper Hejlesen/Glen Montanaro - guitar</li>
          <li class="popupLI">Julia Perminova/Sandro Sáez - piano</li>
          <li class="popupLI">Jan Sedlák - double bass</li>
          <li class="popupLI">Dominic Harrison - drums</li>
          <li class="popupLI">Clara Fornander - vocal</li>
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
      if (e.target.className != "popupBox") {
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
  },
};
</script>

<style scoped>
.close{
  position: absolute;
  right: 3%;
  top: 3%;
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
  width: 300px;
  height: 320px;
  background: linear-gradient(
    315deg,
    rgba(157, 145, 113, 1) 0%,
    rgba(97, 53, 84, 1) 100%
  );
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
  margin: 30px 0;
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
</style>
