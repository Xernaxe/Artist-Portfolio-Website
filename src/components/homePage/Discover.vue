<template>
  <section class="discoverSection">
    <div class="discoverWrapper">
      <div class="discoverLeft">
        <p class="discoverP">Discover more of me and my music by clicking the links underneath</p>
        <div class="buttonsWrapper">
          <routerLink to="/about" class="buttonLink">Story</routerLink>
          <routerLink to="/music" class="buttonLink">Music</routerLink>
          <routerLink to="/lessons" class="buttonLink">Lessons</routerLink>
          <routerLink to="/contact" class="buttonLink">Contact</routerLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>


.discoverP{
  text-align: center;
  font-size: 24px;
  color: #9D9171;
}

.buttonLink{
  padding:9px 75px;
  width: 220px;
  text-align: center;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(157,145,113,1) 0%, rgba(215,215,215,1) 100%);
  color: #201D1C;
  flex-basis: 50%;
  transition: all .3s ease-in-out;
}

.buttonLink:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.discoverLeft{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.buttonsWrapper{
  display: flex;
  gap: 25px;
}

.discoverSection{
  margin: 70px 0 130px;
}
</style>