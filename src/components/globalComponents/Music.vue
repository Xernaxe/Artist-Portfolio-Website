<template>
  <section class="musicSection">
    <blockquote class="blockquote">
      {{ quote }}
    </blockquote>
    <p class="musicP">Black Coal Meadow - Jan Sedlák Trio</p>
    <div class="musicPlayer">
      <div class="musicControls">
        <div class="controlsPlay">PLAY</div>
        <div class="controlsPause">PAUSE</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    quote: String,
    audioSrc: String,
    audioTitle: String,
  }

}
</script>

<style scoped>

.musicSection{
  gap: 15px;
  width: 750px;
}

.blockquote{
  text-align: center;
}

.musicControls{
  display: flex;
}

.musicP{
  font-style: italic;
  font-size: 12px;
}
</style>