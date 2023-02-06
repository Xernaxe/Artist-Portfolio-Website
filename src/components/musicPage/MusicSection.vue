<template>
  <section class="Music">
    <h2 class="sectionText">Projects</h2>
    <div class="buttonsWrapperMusic">
      <div class="btn bandLeaderBtn"  @click="handleBandLeaderBtn">
      <p :style="this.isBandLeader ? 'transition: color 0.3s; color: #9D9171' : ''">
        As a band leader
      </p>
      </div>
      <div class="btnActive" :style="this.isBassPlayer ? 'left: 50%' : 'left: 0%'"></div>
      <div class="btn bassPlayerBtn"  @click="handleBassPlayerBtn">
      <p :style="this.isBassPlayer ? 'transition: color 0.3s; color: #9D9171' : ''">
        As a bass player
      </p>
      </div>

    </div>
    <img class="loading" v-if="isLoading1" src="/loading.svg" alt="Loading" />
    <MusicContainerVue
      v-else
      :class="this.isBandLeader ? '' : 'hidden'"
      :dataArr="projectsArr"
    />
    <!-- <img class="loading" v-if="isLoading2" src="/loading.svg" alt="Loading" /> -->
    <MusicContainerVue
      :class="this.isBassPlayer ? '' : 'hidden'"
      :dataArr="playerArr"
    />
  </section>
</template>

<script setup>
import MusicContainerVue from "./MusicContainer.vue";
</script>

<script>
export default {
  data() {
    return {
      projectsArr: [],
      playerArr: [],
      isLoading1: true,
      isLoading2: true,
      isBandLeader: true,
      isBassPlayer: false,
    };
  },
  created() {
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=17&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading1 = false;
        this.projectsArr = data;
      });
    fetch("https://vmadev.com/wp-json/wp/v2/posts?&categories=18&per_page=100")
      .then((response) => response.json())
      .then((data) => {
        this.isLoading2 = false;
        this.playerArr = data;
      });
  },
  methods:{
    handleBandLeaderBtn(){
      if(!this.isBandLeader){
        this.isBandLeader = true
        this.isBassPlayer = false
      }
      return
    },
    handleBassPlayerBtn(){
      if(!this.isBassPlayer){
        this.isBassPlayer = true
        this.isBandLeader = false
      }
      return

    }
  }
};
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
</style>
