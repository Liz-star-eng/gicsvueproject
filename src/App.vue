<template>
  <Topnav />
  <router-view />
  <LeftSideBar />
  <Footer />
</template>

<script>
import Topnav from "./components/Topnav.vue";
import Footer from "./components/Footer.vue";
import LeftSideBar from "./components/LeftSideBar.vue";

export default {
  name: "App",
  components: {
    Topnav,
    Footer,
    LeftSideBar
  },
};
</script>

<style>


</style>
