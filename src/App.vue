<template>
  <Topnav />
  <LeftSideBar />
  <RightSideNav />
  <router-view />
  <Footer />
</template>

<script>
import Topnav from "./components/Topnav.vue";
import Footer from "./components/Footer.vue";
import LeftSideBar from "./components/LeftSideBar.vue";
import RightSideNav from "./components/RightSideNav.vue";

export default {
  name: "App",
  components: {
    Topnav,
    Footer,
    LeftSideBar,
    RightSideNav,
  },
};
</script>

<style scoped>
/* #App {
  position: absolute;
  overflow: hidden;
} */
</style>
