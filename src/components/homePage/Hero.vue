<template>
  <section class="heroSection">
    <div class="heroWrapperLeft">
      <img class="heroImg" src="../../assets/heroImg.png" alt="Photo of me">
    </div>
    <div class="heroWrapperRight">
      <div class="heroInWrapper">

        <h1 class="heroHeader">Jan’Sedlák</h1>
        <p class="heroP">“To me, there is great  power in connecting people. I believe that through music, we can communicate regardless language barriers. Let music help us find a way to each other."</p>
        <div class="socialsWrapper">
          <img class="socialsImg" src="../../assets/facebook.svg" alt="Facebook">
          <img class="socialsImg" src="../../assets/spotify.svg" alt="Spotify">
          <img class="socialsImg" src="../../assets/mail.svg" alt="Email">
          <img class="socialsImg" src="../../assets/youtube.svg" alt="Youtube">
          <img class="socialsImg" src="../../assets/soundcloud.svg" alt="Soundcloud">
        </div>
      </div>
        <!-- <div class="shopButton"> -->
        <a href="" class="buttonLink">Shop</a>
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.heroImg{
  width: 467px;
  height: 467px;
  border-radius: 15px;
}

.heroSection{
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin: 40px 0;
  flex-direction: row;
}


.heroWrapperRight{
  width: 440px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  
}

.heroHeader{
  font-size: 2.5rem;
}

.buttonLink{
  padding:9px 75px;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(157,145,113,1) 0%, rgba(215,215,215,1) 100%);
  width: 220px;
  text-align: center;
  color: #201D1C;
}

.shopButton{
  width: 200px;
  height: 45px;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
}

.socialsImg:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.socialsWrapper{
  display: flex;
  gap: 30px;
}

.socialsImg{
  width: 48px;
  transition: all .3s ease-in-out;
}

.heroP{
  margin: 10px 0 30px;
}
</style>