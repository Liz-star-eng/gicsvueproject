<template>
  <div class="main-body">
    <div>
      <h2>Directory</h2>
      <p style="margin-left: 70px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima qui odio, rem officia dolorum accusamus aut vel dicta esse.</p>
      <div class="cards">
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>
      <hr class="hr" />
      <div class="cards">
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>
      <hr class="hr" />
      <div class="cards">
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>Jane Doe</b></h4>
            <p>Interior Designer</p>
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

.cards {
  display: flex;
  justify-content: space-around;
}
.card {
  width: 15%;
  height: 100%;
}

.card img {
  width: 150px;
  height: 200px;
  border-radius: 50%;
}
.card h4 {
  color: green;
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
  background-color: #ff4878;
}
.partners button {
  margin-left: 20px;
  height: 6vh;
  border-radius: 10px;
  color: white;
  background-image: linear-gradient(90deg, #5b0422, #9f083c);
  padding: 10px;
  width: 15vw;
}

.partners button:hover {
  padding: 5px;
  color: rgb(231, 165, 176);
  transition: 0.1s;
}

</style>
