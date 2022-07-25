<template>
  <div id="mySidebar" class="sidebar" :class="rightNav">
    <h2>Women in ICT</h2>
    <a href="javascript:void(0)" class="closebtn" @click="closeBar()"
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
    <span class="openbtn" @click="toggleSideBar()"><i><i class="fa fa-angle-double-right"></i></i>
    <span  class="tooltiptext"> click to show Right Navbar</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightNav: "noSlide",
    };
  },
  methods: {
    toggleSideBar() {
      this.rightNav = "slide";
    },
    closeBar() {
      this.rightNav = "noSlide";
    },
  },
};
</script>

<style scoped>
.sidebar {
  height: 90%;
  position: fixed;
  z-index: 1;
  top: 12vh;
  right: 0;
  background-color: #377D71;
  overflow-x: hidden;
  transition: width 0.6s ease;
  padding-top: 60px;
}

.slide {
  width: 20%;
}
.noSlide {
  width: 0;
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

.openbtn {
  background-color: #377D71;
  margin-top: 11rem !important;
  font-size: 20px;
  cursor: pointer;
  color: white;
  border: none;
  position: fixed;
  padding: 5px 2rem;
  right: 5rem;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.openbtn:hover {
  color: #444;
}

.openbtn .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #377D71;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 16px;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: -100%;
}

.openbtn:hover .tooltiptext {
   visibility: visible;
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
.openbtn {
    margin-top: 0 !important;
    margin-left: 0;
    padding-left: 90rem;
  }
}
</style>
