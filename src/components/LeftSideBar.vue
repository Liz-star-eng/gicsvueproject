<template>
     <div class="sidebar">
      <div class="leftbar">
        <a class="link" href="#"
          >Basic High School<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 20px"
          ></i>
        </a>
        <a  class="link" href="#"
          >Tertiary<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 90px"
          ></i
        ></a>
        <a  class="link" href="#"
          >Start Up<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 85px"
          ></i
        ></a>
        <br />
        <h4><i class="fa fa-user"></i> About Us</h4>
        <a class="text" style="color: white;"
          ><i class="fa fa-sign-in" aria-hidden="true"></i>
            Login
          </a
        >
      </div>
    </div>

    <!-- media queries -->
    <div class="media-queries">
      <span @click="toggleSideBar()">Click here to show left sidebar</span>
    </div>

     <div v-if="openSidebar" class="sidebar-collapsible">
      <div class="leftbar">
        <a class="link" href="#"
          >Basic High School<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 20px"
          ></i>
        </a>
        <a  class="link" href="#"
          >Tertiary<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 90px"
          ></i
        ></a>
        <a  class="link" href="#"
          >Start Up<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 85px"
          ></i
        ></a>
        <br />
        <h4><i class="fa fa-user"></i> About Us</h4>
        <router-link class="text" style="color: white;" to="./form"
          ><i class="fa fa-sign-in" aria-hidden="true"></i>
            Login
        </router-link
        >
      </div>
           <router-view />
    </div>
 
</template>

<script>
export default {
  data () {
    return {
      openSidebar: false,
    }
  },
  methods: {
    toggleSideBar() {

      if (openSidebar){
         document.getElementById("main-body").style.width = "17%";
        document.getElementById("span").innerHTML = "Click here to close sidebar >>> ";
      }
    }
  }
}
</script>
<style scoped>
.sidebar {
  padding: 0;
  background-color: #6F36BB;
  position: fixed;
  height: 100%;
  overflow: auto;
  width: 16%;
  z-index: 1;
  top: 0;
}

.sidebar .link {
  display: block;
  color: white;
  padding: 16px 10px;
  text-decoration: none;
  margin-left: 40px;
}

.sidebar .link:hover {
  color: rgb(214, 214, 75);
  margin-left: 60px !important;
  transition: 0.4s;
  cursor: pointer;
}

.leftbar {
  margin-top: 10vh;
}

.sidebar h4 {
  text-align: left;
  color: white;
  margin-top: 100%;
  margin-left: 55px;
}
.sidebar .text {
  font-weight: bold;
  font-size: 16px;
  width: 100px;
  padding: 13px;
  margin-top: 5%;
}

div .content {
  padding: 1px 16px;
  height: 1000px;
}

.text {
  margin-left: 40px;
}

.text:hover {
  text-decoration: none;
  color: rgb(214, 214, 75);
  cursor: pointer;
}



.media-queries {
  display: none;
}

/* media queries */

@media only screen and (max-width: 1280px ){
  .sidebar .link {
    margin-left: 0 !important;
  }

  .sidebar a.link:first-child {
    margin-top: 7vh !important;
  }

  .sidebar {
    margin-top: 8vh;
  }
}

@media only screen and (max-width: 1033px ) {
   .sidebar {
      display: none;
   }
   .media-queries {
     display: block;
     margin-top: 4vh;
     cursor: pointer;
   }

   .sidebar-collapsible {
     display: block;
      width: 16%;
     background-color: rgba(111, 54, 187, );
   }
}

</style>