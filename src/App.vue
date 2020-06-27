<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.svg" >
    <Portfolio />
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: {
    Portfolio
  }
}
</script>

<style>
body {
  background-color: #272D2D;
  color: #F6F8FF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
