<template>
  <div class="eventItem" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <a class="eventLink" :href="link" target="_blank">
      <img class="eventImg" :src="eventImg" alt="Event" />
      <div class="imgOverlay">
        <div class="socialsWrapper">
          <img src="/instagramW.svg" alt="Instagram">
          <p class="overlayP">@jansedlakmusic</p>
        </div>
        <p class="overlayDesc">Playing with @eyal.lovett.music and @aidankeithlowe makes me smile like 5 years old. Thank you for the music, guys!</p>
      </div>
    </a>
    <img :class="isHovered ? 'active' : 'asd'" class="socialImg" src="/instagram.svg" alt="Instagram">
  </div>
</template>

<script>
export default {
  data(){
    return{
      isHovered: false,
  }},
  props:{
    link: {
      type: String,
      required: true
    },
    eventImg: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.socialsWrapper{
  display: flex;
}
.overlayDesc{
  text-align: center;
}
.imgOverlay{
  max-width: 220px;
  height: 227px;
  background-color: black;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
  /* transform: translateY(60%); */
}

.socialImg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity .6s;
}

.active{
  opacity: 1;
}

.eventImg {
  width: 220px;
  height: 220px;
  border-radius: 10px;
  transition: filter .6s;
}

.eventItem{
  position: relative;
  overflow: hidden;
}

.eventImg:hover{
  filter: blur(3px);
}

@media only screen and (max-width: 970px) {
  .eventImg{
    width: 150px;
    height: 150px;
  }
}

@media only screen and (max-width: 700px) {
  .eventImg{
    width: 260px;
    height: 250px;
  }
}
</style>
