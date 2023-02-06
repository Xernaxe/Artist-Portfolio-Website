<template>
  <header>
    <nav class="nav">
      <div class="navWrapper">
        <ul class="navUL">
          <li v-for="item in orderedNavItems" :key="item.text">
            <div class="navDiv" v-if="item.active">
              <p class="navLogo">Jan'S</p>
              <routerLink :to="item.path">{{ item.text }}</routerLink>
            </div>
            <routerLink
              v-else
              :to="item.path"
              :class="item.active ? 'abc' : 'nay'"
              >{{ item.text }}</routerLink
            >
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
        { text: "Home", path: "/", active: true },
        { text: "Music", path: "/music" },
        { text: "Story", path: "/story" },
        { text: "Lessons", path: "/lessons" },
        { text: "Contact", path: "/contact" },
      ],
    };
  },
  computed: {
    orderedNavItems() {
      switch (this.$route.name) {
        case "story":
          this.navItems = [
            { text: "Story", path: "/story", active: true },
            { text: "Home", path: "/" },
            { text: "Music", path: "/music" },
            { text: "Lessons", path: "/lessons" },
            { text: "Contact", path: "/contact" },
          ];
          break;

        case "home":
          this.navItems = [
          { text: "Home", path: "/", active: true },
          { text: "Music", path: "/music" },
          { text: "Story", path: "/story" },
          { text: "Lessons", path: "/lessons" },
          { text: "Contact", path: "/contact" },
          ];
          break;
        case "contact":
          this.navItems = [
            { text: "Contact", path: "/contact", active: true },
            { text: "Home", path: "/" },
            { text: "Music", path: "/music" },
            { text: "Story", path: "/story" },
            { text: "Lessons", path: "/lessons" },
          ];
          break;
        case "music":
          this.navItems = [
            { text: "Music", path: "/music", active: true },
            { text: "Home", path: "/" },
            { text: "Story", path: "/story"},
            { text: "Lessons", path: "/lessons" },
            { text: "Contact", path: "/contact" },
          ];
          break;
        case "lessons":
          this.navItems = [
            { text: "Lessons", path: "/lessons", active: true },
            { text: "Home", path: "/" },
            { text: "Music", path: "/music" },
            { text: "Story", path: "/story"},
            { text: "Contact", path: "/contact" },
          ];
          break;
      }
      return this.navItems;
    },
  },
};
</script>

<style scoped>
.navDiv {
  display: flex;
  align-items: center;
  position: relative;
}

.navLogo {
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
  justify-content: space-evenly;
}

.navLI {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
}

.router-link-active {
  font-size: 40px;
  font-weight: lighter;
  color: #9D9171;
}
</style>
