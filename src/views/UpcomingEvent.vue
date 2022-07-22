<template>
  <div id="main-body" class="main-body">

    <div class="Events">
      <h3><strong>Upcoming Events</strong></h3>
      <hr />
      <div class="eventContent">
        <div><img src="../assets/Girls-in-ICT-Day.jpg" alt="" /></div>
        <div class="textContent">
          <h4>
            Splunk 101 Hands-on Workshop <br />
            -infosec Basics
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo voluptatibus aperiam optio est, ut maxime voluptate eaque
            suscipit possimus velit alias sit dolorum quasi cupiditate qui
            aliquam excepturi perspiciatis nisi. Sit est perspiciatis, labore
            earum impedit in consequatur excepturi non cupiditate blanditiis ut
            corrupti commodi distinctio. Fugit, suscipit ut!
          </p>
          <br />
          <div class="symbol">
            <p class="symbol-text">
              <i class="fa fa-clock-o"></i> text goes here
            </p>
            <a href=""
              ><button>Register <i class="fa fa-long-arrow-right"></i></button
            ></a>
          </div>
        </div>
      </div>
      <div class="eventContent">
        <div><img src="../assets/Girls-in-ICT-Day.jpg" alt="" /></div>
        <div>
          <h4>
            Splunk 101 Hands-on Workshop <br />
            -infosec Basics
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo voluptatibus aperiam optio est, ut maxime voluptate eaque
            suscipit possimus velit alias sit dolorum quasi cupiditate qui
            aliquam excepturi perspiciatis nisi. Sit est perspiciatis, labore
            earum impedit in consequatur excepturi non cupiditate blanditiis ut
            corrupti commodi distinctio. Fugit, suscipit ut!
          </p>
          <br />
          <div class="symbol">
            <p class="symbol-text">
              <i class="fa fa-clock-o"></i> text goes here
            </p>
            <a href=""
              ><button>Register <i class="fa fa-long-arrow-right"></i></button
            ></a>
          </div>
        </div>
      </div>
      <div class="eventContent">
        <div><img src="../assets/Girls-in-ICT-Day.jpg" alt="" /></div>
        <div>
          <h4>
            Splunk 101 Hands-on Workshop <br>
            -infosec Basics
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quo voluptatibus aperiam optio est, ut maxime voluptate eaque
            suscipit possimus velit alias sit dolorum quasi cupiditate qui
            aliquam excepturi perspiciatis nisi. Sit est perspiciatis, labore
            earum impedit in consequatur excepturi non cupiditate blanditiis ut
            corrupti commodi distinctio. Fugit, suscipit ut!
          </p>
          <br>
          <div class="symbol">
            <p class="symbol-text">
              <i class="fa fa-clock-o"></i> text goes here
            </p>
            <a href=""
              ><button>Register <i class="fa fa-long-arrow-right"></i></button
            ></a>
          </div>
        </div>
      </div>
    </div>

    <div class="Jumbotron upcoming">
      <div class="row">
        <div class="col-6" style="margin-left: 20px;">
          <h3>Empowering Women and Girls in ICT</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quos magni accusantium soluta vero neque debitis repudiandae
            deleniti, magnam doloribus dicta expedita tempore iusto, modi sequi
            perferendis, recusandae iste eligendi.
          </p>
        </div>
        <div class="col-6">
          <img src="images/photo_2022-05-05_09-27-14.jpg" alt="" style="" />
        </div>
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
  </div>
</template>

<style scoped>
.main-body {
  margin-left: 17%;
  margin-top: 10vh;
  overflow: hidden;
}

.Events {
  display: block;
  margin: 20px;
}

.eventContent {
  display: flex;
  border-radius: 5px;
  background-color: whitesmoke;
  /* margin: 20px; */
}

.eventContent .textContent{
  padding: 3rem;
}

.eventContent img {
  object-fit: cover;
  width: 500px;
  margin: 0 30px 0 0;
}

.eventContent img:hover {
  border-radius: 5px;
  filter: brightness(0.5);
  transition: 0.4s ease;
}

.symbol {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2.5rem;
}

.symbol-text {
  margin-right: 200px;
}

.symbol button {
  border-radius: 5px;
  color: orange;
  padding: 5px;
}

.symbol .fa {
  color: green;
}

.empower {
  height: 500px;
  background-color: #A2D5AC;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  margin: 10px 0 0 0;
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
  height: 400px;
  width: 500px;
  margin: 50px 0 0 0;
  border-top-left-radius: 50px;
  object-fit: cover;
}
@media only screen and (max-width: 1033px ){
  .main-body {
    margin-left: 0;
  }
}
@media only screen and (max-width: 1200px ) {
  .eventContent {
    flex-wrap: wrap;
  }
}
 
</style>
