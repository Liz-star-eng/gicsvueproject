<template>
  <div class="sidebar">
    <div class="leftbar">
      <a class="link" href="#"
        >Basic High School<i
          class="fa fa-angle-right"
          style="font-size: 24px; margin-left: 20px"
        ></i>
      </a>
      <a class="link" href="#"
        >Tertiary<i
          class="fa fa-angle-right"
          style="font-size: 24px; margin-left: 90px"
        ></i
      ></a>
      <a class="link" href="#"
        >Start Up<i
          class="fa fa-angle-right"
          style="font-size: 24px; margin-left: 85px"
        ></i
      ></a>
      <br />
      <div class="user">
        <h4><i class="fa fa-user"></i> About Us</h4>
        <a class="text" style="color: white"
          ><i class="fa fa-sign-in" aria-hidden="true"></i>
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openSidebar: false,
    };
  },
};
</script>
<style scoped>
.sidebar {
  padding: 0;
  background-color: #377D71;
  position: fixed;
  height: 100%;
  margin-top: 8%;
  overflow: auto;
  width: 16%;
}

.sidebar .link {
  display: block;
  color: white;
  padding: 16px 10px;
  text-decoration: none;
  margin-left: 40px;
}

.sidebar .link:hover {
  color: #aecdd3;
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
  margin-top: 10%;
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

.user {
  position: fixed;
}

/* media queries */

@media only screen and (max-width: 1409px) {
  .sidebar .link {
    margin-left: 0 !important;
  }

  .sidebar a.link:first-child {
    margin-top: 7vh !important;
  }

  .sidebar {
    margin-top: 0;
  }
}

@media only screen and (max-width: 1033px) {
  .sidebar {
    display: none;
  }
}
</style>
