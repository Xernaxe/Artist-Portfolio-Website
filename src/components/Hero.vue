<template>
  <section class="heroSection">
    <div class="heroWrapperLeft">
      <img class="heroImg" src="../assets/heroImg.png" alt="Photo of me">
    </div>
    <div class="heroWrapperRight">
      <h1 class="heroHeader">Jan’Sedlák</h1>
      <p class="heroP">“To me, there is great power in connecting people. I believe that through music, we can communicate regardless language barriers. Let music help us find a way to each other."</p>
      <div class="socialsWrapper">
        <img class="socialsImg" src="" alt="">
        <img class="socialsImg" src="" alt="">
        <img class="socialsImg" src="" alt="">
        <img class="socialsImg" src="" alt="">
        <img class="socialsImg" src="" alt="">
        <img class="socialsImg" src="" alt="">
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
  width: 477px;
  height: 477px;
  border-radius: 15px;
}

.heroSection{
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 40px 0;
}


.heroWrapperRight{
  width: 440px;
}

.heroHeader{
  font-size: 2.5rem;
}

.buttonLink{
  padding:12px 75px;
  border-radius: 10px;
  background-color: bisque;
}

.shopButton{
  width: 200px;
  height: 45px;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>