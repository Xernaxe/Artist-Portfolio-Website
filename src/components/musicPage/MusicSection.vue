<template>
  <section class="Music">
    <MusicContainerVue :sectionText="'Projects'" :headerText="'As bandleader'"/>
    <MusicContainerVue :headerText="'As a bass player'"/>
  </section>
</template>

<script setup>
import MusicContainerVue from './MusicContainer.vue';
</script>

<style scoped>
  .Music{
    gap: 70px;
    margin-bottom: 70px;
  }

</style>