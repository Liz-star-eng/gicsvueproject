<template>
  <div class="wrapper">
    <div class="main-box">
      <button @click="open = !open">toggle</button>
      <div @click="open = !open" class="box">
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sit!</p> -->
      </div>
      <div v-if="open" class="box grow"></div>
      <!-- <div class="box"></div>
      <div class="box"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.main-box {
  display: flex;
  width: 20rem;
  height: 20rem;
  border: 1px solid blue;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.box {
  border: 1px solid red;
  padding: 0 20px 0 20px;
  background: none;
  width: 5rem;
  height: 5rem;
}
.grow {
  flex-grow: 1;
}
p {
  margin: 0;
}

/* .box1 {
  height: 10px;
  width: 10px;
  border: 1px solid green;
} */
</style>
