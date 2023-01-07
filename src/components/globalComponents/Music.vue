<template>
  <section class="musicSection">
    <blockquote class="blockquote">
      {{ quote }}
    </blockquote>
    <div class="musicPlayer">
      <p class="musicP">Black Coal Meadow - Jan Sedlák Trio</p>
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

.blockquote{
  text-align: center;
  width: 924px;
}

.musicControls{
  display: flex;
}

</style>