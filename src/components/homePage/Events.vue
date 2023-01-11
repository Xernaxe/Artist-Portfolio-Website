<template>
  <section class="Events">
    <h2 class="sectionH">Upcoming and news</h2>
    <div class="eventsWrapper">
      <EventItem/>
      <EventItem/>
      <EventItem/>
      <EventItem/>

    </div>
  </section>
</template>

<script setup>
import EventItem from './EventItem.vue';
</script>

<script>
export default {

}
</script>

<style scoped>

.Events{
  display: flex;
  margin: 130px 0 0 0;
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