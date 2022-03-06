<template>
  <router-view/>
</template>

<script>

// import Home from "./components/Home";

import Signin from "./views/Signin";


export default {
  name: 'App',
  components: {Signin}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 30px;*/
}
</style>
