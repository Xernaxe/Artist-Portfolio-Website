<template>
  <div class="storyItem">
    <h2 class="sectionH">Hi, my name is Jan, nice to meet you!</h2>
    <div class="storyWrapper" :class="reverse ? 'reverseFlex' : 'asd'">
      <img class="storyImg" src="/heroImg.png" alt="Photo of me" />
      <p class="storyP">
        “Born and raised in the north of Czech Republic - a moon-like landscape
        of coal mines, mountains and brutalist constructions from the era of
        communism - I remember being shaped by two ideas. My father wanted me to
        become a versatile human being, enjoying sports and books. <br /><br />
        On the contrary, my mother would never tell me what she would wish me to
        know or to become. Instead, she would emphasize that people can do
        anything they want and become anyone they want. Already at primary
        school, I started writing poetry and poetry has also become my door to
        music. Missing music to my texts, I started experimenting with
        songwriting in early teenage years.<br /><br />

        Quickly, my focus shifted to music. From rock and punk, I soon turned to
        blues and chanson and being eighteen, my lyrics helped me to get
        accepted to poetry, lyrics and play-writing program at Jaroslav Jezek
        Conservatory in Prague. At the conservatory, my friends introduced me to
        jazz.”
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      reverse: Boolean
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
}

.reverseFlex{
  flex-direction: row-reverse;
}
</style>
