<template>
  <div class="imageWrapper" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <a :href="extLink" target="_blank"
      ><img :src="imgUrl" class="galleryImg"
    /></a>
    <img
      :class="isHovered ? 'active' : 'asd'"
      class="socialImg"
      src="/driver.svg"
      alt="a"
    />
  </div>
</template>

<script>
export default {
  data(){
    return{
      isHovered: false,
    }
  },
  props:{
    extLink:{
      type: String,
      required: true
    },
    imgUrl:{
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
  width: 24px;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity .6s;
  z-index: 99999;
}

.active{
  opacity: 1;
}
.galleryImg {
  padding: 10px;
  min-width: 289px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: filter .6s;
}

.galleryImg:hover{
  filter: blur(2px);
}

.galleryImg {
  width: 100%;
  border-radius: 10px;
}
</style>
