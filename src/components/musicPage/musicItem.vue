<template>
  <div class="musicItem">
    <iframe class="musicYoutubeEMB" :src="songURL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="musicWrapper">
      <h3 class="albumName">{{albumName}}</h3>
      <div class="musicInWrapper">
        <h4 class="songName">{{songName}}</h4>
        <img src="/applemusic.svg" alt="Apple music">
        <img src="/spotify.svg" alt="Spotify">
        <img src="/youtube.svg" alt="Youtube">
        <img src="/soundcloud.svg" alt="Soundcloud">
      </div>
      <p class="musicDescription">
        {{musicDescription}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    songName: {
      type: String,
      required: true
    },
    albumName: {
      type: String,
      required: true
    },
    musicDescription: {
      type: String,
      required: true
    },
    songURL: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.musicItem{
  display: flex;
  gap: 20px;
  width: 100%;
  height: auto;
  position: relative;
}

.musicInWrapper{
  display: flex;
  gap: 20px;
  
}
.musicWrapper{
  width: 468px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
}

.link {
  transition: all .3s ease-in-out;
  cursor: pointer;
}

.link:hover {
  transform: scale(1.2);
}

.musicYoutubeEMB{
  width: 467px;
  height: 263px;
  border-radius: 15px;
}

.albumName, .songName{
  color: #9D9171;
}

.musicDescription{
  color: #F1F1E6;
}
</style>