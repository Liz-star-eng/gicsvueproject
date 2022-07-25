<template>
    
    <div class="footer">
          <div class="row5">
            <div class="col-4">
              <h4>Quick Links</h4>
              <a href="">About Us</a><br>
              <a href="">Entreprenures' Forum</a><br>
              <a href="">Market Place</a><br>
              <a href="">Resources</a><br>
            </div>
            <div class="col-4">
              <h4>Contact Us</h4>
              <p>+233 00 00 00 00 </p>
              <p>030 00 00 00 00</p>
              <p>+233 00 00 00 00</p>
            </div>
            <div class="col-4">
              <h4>Social Media</h4>
              <li>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a> 
                <a href=""><i class="fa fa-linkedin"></i></a>
              </li>
            </div>
          </div>
          <div class="copyright"><p><i> Copyright @GrlsinCyberSecurityGH | powered by AITI-KACE</i></p></div>
    </div> 
</template>

<style scoped>
.footer {
  background-color: #377d71;
  padding: 3rem 1rem;
  width: 85%;
  margin-left: 15%;
  overflow: hidden;
  z-index: 99;
}

.row5 {
  display: flex;
  flex-wrap: wrap;
  color: white;
  justify-content: space-around;
}


p {
  text-align: center;
  margin-left: 0;
}

 li {
  list-style-type: none;
}

 a {
  color: white;
  margin: 5px;
}

 a:hover {
  color: rgb(6, 90, 117);
  cursor: pointer;
}

 li i {
  color: white;
}

 a i:hover {
  background-color: white;
  color: black;
}

 p {
  color: rgb(224, 217, 217);
  text-align: center;
  font-size: 14px;
}

 p:hover {
  transition: 0.3;
  cursor: pointer;
}

.copyright {
  padding: 5rem 0;
}

@media only screen and (max-width: 1033px ) {
  .footer {
    width: 100%;
    margin-left: 0;
  }
}

@media only screen and (max-width: 600) {
  .row5 {
    flex-wrap: wrap;
  }
  .row5 div {
    width: 100%;
  }
}

</style>