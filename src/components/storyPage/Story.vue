<template>
  <section class="Story">
    <StoryItemVue :sectionImg="'storyImg.png'" :sectionHeader="'Professional profile'" :reverse='true' :description="`My name is Jan Sedlák and I am a bass player and composer inspired by modern jazz, world and classical music. My musical language is influenced by the art environment of Prague (CZ) which I have been a part of as a poet in my youth. My music tells stories of industrial landscapes, post-soviet society and impressions of love and hope. Besides composing, I also love playing traditional jazz and world music.<br><br>

As a band leader, I have worked with projects such as The Collective Abroad, Jan Sedlák Trio and Footprints by Pasaravičienė/Sedlák. See the “Music” page to learn about my projects and discography.<br><br>

As an educator, I love teaching double bass, electric bass and composition. See the page “Lessons” to learn more about my teaching methods and to request private or online classes.<br><br>

Thanks to my background in literature, I am occasionally taking part in cross-artistic projects such as literature readings and audio-visual performances. In 2019, my composition “New Spaces” by The JAR trio won the prize for second best music video at event “Z! Musikvideofestival” by “Filmkraft!”`"/>
  <StoryItemVue :sectionImg="'heroImg.png'" :sectionHeader="'Growing up and becoming a musician'" :description="`“Born and raised in the north of Czech Republic - a moon-like landscape of coal mines, mountains and brutalist constructions from the era of communism - I remember being shaped by two ideas. My father wanted me to become a versatile human being, strong at sports and schooling. On the contrary, my mother would support me at anything I wanted to do, emphasizing that people can become anyone they want.<br><br>

Through my interest in poetry and lyrics, I started writing songs in my early teenage years. Soon, my lyrics helped me to get accepted into the “poetry, lyrics and play-writing” program at Jaroslav Ježek Conservatory in Prague, where my friends introduced me to jazz. Moving to Denmark three years later, I decided to become a full-time jazz-musician. After four years of part-time work and an intensive self-learning process, I was accepted to The Royal Academy of Music in Aalborg and started to make a living as a musician.<br><br>

My deep gratitude for walking on this path together with me goes to my partner Line Elkjær. Line is an incredible artist and always a great inspiration to me.” - Jan Sedlák`"/>
  </section>
</template>

<script setup>
import StoryItemVue from './StoryItem.vue'
</script>

<style scoped>
.Story{
  gap: 100px;
  width: 51vw;
}

@media (max-width: 2050px){
  .Story{
    width: 962px;
  }
}
@media (max-width: 1023px){
  .Story{
    width: 70vw;
  }
}

</style>