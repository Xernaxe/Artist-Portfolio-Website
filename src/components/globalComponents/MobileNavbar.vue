<template>
  <header>
    <nav class="nav">
      <div class="navWrapper" :class="clicked ? 'toggled' : 'nay'">
        <ul class="UL">
          <routerLink
            v-for="item in orderedNavItems"
            :key="item"
            :to="item.path"
            >{{ item.text }}</routerLink
          >
        </ul>
        <div class="mainButton" @click="toggleNav">
          <p class="navMain"
            
          >
            {{ (getCurrentRoute + '').charAt(0).toUpperCase() + (getCurrentRoute + '').slice(1, (getCurrentRoute + '').length) }}
          </p>
          <img :class="clicked ? '': 'rotate'" class="navArrow" src="/mobileArrow.svg" alt="">
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { text: "Contact", path: "/contact" },
        { text: "Story", path: "/story" },
        { text: "Music", path: "/music" },
        { text: "Lessons", path: "/lessons" },
        { text: "Home", path: "/", active: true },
      ],
      clicked: false,
    };
  },
  methods: {
    toggleNav() {
      this.clicked = !this.clicked;
    },
  },
  computed: {
    navItemsNotActive() {
      return this.navItems.filter((item) => !item.active);
    },
    navItemActive() {
      return this.navItems.filter((item) => item.active);
    },
    getCurrentRoute(){
      return this.$route.name
    },

    orderedNavItems() {
      switch (this.$route.name) {
        case "story":
          this.navItems = [
            { text: "Contact", path: "/contact" },
            { text: "Home", path: "/" },
            { text: "Music", path: "/music" },
            { text: "Lessons", path: "/lessons" },
          ];
          break;

        case "home":
          this.navItems = [
            { text: "Contact", path: "/contact" },
            { text: "Story", path: "/story" },
            { text: "Music", path: "/music" },
            { text: "Lessons", path: "/lessons" },
          ];
          break;
        case "contact":
          this.navItems = [
            { text: "Story", path: "/story" },
            { text: "Home", path: "/" },
            { text: "Music", path: "/music" },
            { text: "Lessons", path: "/lessons" },
          ];
          break;
        case "music":
          this.navItems = [
            { text: "Contact", path: "/contact" },
            { text: "Home", path: "/" },
            { text: "Story", path: "/story" },
            { text: "Lessons", path: "/lessons" },
          ];
          break;
        case "lessons":
          this.navItems = [
            { text: "Contact", path: "/contact" },
            { text: "Home", path: "/" },
            { text: "Story", path: "/story" },
            { text: "Music", path: "/music" },
          ];
          break;
      }
      return this.navItems;
    },
  },
};
</script>

<style scoped>
header{
  display: none;
}

@media (max-width: 850px){
  header{
    display: flex;
  }
}
.navDiv {
  display: flex;
  align-items: center;
  position: relative;
}

.rotate{
  transform: rotate(180deg);
}

.mainButton{
  display: flex;
  width: 100%;
}

.navArrow{
  width: 15px;
  margin-right: 10px;
  transition: transform .7s;
  cursor: pointer;
}

.navMain{
  width: 100%;
  font-size: 24px;
  text-align: center;
}

.toggled {
  height: 180px!important;
}

.UL{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.navLogo {
  font-size: 30px;
  position: absolute;
  left: -80px;
}
.nav {
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  width: 100%;
  bottom: 0;
}

.navWrapper {
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
  height: 35px;
  background: rgb(157, 145, 113, 90%);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  transition: height .7s;
}

.navWrapper a {
  font-size: 16px;
}

.UL {
  width: 100%;
  text-align: end;
  margin-right: 25px;
}

.navUL {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  height: 24px;
}

.util {
  width: 100%;
  height: 40px;
  background-color: red;
}

.navLI {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.router-link-active {
  font-size: 20px;
}
</style>
