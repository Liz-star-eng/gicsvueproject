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
          </ul>
        </nav>
      </div>
      <div class="col-sm-4 search">
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="What's on your mind?"
              name="search"
            />
          </div>
        </form>
        <div class="search-icon">
          <i class="fa fa-search"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.row4 .title {
  margin-top: 2px;
  color: #6f36bb;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 30px;
}

.row4 .title:hover {
  color: #0e0f7c;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 5px;
}

.row4 {
  background-color: white;
  height: 9vh;
  display: flex;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
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

.search .form-control {
  width: 25vw;
}

.navbar-form {
  padding-right: 1px;
}

form input::placeholder {
  color: #ff4878 !important;
  font-style: italic;
  text-align: center;
}
.search .fa-search {
  margin: 8px 10px 20px 0px;
  background-color: #0e0f7c;
  border-radius: 50%;
  padding: 10px;
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
</style>
