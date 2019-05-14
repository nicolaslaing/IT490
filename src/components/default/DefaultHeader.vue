<template>
  <div>
    <div id="background">
      <img id="header" src="../../assets/MusicRepeater-Header.jpg">
      <div id="seperator">
        <div v-if="loggedIn">
          <router-link tag="button" :to="{name: 'Login'}" v-on:click.native="logout" style="float: right;">Logout</router-link>
          <Search></Search>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import Search from '../Search'
import { EventBus } from '@/plugins/event-bus.js'

export default {
  /* eslint-disable */
  name: 'DefaultHeader',
  components: {
    "Search": Search,
  },
  data () {
    return {
      loggedIn: false,
    }
  },
  created() {
    let self = this
    if(this.$cookies.get("User") != undefined){
      this.loggedIn = true
    }
    EventBus.$on('logged-in', () => {
      self.loggedIn = true
    })
  },
  beforeDestroy(){
    EventBus.$off('logged-in', () => {
      self.loggedIn = true
    })
  },
  methods: {
    logout(){
      this.$cookies.remove("User")
      this.loggedIn = false
    },
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
    height: 70px; 
    background-color: rgb(59, 48, 48);
  }
</style>
