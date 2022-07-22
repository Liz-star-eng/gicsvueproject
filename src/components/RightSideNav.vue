<template>
  <div id="mySidebar" class="sidebar" v-if="sideBarOpen">
    <h2>Women in ICT</h2>
    <a href="javascript:void(0)" class="closebtn" @click="toggleClose()"
      ><i class="fa fa-times"></i
    ></a>
    <a href="#">
      <img src="../assets/ladys.webp" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </a>
    <a href="#">
      <img src="../assets/lady.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </a>
    <a href="#">
      <img src="../assets/min.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </a>
    <a href="#">
      <img src="../assets/Digi_Transf.png" alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </a>
  </div>

  <div id="main">
    <span class="openbtn" @click="toggleSideBar()"
      ><i>Open Right Sidebar >>> </i></span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBarOpen: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.sideBarOpen = !this.sideBarOpen;
    },
    toggleClose() {
      this.sideBarOpen = !this.sideBarOpen;
    },
  },
};
</script>

<style scoped>
.sidebar {
  height: 90%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 12vh;
  right: 0;
  background-color: #557C83;
  overflow-x: hidden;
  transition: width 1s ease;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: rgb(202, 197, 197);
}
.sidebar h2 {
  color: white;
  padding: 5px;
  text-align: center;
  border-bottom: 1px solid white;
}
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

span {
  margin-top: 10rem !important;
  font-size: 20px;
  cursor: pointer;
  color: #557C83;
  border: none;
  z-index: 1;
  position: fixed;
  padding: 5px;
  right: 0;
    /* margin-left: 80vw; */
}

.openbtn:hover {
  color: #444;
}

#mySidebar a img {
  width: 250px;
}

#main {
  transition: margin-right 0.5s;
  padding: 16px;
  right: 0;
}
@media only screen and (max-width: 1409px) {
  span {
    margin-top: 0 !important;
  }
   span {
    margin-left: 0;
  padding-left: 90rem;
  }
}
@media only screen and (max-width: 1250px) {
.sidebar {
  width: 30%;
}
}

@media only screen and (max-width: 992px){
  .sidebar {
  width: 40%;
}
  span {
    margin-left: 0;
  padding-left: 60rem;
  }
}

@media only screen and (max-width: 768px) {
  span {
    margin-left: 0;
  padding-left: 15rem;
  }
    .sidebar {
  width: 100%;
  padding: 0 4rem;
}
}
</style>
