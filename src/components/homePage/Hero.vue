<template>
  <section class="heroSection">
    <div class="heroWrapperLeft">
      <img class="heroImg" src="/heroImage.png" alt="Photo of me" />
    </div>
    <div class="heroWrapperRight">
      <div class="heroInWrapper">
        <h1 class="heroHeader">Jan’Sedlák</h1>
        <p class="heroP">
          “To me, there is great power in connecting people. I believe that
          through music, we can communicate regardless language barriers. Let
          music help us find a way to each other."
        </p>
        <div class="socialsWrapper">
          <a href="https://www.facebook.com/JanSedlakMusic" target="_blank">
            <img class="socialsImg" src="/facebook.svg" alt="Facebook">
          </a>
          <a href="https://www.instagram.com/jansedlakmusic/" target="_blank">
            <img class="socialsImg" src="/instagram.svg" alt="Instagram">
          </a>
          <a href="mailto:contact@jansedlakmusic.com" target="_blank">
            <img class="socialsImg" src="/mail.svg" alt="Email">
          </a>
          <a href="https://open.spotify.com/artist/6eslWoqLqMP35uERDUwFQO?si=FYTk6g7BQDGLhHeBzvB9FQ" target="_blank">
            <img class="socialsImg" src="/spotify.svg" alt="Spotify">
          </a>
          <a href="https://www.youtube.com/channel/UC_9pTBpqYj7uC65ENli4fBg" target="_blank">
            <img class="socialsImg" src="/youtube.svg" alt="Youtube">
          </a>
        </div>
      </div>
      <!-- <div class="shopButton"> -->
      <a href="https://jansedlakmusic.bandcamp.com/" class="buttonLink" target="_blank"><img src="/bandcamp.svg" alt="Shop" /> Shop</a>
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.heroImg {
  width: 367px;
  height: 367px;
  border-radius: 15px;
}

.heroSection {
  display: flex;
  align-items: flex-end;
  gap: 20px;
  flex-direction: row;
}

.heroWrapperRight {
  width: 440px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.heroHeader {
  font-size: 2.5rem;
}

.buttonLink{
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(157, 145, 113, 1) 0%,
    rgba(215, 215, 215, 1) 100%
  );
  width: 220px;
  height: 45px;
  text-align: center;
  color: #201d1c;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
}

.shopButton {
  width: 200px;
  height: 45px;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
}

.socialsImg:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.buttonLink:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.socialsWrapper{
  display: flex;
  gap: 30px;
  align-items: center;
}

.socialsImg {
  width: 48px;
  transition: all 0.3s ease-in-out;
}

.heroP {
  margin: 10px 0 30px;
}

@media only screen and (max-width: 376px) {
  .heroSection {
    flex-direction: column;
  }

  .heroImg{
    width: 257px;
    height: 257px;
  }

  .heroWrapperRight{
    width: 257px;
    align-items: center;
  }

  .heroP{
    text-align: center;
  }

  .heroHeader{
    text-align: center;
  }

  .socialsWrapper{
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
