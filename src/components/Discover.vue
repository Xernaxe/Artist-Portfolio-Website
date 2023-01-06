<template>
  <section class="discoverSection">
    <div class="discoverWrapper">
      <div class="discoverLeft">
        <p class="discoverP">Discover more of me and my music by clicking the links underneath</p>
        <div class="buttonsWrapper">
          <routerLink to="/about" class="buttonLink">About</routerLink>
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

.discoverSection{
  width: 750px;
}
.buttonLink{
  padding:12px 75px;
  border-radius: 10px;
  background-color: bisque;
  flex-basis: 50%;
}

.discoverWrapper{
  display: flex;
}

.buttonsWrapper{
  display: flex;
}
</style>