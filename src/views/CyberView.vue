<template>
  <div class="main-body">
    <h2>Cyber security</h2>
    <div class="image">
      <img src="../assets/cybersecurity.jpg" alt="" />
    </div>
    <div class="button">
      <button class="active">Overview</button>
      <button>Curriculum</button>
      <button>Reviews</button>
    </div>

    <h3>Long & big title</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus
      fugit minus earum cumque consequatur voluptate tempore debitis quam!
      Laborum odit minima veniam ea a sunt distinctio inventore debitis
      recusandae dolor, doloremque asperiores quod eligendi nulla porro
      officiis, unde incidunt itaque! Quaerat, asperiores maxime consequuntur
      nulla esse voluptatem harum magni illo! Officiis eaque natus sequi? Illum,
      id voluptas ipsa vero aliquam unde numquam necessitatibus autem sunt nisi
      placeat assumenda nihil ullam recusandae beatae culpa? Illum, eum vitae
      excepturi aut ex eligendi aliquam eos sunt accusantium ea nam ab deserunt
      sapiente cum, quaerat, facere maiores quos minus aperiam. Aspernatur, eum
      placeat?
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus
      fugit minus earum cumque consequatur voluptate tempore debitis quam!
      Laborum odit minima veniam ea a sunt distinctio inventore debitis
      recusandae dolor, doloremque asperiores quod eligendi nulla porro
      officiis, unde incidunt itaque! Quaerat, asperiores maxime consequuntur
      nulla esse voluptatem harum magni illo! Officiis eaque natus sequi? Illum,
      id voluptas ipsa vero aliquam unde numquam necessitatibus autem sunt nisi
      placeat assumenda nihil ullam recusandae beatae culpa? Illum, eum vitae
      excepturi aut ex eligendi aliquam eos sunt accusantium ea nam ab deserunt
      sapiente cum, quaerat, facere maiores quos minus aperiam. Aspernatur, eum
      placeat?
    </p>
    <br />
    <div class="container">
      <h3>Interested in this courses? Send us an email to register.</h3>
      <div class="name">
        <div>
          <p>First name</p>
          <input type="text" placeholder="Bismark" />
        </div>
        <div>
          <p>Last name</p>
          <input type="text" placeholder="Agyen" />
        </div>
      </div>
      <div>
        <p>Your Email address</p>
        <input type="text" placeholder="eg: liz@gmail.com" />
      </div>
      <div>
        <p>Which Course do you want to study</p>
        <input type="text" placeholder="" /><i class="fa fa-chevron-down"></i>
      </div>
      <div>
        <p>Type your message</p>
        <input type="text" placeholder="" />
      </div>
      <div>
        <a href="#" class="btn">Submit</a>
      </div>
    </div>
    <div class="cards">
       <div class="arrow">
             <a href=""><i class="fa fa-chevron-left"></i></a>
       </div>
        <div class="card">
            <i class="fa fa-"></i>
          <img src="../assets/office.png" alt="Avatar" style="width: 100%" />
          <div class="container">
            <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn">See Profile</a>
        </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ladys.webp" alt="Avatar" style="width: 100%" />
          <div class="container">
          <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn">See Profile</a>
        </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/ursla.jpg" alt="Avatar" style="width: 100%" />
          <div class="container">
             <div class="card-body">
          <h4 class="card-title">John Doe</h4>
          <p class="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <a href="#" class="btn">See Profile</a>
        </div>
          </div>
        </div>
        <div class="arrow">
               <a href=""><i class="fa fa-chevron-right"></i></a>
        </div>
      
      </div>
  </div>
</template>

<style scoped>
.main-body {
  margin-left: 17%;
  margin-top: 10vh;
  overflow: hidden;
  padding: 20px;
}

img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  height: 500px;
}
.button {
  display: flex;
  margin: 20px;
}

button {
  border-radius: 20px;
  height: 40px;
  width: 120px;
  margin: 0 50px;
}

.active {
  background: #6f36bb;
  color: white;
}

button:hover {
  background-color: #6027aa;
  color: white;
  transition: 0.3s;
}

.container div {
  margin: 30px 0 10px 0;
}
.name {
  display: flex;
  justify-content: space-between;
}

input {
  border: 0;
  border-bottom: 1px solid;
  width: 40rem;
}

.btn {
  background-image: linear-gradient(to right, rgb(94, 104, 9), rgb(9, 73, 9));
  color: rgb(255, 255, 255);
  width: 100px;
}

.btn:hover {
  background-image: linear-gradient(to right, rgb(9, 73, 9), rgb(94, 104, 9));
}

.cards {
  display: flex;
  align-content: center;
  margin: 0 0 0 150px;
}
.card {
  width: 300px;
  height: 100%;
  overflow: hidden;
  margin: 20px;
  background-color: rgb(218, 211, 211);
}

.card img {
 
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
}

.arrow {
    font-size: 24px;
    margin: 130px 0 0 0;
}
</style>
