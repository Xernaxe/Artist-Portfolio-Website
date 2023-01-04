<template>
  <section class="musicSection">
    <blockquote class="blockquote">
      {{ quote }}
    </blockquote>
  </section>
</template>

<script>
export default {
  props: {
    quote: String,
    audioSrc: String
  }

}
</script>

<style scoped>

.blockquote{
  text-align: center;
  width: 924px;
}

</style>