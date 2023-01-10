<template>
  <section class="Essay">
    <h2 class="sectionH">I also like writing essays</h2>
    <p class="essayP">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
    <div class="essayEMB">
      PDF EMBEDED
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.Essay{
  margin-bottom: 130px;
}

.essayP{
  text-align: center;
  width: 750px;
}

@media only screen and (max-width: 376px) {
  .essayP{
    width: 257px;
  }
}
</style>