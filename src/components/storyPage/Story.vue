<template>
  <section class="Story">
    <StoryItemVue/>
    <StoryItemVue :reverse='true'/>
  </section>
</template>

<script setup>
import StoryItemVue from './StoryItem.vue'
</script>

<style>

</style>