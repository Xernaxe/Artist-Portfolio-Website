<template>
  <section class="Story">

    <StoryItemVue :sectionImg="'heroImg.png'" :description="`Born and raised in the north of Czech Republic - a moon-like landscape of coal mines, mountains and brutalist constructions from the era of communism - I remember being shaped by two ideas. My father wanted me to become a versatile human being, strong at sports and schooling. On the contrary, my mother would support me at anything I wanted to do, emphasizing that people can become anyone they want.<br><br>

Through my interest in poetry and lyrics, I started writing songs in early teenage. Soon, my lyrics helped me to get accepted into “poetry, lyrics and play-writing” program at Jaroslav Ježek Conservatory in Prague, where my friends introduced me to jazz. Moving to Denmark three years later, I was decided to become a full-time jazz-musician. After four years of part-time work and intensive self-learning process, I was accepted to The Royal Academy of Music in Aalborg and started to make a living as a musician.<br><br>

My deep gratitude for walking on this path together with me goes to my partner Line Elkjær. Line is an incredible artist and always great inspiration to me.” - Jan Sedlák`"/>
    <StoryItemVue :sectionImg="'storyImg.png'" :reverse='true' :description="`Jan Sedlák is a bass player and composer inspired by modern jazz, world and classical music. His musical language is influenced by the art environment of Prague (CZ) which Jan was part of as a poet in his youth. Jan’s music tells stories of industrial landscapes, post-soviet society and impressions of love and hope. Besides composing, Jan loves playing traditional jazz and world music.<br><br>

As a band leader, Jan works with projects such as The Collective Abroad, Jan Sedlák Trio and Footprints by Pasaravičienė/Sedlák. See the “music” page to learn about Jan’s projects and discography.<br><br>

As an educator, Jan loves teaching double bass, electric bass and composition. See the page “lessons” to learn more about Jan’s teaching methods and to request private or online classes.<br><br>

Thanks to his background in literature, Jan is occasionally taking part in cross-artistic projects such as literature readings and audio-visual performances. In 2019, Jan’s composition “New Spaces” by The JAR trio won the prize for second best music video at event “Z! Musikvideofestival” by “Filmkraft!”`"/>
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