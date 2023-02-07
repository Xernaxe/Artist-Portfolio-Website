<template>
  <section class="discoverSection">
    <div class="discoverWrapper">
      <div class="discoverLeft">
        <h2 class="sectionH">
          Discover more of me and my music by clicking the links underneath
        </h2>
        <div class="buttonsWrapper">
          <routerLink to="/" class="buttonLink"><img src="/homeBtn.svg" alt="Home"></routerLink>
          <routerLink to="/music" class="buttonLink"><img src="/musicBtn.svg" alt="Music"></routerLink>
          <routerLink to="/story" class="buttonLink"><img src="/storyBtn.svg" alt="Story"></routerLink>
          <routerLink to="/contact" class="buttonLink"><img src="/contactBtn.svg" alt="Contact"></routerLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.discoverP {
  text-align: center;
  font-size: 24px;
  color: #9d9171;
}

.buttonLink {
  flex-basis: 50%;
  transition: all 0.3s ease-in-out;
}

.buttonLink:hover {
  cursor: pointer;
}

.discoverLeft {
  display: flex;
  flex-direction: column;
}

.buttonsWrapper {
  display: flex;
  gap: 25px;
}

@media only screen and (max-width: 970px) {
  .buttonsWrapper {
    flex-wrap: wrap;
    justify-content: center;
  }

  .buttonLink {
    flex-basis: 0;
  }
}

@media only screen and (max-width: 730px) {
  .buttonsWrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
