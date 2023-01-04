<template>
  <header>
    <nav class="nav">
      <div class="navWrapper">
        <ul class="navUL">
          <li v-for="item in orderedNavItems" :key="item.text">
            
            <div class="navDiv" v-if="item.active">
              <p class="navLogo">Jan's</p>
              <routerLink :to="item.path">{{ item.text }}</routerLink>
            
            </div>
            <routerLink v-else :to="item.path" :class="item.active ? 'abc' : 'nay'">{{ item.text }}</routerLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { text: "Contact", path: "/contact"},
        { text: "About", path: "/about"},
        { text: "Home", path: "/", active: true},
        { text: "Music", path: "/music"},
        { text: "Lessons", path: "/lessons"},
      ],
    };
  },
  computed: {
    orderedNavItems() {
      console.log(this.$route.name);
      switch (this.$route.name) {
        case "about":
          this.navItems = [
            { text: "Contact", path: "/contact"},
            { text: "Home", path: "/"},
            { text: "About", path: "/about", active: true},
            { text: "Music", path: "/music"},
            { text: "Lessons", path: "/lessons"},
          ];
          break;

        case "home":
          this.navItems = [
            { text: "Contact", path: "/contact"},
            { text: "About", path: "/about"},
            { text: "Home", path: "/", active: true},
            { text: "Music", path: "/music"},
            { text: "Lessons", path: "/lessons"},
          ];
          break;
        case "contact":
          this.navItems = [
            { text: "About", path: "/about"},
            { text: "Home", path: "/"},
            { text: "Contact", path: "/contact", active: true},
            { text: "Music", path: "/music"},
            { text: "Lessons", path: "/lessons"},
          ];
          break;
        case "music":
          this.navItems = [
            { text: "Contact", path: "/contact"},
            { text: "Home", path: "/"},
            { text: "Music", path: "/music", active: true},
            { text: "About", path: "/about"},
            { text: "Lessons", path: "/lessons"},
          ];
          break;
        case "lessons":
          this.navItems = [
            { text: "Contact", path: "/contact"},
            { text: "Home", path: "/"},
            { text: "Lessons", path: "/lessons", active: true},
            { text: "About", path: "/about"},
            { text: "Music", path: "/music"},
          ];
          break;
      }
      return this.navItems;
    },
  },
};
</script>

<style scoped>


.navDiv{
  display: flex;
  align-items: center;
  position: relative;
}

.navLogo{
  font-size: 30px;
  position: absolute;
  left: -80px;
}

.navWrapper {
  display: flex;
  align-items: center;
  height: 100px;
}

.navUL {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.navLI {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.router-link-active{
  font-size: 20px;
}
</style>
