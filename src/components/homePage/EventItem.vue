<template>
  <div class="eventItem" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <a class="eventLink" :href="link" target="_blank">
      <img class="eventImg" :src="eventImg" alt="Event" />
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
}

.eventImg:hover{
  filter: blur(3px);
}

@media only screen and (max-width: 376px) {
  .eventImg{
    width: 118px;
    height: 118px;
    
  }
}
</style>
