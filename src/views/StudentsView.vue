<template>
  <div id="main-body" class="main-body">
    <!-- <span class="right-sidebar" id="span" onclick="openNav()"
             ><i>show Right Sidebar <<< </i></span
                 > -->
    <h2>Careers in ICT</h2>

    <div class="grid-container cards">
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="./carrer" class="btn btn-primary">See Profile</router-link>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn btn-primary">See Profile</a>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <router-link to="./careers" class="btn btn-primary">See Profile</router-link>
        </div>
      </div>
      <div class="card">
        <img
          class="card-img-top"
          src="../assets/Girls-in-ICT-North-East.jpg"
          alt="Card image"
          style="width: 100%"
        />
        <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
         <router-link to="./careers" class="btn btn-primary">See Profile</router-link>
        </div>
      </div>
    </div>
    <hr />
    <div class="navigation">
      <a href="">Previous</a>
      <a href="">1</a>
      <a href="">2</a>
      <a href="">3</a>
      <a href="">4</a>
      <a href="">5</a>
      <a href="">Next</a>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.main-body {
  margin-left: 17%;
  margin-top: 10vh;
  justify-content: center;
  margin-bottom: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 40px;
  padding: 30px;
  margin: 0 0 0 50px;
}

.grid-container div {
  background-color: rgb(231, 221, 221);
  padding: 20px;
  border-radius: 10px;
}
.grid-container img {
  border-radius: 10px;
  cursor: pointer;
  object-fit: cover;
}
.cards img:hover {
  transform: none !important;
  filter: 0;
  transition: 0.3s;
}

.cards .card .btn {
  background-color: #469C9D;
  color: rgb(255, 255, 255);
  transition: 0.3s;
}

.cards .card h4,
.card-text {
  text-align: left;
  margin-left: 0;
}

.cards .card .btn:hover {
  background-color: #b0edee;
  color: black
}

.navigation {
  justify-content: space-around;
  text-align: center;
}
.navigation a {
  margin: 10px;
  background-color: whitesmoke;
  padding: 5px;
  color: black;
}

.navigation a:hover {
  background-color: #5fb9da;
  color: blue;
}
@media only screen and (max-width: 1033px ) {
  .main-body {
    margin-left: 0;
    padding: 0 2rem;
  }
  .grid-container {
    grid-template-columns: 32% 32% 32%;
  }
}
@media only screen and (max-width: 992px) {
  .grid-container{
     grid-template-columns: 50% 50%;
  }
}

@media only screen and (max-width: 600px) {
  .grid-container {
     grid-template-columns: 100%;
  }

 .cards {
    padding: 0;
    margin: 0;
  }
  .card {
    padding: 0;
  }
}
</style>
