<script setup>
import LessonsVue from '../components/lessonsPage/Lessons.vue';
import Discover from '../components/homePage/Discover.vue';
</script>

<script>
  export default{
    mounted(){
      document.title = 'Lessons Page'
    }
  }
</script>

<template>
  <LessonsVue/>
  <Discover/>
</template>

<style>
</style>
