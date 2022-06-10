<template>
  <div id="main-body" class="main-body" onclick="collapsible()">

    <!-- carousel -->
    <div class="container-fluid">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="../assets/Girls-in-ICT-Day.jpg" alt="" />
          </div>

          <div class="item">
            <img src="../assets/Girls-in-ICT-Day.jpg" alt="" />
          </div>

          <div class="item">
            <img src="../assets/Girls-in-ICT-Day.jpg" alt="" />
          </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <!-- end of carousel -->

    <h3 style="text-align: center; margin-top: 5%">
      We are here to <br /><strong>always help</strong> you
    </h3>
    <p class="mt-4" style="text-align: center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. <br />Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </p>

    <h3 style="text-align: center; margin-top: 5%">Text Goes Here</h3>
    <div class="row top-cards mt-3 mb-5">
      <div class="top-card">
        <i class="fa fa-heart"></i><br />
        <h4 style="text-align: center">Inspire</h4>
      </div>
      <div class="top-card top-card-mid">
        <i class="fa fa-users"></i><br />
        <h4 style="text-align: center">Engage</h4>
      </div>
      <div class="top-card">
        <i class="fa fa-users"></i><br />
        <h4 style="text-align: center">Educate</h4>
      </div>
    </div>

    <div class="empower mb-5">
      <div class="left">
        <h3>Empowering Girls & Women In Cyber Security</h3>
        <p style="text-align: justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. <br />Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>
      <img src="../assets/Girls-in-ICT-North-East.jpg" alt="" />
    </div>

    <h3 style="text-align: center; margin-top: 100px">Past Events</h3>
    <div class="row-2">
      <div class="col-sm-4">
        <img src="../assets/sustainable-development-strategy.jpg" alt="" />
      </div>
      <div class="col-sm-4">
        <img src="../assets/Digi_Transf.png" alt="" />
      </div>
      <div class="col-sm-4">
        <img src="../assets/bd.jpg" alt="" />
      </div>
    </div>

    <div class="special">
      <h3 style="text-align: center; margin-top: 100px">
        What is the <br />
        <strong>Speciality Of Us ?</strong>
      </h3>
      <div class="row-2">
        <div class="speciality-card">
          <img src="../assets/tertiary.jpg" alt="" />
          <h3>Title <strong>Goes Here</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div class="speciality-card">
          <img src="../assets/gicts1.jpg" alt="" />
          <h3>Title <strong>Goes Here</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div class="speciality-card">
          <img src="../assets/tertiary.jpg" alt="" />
          <h3>Title <strong>Goes Here</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>
        </div>
      </div>
    </div>
    <br />

    <div class="mt-5">
      <div class="partner mt-5">
        <div class="left">
          <h4>Our Sponsors And Partnership Helps Us Grow</h4>
        </div>
        <div class="right">
          <button>Become A Partner Today</button>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-5">
      <h3 style="text-align: center" class="mt-5 mb-5">Our Partners</h3>
      <div class="row-2 links">
        <div class="col-sm-4">
          <img src="../assets/image_2022-05-04_16-41-16.png" alt="" />
        </div>
        <div class="col-sm-4">
          <img src="../assets/image_2022-05-04_16-41-57.png" alt="" />
        </div>
        <div class="col-sm-4">
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

.container-fluid {
  width: 80%;
}
.carousel-inner {
  width: 100%;
  overflow: hidden;
  height: 45vh;
}
.carousel-inner img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.top-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 0 0 0;
  padding: 10px;
}
.top-card {
  margin: 0 20px;
  width: 25%;
  background-color: #6f36bb;
  color: white !important;
  padding: 10px 10px 30px 10px;
  border-radius: 5px;
  text-align: center;
}
.top-card h4 {
  color: white;
}
.top-card-mid {
  background-color: #ff4878;
}

.top-cards i {
  margin-top: 70px;
  font-size: 100px;
}

.empower {
  height: 400px;
  background-color: #ff4878;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
  margin: 100px 0;
}

.empower .left,
.empower .right {
  margin-top: 50px;
}
.empower .left {
  padding: 50px;
  width: 30%;
}
.empower .left h3,
.empower .left p {
  color: white;
}
.empower img {
  height: 300px;
  width: 500px;
  margin: 50px 0 0 0;
  border-top-left-radius: 50px;
  object-fit: cover;
}

.col-sm-4 img {
  border-radius: 10px;
  width: 100%;
}

.row-2 {
  display: flex;
  justify-content: space-around;
}

.speciality-card {
  text-align: center;
  padding: 20px;
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px lightgray;
}
.speciality-card img {
  margin: 80px 0 30px 0;
  width: 200px;
  height: 200px;
  object-position: center;
  object-fit: cover;
  border-radius: 100%;
}

.partner {
  padding: 20px;
  display: grid;
  grid-template-areas: "left right";
  height: 250px;
  background-color: #ff4878;
  width: 100%;
}
.partner .right {
  grid-area: right;
  margin-top: 80px;
  text-align: left;
}
.partner .left {
  grid-area: left;
  margin-top: 80px;
  font-weight: bold;
  padding: 10px 20px;
}
.partner .left h4 {
  font-weight: bold;
  color: white;
}
.partner .right button {
  padding: 10px 15px;
  background-image: linear-gradient(90deg, #5b0422, #9f083c);
  color: white;
  width: auto;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}

p,
h2,
h3,
h4,
h5,
h6 {
  color: black;
}

.links img {
  height: 50px;
  object-fit: cover;
  width: auto;
}

.links {
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 0 10px 5rem;
}
.jumbotron {
  height: 20vh;
}

.row5 button {
  border-radius: 5px;
  background-color: #6f36bb;
  color: white;
  height: 50px;
  width: 300px;
}

@media only screen and (max-width: 1033px )  {
  .main-body {
    margin: 50px 20px 0 20px;
  }

  .carousel-inner {
    height: 20vh;
  }
}

@media only screen and (max-width: 1500px) {
  .top-card {
    width: 20vw !important;
    margin: 10px;
    flex-wrap: wrap;
  }

  .top-cards i {
  margin-top: 30px;
  font-size: 30px;
}

/* empower */

.empower .left {
  padding: 0 !important;
  margin: 0;
}
.empower img {
  height: 70%;
  width: 40%;
  margin-left: 10px;
}
}

@media only screen and (max-width: 600px) {
 .carousel-inner {
    height: 15vh;
  }
   .top-card {
    width: 25vw !important;
    margin: 10px;
    flex-wrap: wrap;
  }

.empower .left {
  padding: 0 !important;
  
}

.row-2 .col-sm-4 {
  width: 100%;
  height: 100%;
}

.row-2 .speciality-card {
    width: 100% !important;
   height: 100%;
}

.speciality-card img{
  width: 100%;
  height: 100%;
}

}
</style>
