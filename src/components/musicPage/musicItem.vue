<template>
  <div class="musicItem">
    <iframe class="musicYoutubeEMB" :src="songURL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="musicWrapper">
      <h3 class="albumName">{{albumName}}</h3>
      <div class="musicInWrapper">
        <h4 class="songName">{{songName}}</h4>
        <div class="socialsWrapper">
          <a :href="applemusicLink" v-if="applemusicLink" target="_blank">
            <img class="musicImg" src="/applemusic.svg" alt="Apple music" />
          </a>
          <a :href="spotifyLink" v-if="spotifyLink" target="_blank">
            <img class="musicImg" src="/spotify.svg" alt="Spotify" />
          </a>
          <a :href="youtubeLink" v-if="youtubeLink" target="_blank">
            <img class="musicImg" src="/youtube.svg" alt="Youtube" />
          </a>
          <a :href="soundcloudLink" v-if="soundcloudLink" target="_blank">
            <img class="musicImg" src="/soundcloud.svg" alt="Soundcloud" />
          </a>
        </div>
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
    }
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
  background: rgba(8,13,26, 0.3);
    padding: 15px;
  border-radius: 10px;
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
.socialsWrapper{
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
}

.socialsWrapper img {
  transition: all .3s ease-in-out;
}

.socialsWrapper img:hover {
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

@media only screen and (max-width: 376px) {
  .musicItem{
    flex-direction: column;
  }


  .musicYoutubeEMB{
    width: 257px;
    height: 148px;
  }

  .musicInWrapper{
    flex-direction: column;
  }

  .musicImg{
    width: 48px;
  }

  .socialsWrapper{
    display: flex;
    gap: 20px;
  }

  .musicWrapper{
    width: 257px;
    gap: 10px;
  }

  .albumName, .songName{
    text-align: center;
  }
}

</style>