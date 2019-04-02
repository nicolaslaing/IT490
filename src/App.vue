<template>
  <div id="app">
    <link rel="stylesheet" type="text/css" href="/static/css/custom.css">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: #1c6eb1;
  margin-top: -2%;
  padding: 3px;
}
</style>