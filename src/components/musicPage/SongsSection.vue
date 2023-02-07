<script setup>
import SongsContainerVue from "./SongsContainer.vue";
</script>

<template>
  <section class="Songs">
    <h2 class="sectionText">Discography</h2>
    <div class="buttonsWrapperMusic">
      <div class="btn bandLeaderBtn"  @click="handleBtn">
      <p :style="this.isSolo ? 'transition: color 0.3s; color: #9D9171' : ''">
        Singles
      </p>
      </div>
      <div class="btnActive" :style="this.isAlbums ? 'left: 50%' : 'left: 0%'"></div>
      <div class="btn bassPlayerBtn"  @click="handleBtn">
      <p :style="this.isAlbums ? 'transition: color 0.3s; color: #9D9171' : ''">
        Albums and EP’s
      </p>
      </div>

    </div>
    <img class="loading" v-if="isLoading1" src="/loading.svg" alt="Loading" />
    <SongsContainerVue
      v-else
      :class="this.isSolo ? '' : 'hidden'"
      :dataArr="epArr"
    />
    <SongsContainerVue 
    :class="this.isAlbums ? '' : 'hidden'"
    :dataArr="singlesArr"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      epArr: [],
      singlesArr: [],
      isLoading1: true,
      isLoading2: true,
      isSolo: true,
      isAlbums: false,
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=19&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading1 = false;
        this.epArr = data;
      });
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=20&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading2 = false;
        this.singlesArr = data;
      });
  },
  methods: {
    handleBtn(){
      this.isSolo = !this.isSolo
      this.isAlbums = !this.isAlbums
    }
}};
</script>

<style scoped>

.btn{
  cursor: pointer;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
}

.buttonsWrapperMusic{
  background: rgba(8, 13, 26, 0.3);
  /* padding: 5px 15px; */
  width: 278px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
}

.btnActive{
  background: rgba(8, 13, 26, 0.6);
  border-radius: 10px;
  /* width:auto; */
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  left: 0%;
  z-index: 99;
  align-items: center;
  justify-content: center;
  transition: left 0.3s;
}

.hidden{
  display: none;
}

@media only screen and (max-width: 376px) {
  .Songs {
    width: 297px;
    gap: 15px;
  }
}
</style>
