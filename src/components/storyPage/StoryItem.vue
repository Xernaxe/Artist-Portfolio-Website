<template>
  <div class="storyItem">
    <h2 class="sectionH">{{ sectionHeader }}</h2>
    <div class="storyWrapper" :class="reverse ? 'reverseFlex' : 'asd'">
      <img class="storyImg" :src="sectionImg" alt="Photo of me" />
      <p class="storyP" v-html="description">

      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      reverse: Boolean,
      sectionImg: {
        type: String,
        required: true
      },
      description:{
        type: String,
        required: true
      },
      sectionHeader:{
        type: String,
        required: true
      }
    }
  }
;
</script>

<style scoped>
.storyWrapper{
  display: flex;
  gap: 20px;
  align-items: flex-end;
}

.storyImg{
  width: 467px;
  height: 467px;
  border-radius: 15px;
}

.reverseFlex{
  flex-direction: row-reverse;
}

@media only screen and (max-width: 376px) {
  .storyWrapper{
    flex-direction: column;
  }

  .storyImg{
  width: 257px;
  height: 257px;
}
}
</style>
