<template>
  <div id="app">
    <Navbar />
    <div id="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

/* RESET CSS */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: rgb(33, 33, 33);
  color: rgb(225, 225, 225);
  user-select: none;
}

#container {
  padding: 50px;
  margin-inline: 280px;
}

/* RESPONSIVE */

@media screen and (max-width: 1660px) {
  #container {
    margin-inline: 200px;
  }
}

@media screen and (max-width: 1300px) {
  #container {
    margin-inline: 100px;
  }
}

@media screen and (max-width: 900px) {
  #container {
    margin-inline: 0px;
    padding: 50px 20px;
  }
}
</style>
