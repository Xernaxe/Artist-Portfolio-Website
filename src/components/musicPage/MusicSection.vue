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
    margin: 90px 0 130px 0;
  }

</style>