<template>
  <div class="eventItem" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <a class="eventLink" :href="link" target="_blank">
      <img class="eventImg" :src="eventImg" alt="Event" />
      <div class="imgOverlay" :class="isHovered ? 'expandOverlay':''">
        <div class="socialsWrapper">
          <img src="/instagramW.svg" alt="Instagram">
          <p class="overlayP">@jansedlakmusic</p>
        </div>
        <p class="overlayDesc">Playing with @eyal.lovett.music and @aidankeithlowe makes me smile like 5 years old. Thank you for the music, guys!</p>
        <p class="overlayDate">November 15, 2021</p>
      </div>
    </a>
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

.overlayDate{
  text-align: center;
  margin-bottom: 10px;
  font-size: 10px;
}

.expandOverlay{
  height: 222px!important;
  border-radius:10px!important;
}
.socialsWrapper{
  display: flex;
  gap: 10px;
  margin: 15px;
  justify-content: center;
}
.overlayDesc{
  text-align: center;
  font-size: 12px;
  text-overflow: ellipsis;
  margin: auto;
  width: 90%;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 100px;
}
.imgOverlay{
  max-width: 220px;
  height: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
  transition: .5s;
  /* transform: translateY(60%); */
}

.imgOverlay:hover{
  backdrop-filter: blur(3px);
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
.eventLink{
  width: 220px;
  display: flex;
  height: 220px;
}

.eventItem{
  position: relative;
  overflow: hidden;
}



@media (max-width: 420px){
  .eventLink{
    width: auto;
    height: auto;
  }

  .imgOverlay{
    max-width: fit-content!important;;
  }
}


@media only screen and (max-width: 700px) {
  .eventImg{
    width: 260px;
    height: 250px;
  }
}
</style>
