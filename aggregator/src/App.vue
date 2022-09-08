<template>
  <div id="app">
    <router-view />
    <navbar />
  </div>
</template>

<script>

import Navbar from './components/NavBar';

export default {
  name: 'App',
  components: {
        navbar: Navbar,
  }
}
</script>

<style>
#app {
  background-color: rgb(177, 162, 162);
  width: 100vw;
  height: 100vh;
}
</style>
