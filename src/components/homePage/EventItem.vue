<template>
  <div class="eventItem">
    <img class="eventImg" src="/heroImg.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.eventImg {
  width: 220px;
  height: 220px;
  border-radius: 10px;
}

@media only screen and (max-width: 376px) {
  .eventImg{
    width: 118px;
    height: 118px;
    
  }
}
</style>
