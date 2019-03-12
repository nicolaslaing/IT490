<template>
  <div class="dashboard">
    <h1>Music Repeater</h1>
    <p>Congrats! You logged in</p>
    <button type="button" v-on:click.stop.prevent="sendLog">Send Audit Log</button><br><br>
    <router-link :to="{name: 'Login'}">Logout</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'Dashboard',
  data () {
    return {
      user: '',
    }
  },
  created() {
    this.getData()
    this.user = this.$cookies.get("User")
  },
  methods: {
    sendLog() {
      let self = this
      let logData = {
        'userid': this.user.id
      }
      axios.post('http://localhost/log', logData)
      .then(function(response){
        console.log(response)
        
      })
      .catch(function(error){
        console.log(error)
      })
    },
    getData() {
      axios.get('http://localhost/api')
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dashboard {
    height: 100vh;
    /*color: white;*/
    text-align: center;
  }
</style>
