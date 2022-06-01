<template>
     <div class="sidebar">
      <div class="leftbar">
        <a href="#"
          >Basic High School<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 20px"
          ></i>
        </a>
        <a href="#"
          >Tertiary<i
            class="fa fa-angle-right"
            style="font-size: 24px; margin-left: 90px"
          ></i
        ></a>
        <a href="#"
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
</template>

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

.sidebar a {
  display: block;
  color: white;
  padding: 16px 10px;
  text-decoration: none;
  margin-left: 50px;
}

.sidebar a:hover {
  color: rgb(214, 214, 75);
  margin-left: 30px;
  transition: 0.4s;
  cursor: pointer;
}

.sidebar .a:hover {
  margin-left: 0 !important;
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

.sidebar a:hover {
  margin-left: 0 !important;
}

div .content {
  padding: 1px 16px;
  height: 1000px;
}

</style>