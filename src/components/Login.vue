<template>
  <div class="login">
    <h1>Music Repeater</h1>
    <input id="username" type="text" v-model.lazy="login.username" placeholder="Enter Username"><br>
    <input id="password" type="password" v-model.lazy="login.password" placeholder="Enter Password"><br>
    <button id="submit" type="button" name="submit" v-on:click.stop.prevent="doLogin">Login</button>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Login',
  data () {
    return {
      login: {
        username: '',
        password: '',
      }
    }
  },
  created() {

  },
  methods: {
    doLogin: function() {
      let self = this
      self.$router.push({
        name: 'Dashboard'
      })
      // this.axios.post('', this.login)
      // .then(function(response){
      //   self.$router.push({
      //     name: 'Dashboard'
      //   })
      // })
      // .catch(function(error){
      //   console.log(error)
      // })
    },
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
