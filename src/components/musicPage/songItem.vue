<template>
  <div class="song">
    <div class="cd">
      <img class="cdImg" :src="imgSrc" alt="">
      <div class="cdHole"></div>
    </div>
    <div class="songDetails">
      <p class="songName">{{songName}}</p>
      <p class="songAlbum">{{albumName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songName: {
      type: String,
      required: true
    },
    albumName: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
  }

}
</script>

<style scoped>

  .song{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    gap: 20px;
    width: 300px;
    height: 320px;
    background: linear-gradient(315deg, rgba(157,145,113,1) 0%, rgba(97,53,84,1) 100%);
  }
  .cdImg{
    width: 200px;
    border-radius: 50%;
    height: 200px;
  }
  .cd{
    position: relative;
    width: 200px;
    height: 200px;
  }

  .cdHole{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(rgba(131,105,101,1) 0%, rgba(126,97,98,1) 100%);
    background-attachment: fixed;
    border-radius: 50%;
  }


  .songName{
    font-weight: 600;
    color: #070713;
  }
  .songName, .songAlbum{
    text-align: center;
  }
</style>