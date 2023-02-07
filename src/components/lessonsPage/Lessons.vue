<template>
  <section class="Lessons">
    <h2 class="sectionH">Learning music must be fun!</h2>
    <p class="lessonsP">I enjoy teaching composition, double bass and bass guitar. If you’d like to study with me, I will create a personalized plan for you. A part of the plan will be personalized exercises in the form of PDF files and videos which you can play along with. In this way, we can maximize your learning potential.
    </p>
    <div class="lessonsInfo">
      <h3 class="infoH">Average educational plan:</h3>
      <div class="infoWrapper">

        <div class="info">
          <img src="/timeIcon.svg" style="width: 28px" alt="Duration">
          <p class="infoP">40 - 120 min/per sesion</p>
        </div>
        <div class="info">
          <img src="/costIcon.svg" style="width: 28px" alt="Cost">
          <p class="infoP">200 - 450 kr/session</p>
        </div>
        <div class="info">
          <img src="/locationIcon.svg" style="width:20px" alt="Duration">
          <p class="infoP">Aalborg, Denmark</p>
        </div>
      </div>
    </div>
    <iframe class="lessonsYoutubeEMB" src="https://www.youtube.com/embed/TtFAOXNODPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.infoH{
  text-align: center;
  margin-bottom: 30px;
  color: #9D9171;
}
  .infoWrapper{
    display: flex;
    gap: 30px;
  }
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info p {
    margin-top: 10px;
  }
  .Lessons{
    margin: 110px 0 130px 0;
  }

  .lessonsYoutubeEMB {
    border-radius: 15px;
    margin: 30px 0 30px 0;
  }
.lessonsP{
    text-align: center;
    margin: 30px 0 30px 0;
    width: 725px;
  }

.sectionH{
  width: 725px;
  margin: 0;
}

  .lessonsYoutubeEMB{
    width: 954px;
    height: 537px;
  }

  @media (max-width: 970px){
    .lessonsP, .sectionH{
    width: 80%
  }
    .lessonsYoutubeEMB{
    width: 100%;
  }
}

@media (max-width: 480px){
  .info{
    width: min-content;
  }
  .infoP{
    width: 25vw;
    text-align: center;
  }
}


</style>