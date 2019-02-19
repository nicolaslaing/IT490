<template>
  <div class="login">
    <h1>Music Repeater</h1>
    <p>Congrats! You logged in</p>
    <button type="button" v-on:click.stop.prevent="sendLog">Send Audit Log</button><br><br>
    <router-link :to="{name: 'Login'}">Logout</router-link>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Dashboard',
  data () {
    return {
      
    }
  },
  created() {

  },
  methods: {
    sendLog() {
      // let self = this
      console.log("HELLO!")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
