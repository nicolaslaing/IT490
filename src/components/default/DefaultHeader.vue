<template>
  <div>
    <div id="background">
      <img id="header" src="../../assets/MusicRepeater-Header.jpg">
      <div id="seperator"></div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'DefaultHeader',
  data () {
    return {

    }
  },
  created() {

  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #background {
    background-color: rgb(21, 21, 24);
  }
  #header {
    display: block;
    width: 60%;
    height: 250px;
    margin-left: auto;
    margin-right: auto;
  }
  #seperator {
    width: 100%; 
    height: 20px; 
    background-color: rgb(59, 48, 48);
  }
</style>
