<template>
  <section class="Story">

    <StoryItemVue/>
    <StoryItemVue :reverse='true'/>
  </section>
</template>

<script setup>
import StoryItemVue from './StoryItem.vue'
</script>

<style scoped>
.Story{
  margin: 130px 0;
  gap: 130px;
}

</style>