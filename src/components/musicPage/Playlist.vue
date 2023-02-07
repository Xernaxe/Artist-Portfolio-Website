<template>
  <section class="Playlist">
    <h2>Music videos</h2>
    <p class="playlistP">A few music videos with my own compositions.</p>
    <iframe class="youtubeEMB" src="https://www.youtube.com/embed/videoseries?list=PLM3qsirXawixt9EsWyty-vJJkF2FAk97W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.playlistP{
  text-align: center;
  width: 750px;
  margin-bottom: 15px;
}

.youtubeEMB{
  width: 954px;
  height: 400px;
  border-radius: 15px;
}

@media only screen and (max-width: 376px) {
  .playlistP{
    width: 257px;
  }

  .youtubeEMB{
    width: 257px;
    height: 257px;
  }
}

@media (max-width: 970px){
  .playlistP{
    width: 100%;
  }
  .youtubeEMB{
    max-width: 90vw;
  }
}

</style>