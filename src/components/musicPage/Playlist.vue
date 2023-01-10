<template>
  <section class="Playlist">
    <h2 class="sectionH">All work playlist</h2>
    <p class="playlistP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
    <iframe class="youtubeEMB" src="https://www.youtube.com/embed/videoseries?list=PLM3qsirXawixt9EsWyty-vJJkF2FAk97W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.Playlist{
  margin: 130px 0;
}

.playlistP{
  text-align: center;
  width: 750px;
  margin-bottom: 30px;
}

.youtubeEMB{
  width: 954px;
  height: 400px;
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

</style>