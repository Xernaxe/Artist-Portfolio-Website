<template>
  <footer class="Footer">
    <div class="footerWrapper">
      <p class="footerLogo">Jan'S</p>
      <div class="verticalLine"></div>
      <div class="socialsWrapper">
          <a href="https://music.apple.com/tm/artist/jan-sedlak/519939094" target="_blank">
            <img class="socialsImg" src="/applemusic.svg" alt="AppleMusic" />
            <label for="socials">Apple music</label>
          </a>
          <a href="https://music.apple.com/tm/artist/jan-sedlak/519939094" target="_blank">
            <img class="socialsImg" src="/soundcloud.svg" alt="SoundCloud" />
            <label for="socials">SoundCloud</label>
          </a>
          <a href="https://www.youtube.com/channel/UC_9pTBpqYj7uC65ENli4fBg" target="_blank">
            <img class="socialsImg" src="/youtube.svg" alt="Youtube" style="width: 42px"/>
            <label for="socials">Youtube</label>
          </a>
          <a href="https://open.spotify.com/artist/6eslWoqLqMP35uERDUwFQO?si=FYTk6g7BQDGLhHeBzvB9FQ" target="_blank">
            <img class="socialsImg" src="/spotify.svg" alt="Spotify" />
            <label for="socials">Spotify</label>
          </a>
          <a href="https://www.instagram.com/jansedlakmusic/" target="_blank">
            <img class="socialsImg" src="/instagram.svg" alt="Instagram" />
            <label for="socials">Instagram</label>
          </a>
          <a href="mailto:contact@jansedlakmusic.com">
            <img class="socialsImg" src="/mail.svg" alt="Email" style="width: 36px"/>
            <label for="socials">Gmail</label>
          </a>
          
      </div>
    </div>
    <div class="contact">
      <div class="contactWrapper">
        <img src="/phoneIcon.svg" alt="Phone Icon">
        <p class="phoneNrP">+45 42 31 43 34</p>
      </div>
      <a href="https://goo.gl/maps/ZyraNidTe1Wg3FYt9" class="contactWrapper">
        <img src="/locationIcon.svg" alt="Location Icon">
        <p class="locationP">Aalborg DK 9000</p>
      </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>

.contact{
  display: flex;
  gap: 30px;
  /* margin-left: 10vw; */
}

.contactWrapper{
  display: flex;
  gap: 10px;
}
  .Footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 5vw 30px 5vw;
  }

  .footerP{
    color: #9D9171;
    font-size: 18px;
  }

  .footerWrapper{
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .footerLogo{
    font-size: 48px;
  }

  .socialsWrapper{
    display: flex;
    align-items: center;
    gap: 30px
  }

  .buttonLink{
    width: 138px;
    text-align: center;
    display: flex;
    height: 30px;
    gap: 10px;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(157,145,113,1) 0%, rgba(215,215,215,1) 100%);
    color: #201D1C;
    flex-basis: 50%;
    transition: all .3s ease-in-out;
    font-size: 10px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
  }
  .verticalLine{
    width: 1px;
    height: 80px;
    background-color: #9D9171;
  }

  .socialsImg{
    width: 28px;
    transition: all .3s ease-in-out;
  }

  .socialsImg:hover {
    transform: scale(1.2);
  }
  .buttonLink img {
    width: 70px;
  }

  .socialsWrapper > a{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 376px) {
    .socialsWrapper{
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 15px;
    }
    .buttonLink{
      display: none;
    }
}
</style>
