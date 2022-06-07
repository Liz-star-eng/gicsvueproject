<template>
  <nav>
    <div class="row4">
      <div class="col-sm-2">
        <router-link to="/"
          ><h4 class="title"><i>GirlsInICT</i><i class="fa fa-home"></i></h4
        ></router-link>
      </div>
      <div class="col-sm-6">
        <nav>
          <ul>
            <li class="dropdown">
              <a href="" class="dropbtn"
                ><i class="fa fa-folder-open-o"></i> Directory
                <i class="fa fa-chevron-down"></i
              ></a>
              <div class="dropdown-content">
                <router-link id="a" to="./directorylistings"
                  >Mentors</router-link
                >
                <router-link id="a" to="./StudentsViews">Students</router-link>
              </div>
            </li>

            <li class="dropdown">
              <a href="forum.html" class="dropbtn"
                ><i class="fa fa-comment-o"></i> Forum
                <i class="fa fa-chevron-down"></i
              ></a>
              <div class="dropdown-content">
                <a id="a" href="">Industry</a>
                <a id="a" href="advert detils.html">Profession</a>
                <router-link id="a" to="./StudentsViews">Schools</router-link>
              </div>
            </li>

            <li class="dropdown">
              <a href="market.html" class="dropbtn"
                ><i class="fa fa-shopping-basket"></i> Academy
                <i class="fa fa-chevron-down"></i
              ></a>
              <div class="dropdown-content">
                <router-link id="a" to="/cyberview">CyberSecurity</router-link>
                <a id="a" href="#">Programming</a>
                <a id="a" href="Careers.html">Trends in Tech</a>
                <a id="a" href="advert detils.html">Basic computing </a>
                <a id="a" href="#">IoT</a>
                <a id="a" href="#">Robotics</a>
              </div>
            </li>
            <li class="dropdown">
              <a href="" class="dropbtn"
                ><i class="fa fa-folder-o"></i> Events
                <i class="fa fa-chevron-down"></i
              ></a>
              <div class="dropdown-content">
                <router-link id="a" to="/upcomingevent">Upcoming</router-link>
                <a id="a" href="news.html">Past</a>
              </div>
            </li>
            <li class="dropdown">
              <a href="#" class="dropbtn"
                ><i class="fa fa-folder-o"></i> Information Hub
                <i class="fa fa-chevron-down"></i
              ></a>
              <div class="dropdown-content">
                <router-link id="a" to="/moccorner">MoCD's Corner</router-link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-sm-4 search">
        <form
          class="searchbar"
          action="/action_page.php"
          style="margin: auto; max-width: 300px"
        >
          <input type="text" placeholder="Search.." name="search2" />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  </nav>

  <!-- media queries -->
  <div class="collapsible" v-if="shownav">
    <nav>
      <div class="row">
        <div class="col-sm-6">
          <div><i class="fa fa-bars" @click="shownav = !shownav"></i></div>
          <router-link to="/"
            ><h4 class="title"><i>GirlsInICT</i><i class="fa fa-home"></i></h4
          ></router-link>
        </div>
        <div class="col-sm-2">
          <!-- <div><i class="fa fa-bars"></i></div> -->
        </div>
        <div class="col-sm-4 search">
          <form
            class="searchbar"
            action="/action_page.php"
            style="margin: auto; max-width: 300px"
          >
            <input type="text" placeholder="Search.." name="search2" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <!-- hidden navbar -->
  <div class="nav">
    <nav>
      <ul>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-open-o"></i> Directory
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link id="a" to="./directorylistings">Mentors</router-link>
            <router-link id="a" to="./StudentsViews">Students</router-link>
          </div>
        </li>

        <li class="dropdown">
          <a href="forum.html" class="dropbtn"
            ><i class="fa fa-comment-o"></i> Forum
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <a id="a" href="">Industry</a>
            <a id="a" href="advert detils.html">Profession</a>
            <router-link id="a" to="./StudentsViews">Schools</router-link>
          </div>
        </li>

        <li class="dropdown">
          <a href="market.html" class="dropbtn"
            ><i class="fa fa-shopping-basket"></i> Academy
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link id="a" to="/cyberview">CyberSecurity</router-link>
            <a id="a" href="#">Programming</a>
            <a id="a" href="Careers.html">Trends in Tech</a>
            <a id="a" href="advert detils.html">Basic computing </a>
            <a id="a" href="#">IoT</a>
            <a id="a" href="#">Robotics</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="" class="dropbtn"
            ><i class="fa fa-folder-o"></i> Events
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link id="a" to="/upcomingevent">Upcoming</router-link>
            <a id="a" href="news.html">Past</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropbtn"
            ><i class="fa fa-folder-o"></i> Information Hub
            <i class="fa fa-chevron-down"></i
          ></a>
          <div class="dropdown-content">
            <router-link id="a" to="/moccorner">MoCD's Corner</router-link>
          </div>
        </li>
        <li @click="shownav = !shownav">
          <a href=""><i class="fa fa-times"></i></a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- phone query -->
  <div class="phone" v-if="shownav">
      <nav>
        <div class="row">
          <div class="col-sm-6">
            <div><i class="fa fa-bars" @click="shownav = !shownav"></i></div>
            <router-link to="/"
              ><h4 class="title"><i>GirlsInICT</i><i class="fa fa-home"></i></h4
            ></router-link>
          </div>
          <div class="col-sm-6 search">
            <div class="search">
              <button @click="showbar = !showbar" type="submit"><i class="fa fa-search"></i></button>
              <div class="input">
                <input v-if="showbar" type="text" placeholder="Search.." name="search2" />
            </div>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shownav: true,
      showbar: false,
    };
  },
  
};
</script>

<style scoped>
.row4 .title {
  margin-top: 2px;
  color: #6f36bb;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 30px;
}

.collapsible {
  display: none;
}
.row4 .title:hover {
  color: #0e0f7c;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 5px;
}

.row4 {
  background-color: white;
  height: 7vh;
  display: flex;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
  color: #0986b2;
}

.row4 .col-sm-4,
.col-sm-2 {
  padding: 1vh;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

nav li {
  float: left;
}

nav li a {
  display: block;
  color: #0e0f7c;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 16px;
}

li a:hover {
  color: orangered;
  background-color: white !important;
  border-radius: 10px;
  /* height: 5vh; */
  margin: 10px;
  padding: 5px;
}
.search {
  display: flex;
  flex-wrap: nowrap;
}
form {
  display: flex;
  align-items: center;
}

form input {
  font-size: 17px;
  border: 1px solid grey;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  float: right;
  width: 80%;
  height: 30px;
  background: #f1f1f1;
}

form button {
  width: 20%;
  height: 32px;
  background-color: #0e0f7c;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

form button:hover {
  background-color: #06099e;
  transition: 0.3s ease;
}

form input::placeholder {
  color: #ff4878 !important;
  font-style: italic;
  text-align: center;
}
.search .fa-search {
  margin: 5px 10px 0 10px;
  padding: 0 0 10px 0;
  justify-content: space-around;
  color: #ff4878;
}

/* dropdown */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: #0e0f7c;
  overflow: auto;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
  clear: both;
  padding: 0;
  border-radius: 5px;
}

.dropdown-content a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.phone {
  display: none;
}

.nav {
  display: none;
}

@media (max-width: 1470px) {
  .row4 .title {
    font-size: 22px;
  }

  .row4 {
    align-items: center;
  }
  .row4 nav li a {
    font-size: 14px !important;
    padding: 5px !important;
  }
  .phone {
    display: none;
  }
}

@media (max-width: 1120px) {
  .row4 {
    display: none;
  }

  .collapsible {
    display: flex;
  }
  .row {
    background-color: white;
    align-items: center;
    height: 8vh;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9;
    color: #0986b2;
    border-bottom: 1px solid;
  }
  .collapsible .col-sm-6 {
    display: flex;
  }

  .collapsible .title {
    color: #6f36bb;
    font-weight: bold;
    font-size: 26px;
    margin-left: 5px;
  }
  .collapsible .col-sm-6 .fa-bars {
    font-size: 30px;
    margin: 5px 20px 0 30px;
    color: #6f36bb;
    border: 1px solid rgb(199, 191, 191);
    padding: 5px;
  }
  .nav {
    display: flex;
    z-index: 9;
  }

  nav ul li a {
    font-size: 16px !important;
  }
}

@media only screen and (max-width: 750px) {
  nav ul li a {
    font-size: 12px !important;
  }
}

@media only screen and (max-width: 564px) {
  .collapsible {
    display: none;
  }

  .phone .row {
    background-color: white;
    align-items: center;
    height: 8vh;
    display: flex;
    flex-wrap: nowrap;
    position: fixed;
    z-index: 5;
    top: 0;
    width: 100vw;
    z-index: 2;
    color: #0986b2;
    border-bottom: 1px solid;
  }
  .phone .title {
    color: #6f36bb;
    font-weight: bold;
    font-size: 18px;
    margin-left: auto;
  }

  .phone .col-sm-6 {
    display: flex;
  }

  .phone .col-sm-6 .fa-bars {
    font-size: 22px;
    margin: 5px 10px 0 10px;
    color: #6f36bb;
    border: 1px solid rgb(199, 191, 191);
    padding: 5px;
  }

  .phone {
    display: flex;
  }

  .search button {
    background-color: #0e0f7c;
    border-radius: 10px;
    margin-left: 100px;
  }
}

@media only screen and (max-width: 414px) {
.phone .row {
    height: 12vh;
}
.search {
  display: block;
}
}

</style>
