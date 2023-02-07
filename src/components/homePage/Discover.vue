<template>
  <section class="discoverSection">
    <div class="discoverWrapper">
      <div class="discoverLeft">
        <h2 class="sectionH">
          Discover more of me and my music by clicking the links underneath
        </h2>
        <div class="buttonsWrapper" >
          <routerLink :to=item.path v-for="item in orderButtonsMap" :key="item.path" class="buttonLink">
            <p class="btnP">{{ item.btnP }}</p>
            <p class="btnSubP">{{ item.btnSubP }}</p>
            <!-- Idk why it does not allow the || operator, the intended code was: item.alt === 'Lessons' || 'Contact' ? 'postImg' : '' -->
            <img :src="item.src" :alt="item.alt" class="btnImg" :class="item.alt === 'Lessons' ? 'posImg' : item.alt === 'Contact' ? 'posImg':''"> 
            <img src="/arrowBtn.svg" alt="Home" class="arrowBtn">
          </routerLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      buttonsMap: [
      {src: "/homeBtn.svg", alt: "Home", btnP:"Home", btnSubP:"Go to homepage", path:'/'},
      {src: "/storyBtn.svg", alt: "Story", btnP:"Story", btnSubP:"Read more about my journey here", path:"/story"},
      {src: "/lessonsBtn.svg", alt: "Lessons", btnP:"Lessons", btnSubP:"Learn about educational opputunities", path:"/lessons"},
      {src: "/contactBtn.svg", alt: "Contact", btnP:"Contact", btnSubP:"Click here to contact me", path:"/contact"}]
  }
},
computed:{
  orderButtonsMap(){
    switch (this.$route.name) {
      case "music":
        this.buttonsMap = [
        {src: "/homeBtn.svg", alt: "Home", btnP:"Home", btnSubP:"Go to homepage", path:'/'},
        {src: "/storyBtn.svg", alt: "Story", btnP:"Story", btnSubP:"Read more about my journey here", path:"/story"},
        {src: "/lessonsBtn.svg", alt: "Lessons", btnP:"Lessons", btnSubP:"Learn about educational opputunities", path:"/lessons"},
        {src: "/contactBtn.svg", alt: "Contact", btnP:"Contact", btnSubP:"Click here to contact me", path:"/contact"}]
      break;
      
      case "home":
        this.buttonsMap = [
        {src: "/musicBtn.svg", alt: "Music", btnP:"Music", btnSubP:"Get to know my music", path:"/music"},
        {src: "/storyBtn.svg", alt: "Story", btnP:"Story", btnSubP:"Read more about my journey here", path:"/story"},
        {src: "/lessonsBtn.svg", alt: "Lessons", btnP:"Lessons", btnSubP:"Learn about educational opputunities", path:"/lessons"},
        {src: "/contactBtn.svg", alt: "Contact", btnP:"Contact", btnSubP:"Click here to contact me", path:"/contact"}]
      break;

      case "story":
        this.buttonsMap = [
        {src: "/homeBtn.svg", alt: "Home", btnP:"Home", btnSubP:"Go to homepage", path:'/'},
        {src: "/musicBtn.svg", alt: "Music", btnP:"Music", btnSubP:"Get to know my music", path:"/music"},
        {src: "/lessonsBtn.svg", alt: "Lessons", btnP:"Lessons", btnSubP:"Learn about educational opputunities", path:"/lessons"},
        {src: "/contactBtn.svg", alt: "Contact", btnP:"Contact", btnSubP:"Click here to contact me", path:"/contact"}]
      break;

      case "lessons":
        this.buttonsMap = [
        {src: "/homeBtn.svg", alt: "Home", btnP:"Home", btnSubP:"Go to homepage", path:'/'},
        {src: "/musicBtn.svg", alt: "Music", btnP:"Music", btnSubP:"Get to know my music", path:"/music"},
        {src: "/storyBtn.svg", alt: "Story", btnP:"Story", btnSubP:"Read more about my journey here", path:"/story"},
        {src: "/contactBtn.svg", alt: "Contact", btnP:"Contact", btnSubP:"Click here to contact me", path:"/contact"}]
      break;

      case "contact":
        this.buttonsMap = [
        {src: "/homeBtn.svg", alt: "Home", btnP:"Home", btnSubP:"Go to homepage", path:'/'},
        {src: "/musicBtn.svg", alt: "Music", btnP:"Music", btnSubP:"Get to know my music", path:"/music"},
        {src: "/storyBtn.svg", alt: "Story", btnP:"Story", btnSubP:"Read more about my journey here", path:"/story"},
        {src: "/lessonsBtn.svg", alt: "Lessons", btnP:"Lessons", btnSubP:"Learn about educational opputunities", path:"/lessons"}]
      break;
    }
    return this.buttonsMap
  }
}
};
</script>

<style>

.btnP{
  margin: 10px 10px 0px;
  font-size: 40px;
  line-height: 45px;
  z-index: 10;
  
}
.btnSubP{
  text-align: center;
  font-size: 12px;
  z-index: 10;
}

.arrowBtn{
  position: absolute;
  right: 0;
  height: 100%;
}
.discoverP {
  text-align: center;
  font-size: 24px;
  color: #9d9171;
}

.buttonLink {
  transition: 1s;
  cursor: pointer;
  background: linear-gradient(315deg, rgba(157, 145, 113, 1) 0%, rgba(97, 53, 84, 1) 100%) var(--pos, 0%)/ 200% ;
  flex-basis: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 120px;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
}
.btnImg{
  /* height: 100%; */
  width: 100%;
  position: absolute;
  bottom: 0;
}

.posImg{
  width: 100px;
  left: 20px;
}

.buttonLink:hover {
  --pos: 100%
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

@media (max-width: 420px){
  .discoverSection{
    display: none;
  }
}
</style>
