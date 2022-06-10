<template>
  <main>
    <h2>News</h2>
    <p class="sub-heading">
      Things to know when moving a website from a shopify to WordPress CMS
    </p>
    <img src="../assets/office.png" alt="Avatar" style="width: 100%" />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
      ducimus quos, repellat voluptates odio illo perspiciatis debitis error
      neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
      modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
      obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur vero
      quo iure sint qui cupiditate ut molestiae laudantium repudiandae debitis?
      Accusantium possimus, neque omnis facere perspiciatis molestiae ut aperiam
      nesciunt soluta quaerat dolor doloribus, quis consequuntur dicta expedita
      culpa, nostrum amet? Non aspernatur dolorem est earum accusamus! Eos
      adipisci ad iusto laborum laudantium, amet quo consequuntur vitae impedit
      quaerat autem doloremque!
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
      ducimus quos, repellat voluptates odio illo perspiciatis debitis error
      neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
      modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
      obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur vero
      quo iure sint qui cupiditate ut molestiae laudantium repudiandae debitis?
      Accusantium possimus, neque omnis facere perspiciatis molestiae ut aperiam
      nesciunt soluta quaerat dolor doloribus, quis consequuntur dicta expedita
      culpa, nostrum amet? Non aspernatur dolorem est earum accusamus! Eos
      adipisci ad iusto laborum laudantium, amet quo consequuntur vitae impedit
      quaerat autem doloremque!
    </p>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
      ducimus quos, repellat voluptates odio illo perspiciatis debitis error
      neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
      modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
      obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur vero
      quo iure sint qui cupiditate ut molestiae laudantium repudiandae debitis?
      Accusantium possimus, neque omnis facere perspiciatis molestiae ut aperiam
      nesciunt soluta quaerat dolor doloribus, quis consequuntur dicta expedita
      culpa, nostrum amet? Non aspernatur dolorem est earum accusamus! Eos
      adipisci ad iusto laborum laudantium, amet quo consequuntur vitae impedit
      quaerat autem doloremque!
    </p>
    <h2>Conclusion</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ad
      ducimus quos, repellat voluptates odio illo perspiciatis debitis error
      neque itaque, eligendi magnam dolorem cumque assumenda eveniet eius ea
      modi aliquid explicabo eum minus? Suscipit natus impedit tempore in
      obcaecati, magnam animi illo dignissimos nihil labore modi aspernatur vero
      quo iure sint qui cupiditate ut molestiae laudantium repudiandae debitis?
      Accusantium possimus, neque omnis facere perspiciatis molestiae ut aperiam
      nesciunt soluta quaerat dolor doloribus, quis consequuntur dicta expedita
      culpa, nostrum amet? Non aspernatur dolorem est earum accusamus! Eos
      adipisci ad iusto laborum laudantium, amet quo consequuntur vitae impedit
      quaerat autem doloremque!
    </p>

    <div class="container">
      <h3>Comments</h3>
      <h4>leave a reply</h4>

      <input class="message" type="text" placeholder="Your Reply" /><br />
      <div class="input">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi.</p>
      <button>Post Comment</button>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 8vh 10% 2% 20%;
}

img {
  height: 50vh;
  width: 50% !important;
  object-fit: cover;
  object-position: center;
  margin: 0 0 0 20%;
}

p {
  margin-top: 10px;
}
.sub-heading {
  font-style: italic;
  font-size: 20px;
}

.container {
  display: block;
}
.message {
  width: 35%;
  height: 60px;
  padding: 0 0 0 10px;
}

input::placeholder {
  font-style: italic;
}
input {
  margin-top: 20px;
}

input:nth-child(2) {
  margin: 0 30px !important;
}

button {
  background-image: linear-gradient(to right, rgb(9, 73, 9), rgb(94, 104, 9));
  color: white;
  border-radius: 5px;
}

button:hover {
  background-image: linear-gradient(to right, rgb(94, 104, 9), rgb(9, 73, 9));
}
</style>
