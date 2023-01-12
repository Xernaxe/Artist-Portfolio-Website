<template>
  <section class="Lessons">
    <h1 class="sectionH">Learning music must be fun! We maximize our learning process when we are having fun and when we are focused and motivated to learn.</h1>
    <iframe class="lessonsYoutubeEMB" src="https://www.youtube.com/embed/TtFAOXNODPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p class="lessonsP">I enjoy teaching composition, double bass and bass guitar. If you’d like to study with me, I will create a personalized plan for you. A part of the plan will be personalized exercises in the form of PDF files and videos which you can play along with. In this way, we can maximize your learning potential.
</p>

  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

  .Lessons{
    margin: 110px 0 130px 0;
  }

  .lessonsYoutubeEMB {
    border-radius: 15px;
  }
.lessonsP{
    text-align: center;
    margin-top: 30px;
    width: 725px;
  }

.sectionH{
  width: 725px;
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