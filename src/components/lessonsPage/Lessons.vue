<template>
  <section class="Lessons">
    <h1 class="sectionH">And if you are interested in learning</h1>
    <iframe class="lessonsYoutubeEMB" src="https://www.youtube.com/embed/Dd6n-_Wf-aU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p class="lessonsP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br><br>
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>

  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

  .Lessons{
    margin: 110px 0;
  }

  .lessonsYoutubeEMB {
    border-radius: 15px;
  }
.lessonsP{
    text-align: center;
    margin-top: 30px;
  }

  .lessonsYoutubeEMB{
    width: 954px;
    height: 537px;
  }

  @media only screen and (max-width: 426px) {
  
    .lessonsYoutubeEMB{
      width: 257px;
      height: 148px;
    }

    .lessonsP{
    width: 80%
  }
}


</style>