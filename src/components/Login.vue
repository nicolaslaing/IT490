<template>
  <div class="login">
    
    <div id="login-box">
      <h1>Music Repeater</h1>
      <input id="username" type="text" v-model.lazy="login.username" placeholder="Enter Username"><br>
      <input id="password" type="password" v-model.lazy="login.password" placeholder="Enter Password"><br>
      <button id="submit" type="button" name="submit" v-on:click.stop.prevent="doLogin">Login</button><br>
    </div>

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
  .login {
    height: 100vh;
    /*margin: auto;*/
    color: white;
    text-align: center;
  }
  #login-box {
    margin: auto;
    top: 150px;
    background-color: rgba(75,75,75,0.65);
    border-radius: 10%;
    border: 2px solid black;
    padding: 10px;
    width: 350px;
    position: relative;
  }
</style>
