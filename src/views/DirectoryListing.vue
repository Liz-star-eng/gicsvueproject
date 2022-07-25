<template>
  <div class="main-body">
    <div class="sub-body">
      <h2>Directory</h2>
      <p style="margin-left: 70px">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima
        qui odio, rem officia dolorum accusamus aut vel dicta esse.
      </p>
      <div class="cards">
        <div class="card">
          <img src="../assets/office.png" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>Computer Analyst</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ladys.webp" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>Systems Analyst</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/lady.jpg" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>Computer Application Analyst</p>
          </div>
        </div>
      </div>
      <hr class="hr" />
      <div class="cards">
        <div class="card">
          <img src="../assets/lady.jpg" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>ICT Business Analyst</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/office.png" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/lady.jpg" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>Cyber Security Expert</p>
          </div>
        </div>
      </div>
      <hr class="hr" />
      <div class="cards">
        <div class="card">
          <img src="../assets/office.png" alt="Avatar"/>
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>ux/ui Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/lady.jpg" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>system Analysis</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/office.png" alt="Avatar" />
          <div class="container">
            <router-link to="/directorydetail"
              ><h4><b>Jane Doe</b></h4></router-link
            >
            <p>internet security analyst</p>
          </div>
        </div>
      </div>
      <hr class="hr" />
      <div class="arrow">
        <a href="listings.html"><i class="fa fa-arrow-left"></i></a>
        <a href="listings.html"><i class="fa fa-arrow-right"></i></a>
      </div>
      <hr class="hr" />
    </div>
    <div class="jumbotron partners">
      <div><h4>Our Partners and Sponsors make us grow</h4></div>
      <div><button>Become a Partner Today</button></div>
    </div>
    <div class="mt-5 mb-5">
      <h3 style="text-align: center" class="mt-5 mb-5">Our Partners</h3>
      <div class="row-2 links">
        <div class="col-sm-3">
          <img src="../assets/image_2022-05-04_16-41-16.png" alt="" />
        </div>
        <div class="col-sm-3">
          <img src="../assets/image_2022-05-04_16-41-57.png" alt="" />
        </div>
        <div class="col-sm-3">
          <img src="../assets/image_2022-05-04_16-42-21.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-body {
  margin-left: 17%;
  margin-top: 10vh;
  overflow: hidden;
}
.sub-body  {
  padding: 0 3rem;
}
.cards {
  display: flex;
  justify-content: space-around; 
}
.card {
  height: 100%;
  overflow: hidden;
}

.card img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.card h4 {
  color: #377d71;
}

.arrow {
  text-align: center;
}
.arrow a {
  background-color: whitesmoke;
  color: black;
  border-radius: 50px;
  font-size: 16px;
  margin: 50px;
  padding: 10px;
}

.arrow a:hover {
  background-color: pink;
}
.jumbotron {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #A2D5AC;
}
.partners button {
  margin-left: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #479595;
  padding: 10px;
}

.partners button:hover {
  transition: 0.1s;
  background-color: #1e5757;
}

.row-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 5px 0;
}

.links img {
  height: 50px;
  object-fit: cover;
  width: auto;
}
@media only screen and (max-width: 1033px ) {
  .main-body {
    margin-left: 0;
  }
}
@media only screen and (max-width: 725px) {
  .cards {
    flex-wrap: wrap;
  }
  .card .container {
  text-align: center;
}

}
/* 
@media only screen and (max-width: 600) {
  .main-body {
    overflow-x: none !important;
  }
  .card .container {
    text-align: center;
  }
} */
</style>
