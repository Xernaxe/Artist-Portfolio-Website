<template>
  <img class="loading" v-if="isLoading1" src="/loading.svg" alt="Loading" />
  <section v-else class="Events">
    
    <h2 class="sectionH">Upcoming and news</h2>
    <div class="eventsWrapper">
      <EventItem v-for="item in eventArr" :key="item.id" :link="item.acf.link" :eventImg="item.acf.img.url"/>


    </div>
  </section>
</template>

<script setup>
import EventItem from './EventItem.vue';
</script>

<script>
export default {
  data() {
    return {
      eventArr: [],
      isLoading1: true
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=22&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading1 = false;
        this.eventArr = data;
      });
  },
}
</script>

<style scoped>

.Events{
  display: flex;
}

.eventsWrapper{
  display: flex;
  gap: 20px;
}

@media only screen and (max-width: 376px) {
  .eventsWrapper{
    flex-wrap: wrap;
  }
}

</style>