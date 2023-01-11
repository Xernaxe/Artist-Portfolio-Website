<template>
  <footer class="Footer">
    <div class="footerWrapper">
      <p class="footerP">My other socials platforms:</p>
      <div class="socialsWrapper">
        <a href="">
          <img class="socialsImg" src="/soundcloud.svg" alt="Soundcloud" />
        </a>
        <a href="">
          <img class="socialsImg" src="/spotify.svg" alt="Spotify" />
        </a>
        <a href="">
          <img class="socialsImg" src="/applemusic.svg" alt="AppleMusic" />
        </a>
        <a href="https://jansedlakmusic.bandcamp.com/" class="buttonLink"
        ><img src="/bandcamp.svg" alt="Shop" /> Shop</a>
        <a href="">
          <img class="socialsImg" src="/instagram.svg" alt="Instagram" />
        </a>
        <a href="">
          <img class="socialsImg" src="/mail.svg" alt="Email" />
        </a>
        <a href="">
          <img class="socialsImg" src="/youtube.svg" alt="Youtube" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
  .Footer{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
  }

  .footerP{
    color: #9D9171;
    font-size: 18px;
  }

  .footerWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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
</style>
