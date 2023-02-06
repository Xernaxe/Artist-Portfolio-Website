<template>
  <section class="musicSection">
    <blockquote class="blockquote">
      {{ quote }}
    </blockquote>
    <p class="musicP">{{ audioTitle }}</p>
    <audio class="musicPlayer" controls :src="audioSrc" volume="0.5" type="audio/mpeg"></audio>
    <!-- <div class="musicPlayer">
      <div class="musicControls">
        <div class="controlsPlay"><img src="../../assets/playerPause.svg" alt=""></div>
        <div class="controlsPlay" @click="playSong"><img src="../../assets/playerResume.svg" alt=""></div>
      </div>
    </div> -->
  </section>
</template>



<script>
export default {
  props: {
    quote: String,
    audioSrc: String,
    audioTitle: String,
  },
}
</script>

<style scoped>

.musicSection{
  gap: 20px;
  width: 750px;
  margin-top: 130px;
}

.blockquote{
  text-align: center;
}

.musicControls{
  display: flex;
  gap: 7.5px;
}

.controlsPlay{
  cursor: pointer;
}

.musicP{
  font-style: italic;
  font-size: 12px;
}

@media only screen and (max-width: 376px) {
  .musicSection{
    width: 275px;
    
  }
  .musicPlayer{
    width: 80%;
  }
  
}

</style>