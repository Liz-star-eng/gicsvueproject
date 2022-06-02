<template>
  <div id="main-body" class="main-body">
    <span class="right-sidebar" id="span" onclick="openNav()"
      ><i>show Right Sidebar </i></span
    >

    <div class="Moc-body">
      <h2>Minister/MoCD's Corner</h2>
      <hr />
      <div class="MoC-content">
        <img src="../assets/min.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam
          id in nihil deleniti! Eaque, doloribus. <br /><br />
          Inventore earum unde veritatis qui dicta reprehenderit, modi molestiae
          perspiciatis, id eveniet ducimus delectus, ratione aperiam architecto
          quaerat ex nesciunt expedita possimus cum libero! Perspiciatis
          delectus, harum sunt adipisci numquam sed suscipit, doloremque quis
          veniam sit ea reiciendis nulla maxime tenetur optio? Perferendis
          delectus odio ad ex facilis quaerat eos illum fugit, aspernatur
          veritatis porro adipisci similique dolorum iste nihil assumenda quam
          cumque obcaecati at consectetur et. <br /><br />
          Dolores nostrum exercitationem aut tempora a, odio voluptates!
          Consectetur nesciunt molestiae sequi exercitationem repudiandae quos
          odit, reprehenderit animi? Tempora tenetur nisi sunt, repellendus
          minima voluptates dolore eveniet maiores animi labore. Aliquid
          corrupti deserunt velit mollitia blanditiis illo, eligendi deleniti
          ipsum. Sit, fugit. <br /><br />
          Nulla cum natus consequuntur ipsum unde libero aperiam reiciendis
          sequi numquam omnis nemo itaque dicta veritatis deserunt, a voluptas
          maxime ea expedita vel reprehenderit magnam.
        </p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam id
        in nihil deleniti! Eaque, doloribus. <br /><br />
        Inventore earum unde veritatis qui dicta reprehenderit, modi molestiae
        perspiciatis, id eveniet ducimus delectus, ratione aperiam architecto
        quaerat ex nesciunt expedita possimus cum libero! Perspiciatis delectus,
        harum sunt adipisci numquam sed suscipit, doloremque quis veniam sit ea
        reiciendis nulla maxime tenetur optio? Perferendis delectus odio ad ex
        facilis quaerat eos illum fugit, aspernatur veritatis porro adipisci
        similique dolorum iste nihil assumenda quam cumque obcaecati at
        consectetur et. <br /><br />
        Dolores nostrum exercitationem aut tempora a, odio voluptates!
        Consectetur nesciunt molestiae sequi exercitationem repudiandae quos
        odit, reprehenderit animi? Tempora tenetur nisi sunt, repellendus minima
        voluptates dolore eveniet maiores animi labore. Aliquid corrupti
        deserunt velit mollitia blanditiis illo, eligendi deleniti ipsum. Sit,
        fugit. <br /><br />
        Nulla cum natus consequuntur ipsum unde libero aperiam reiciendis sequi
        numquam omnis nemo itaque dicta veritatis deserunt, a voluptas maxime ea
        expedita vel reprehenderit magnam.
      </p>
    </div>

    <div class="Jumbotron">
      <div class="row">
        <div class="col-6" style="margin-left: 20px">
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
.MoC-content {
  display: flex;
}
.MoC-content img {
  width: 70%;
  margin: 0 20px 30px 0;
  border-radius: 5px;
}

.Moc-body p {
  text-align: left;
}

.empower {
  height: 500px;
  background-color: #ff4878;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  margin: 100px 0 0 0;
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
</style>
