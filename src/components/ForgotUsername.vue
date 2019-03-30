<template>
  <div>
    <div class="login">
    
    <form id="login-box" @submit.prevent="doForgotUsername">
      <h1>Music Repeater</h1>
      <hr>
      <h3>Forgot Username</h3>

      <p style="text-align: left; margin-left: 20px;">
        Please enter your email address to retrieve your username.
        You will be returned to the login screen, and your username will be displayed.
      </p>

      <br>

      <input id="email" type="text" v-model.lazy="email" placeholder="Enter Email">
      
      <br><br>

      <button id="cancel" type="button" name="cancel" v-on:click.stop.prevent="cancel">Cancel</button>
      <button id="submit" type="submit" name="submit" v-on:click.stop.prevent="doForgotUsername">Submit</button><br><br>

      <div class="error" v-if="error != ''">{{error}}</div>
    </form>

  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'ForgotUsername',
  data () {
    return {
      email: '',
      error: '',
    }
  },
  created() {

  },
  methods: {
    doForgotUsername(){
      let self = this
      axios.post('http://localhost/forgotusername', { "email": this.email })
      .then(function(response){
        self.$router.push({
          name: 'Login',
          params: { displayUsername: response.data.username }
        })
      })
      .catch(function(error){
        self.error = error.response.data
      })
    },
    cancel: function() {
      this.$router.push({
          name: 'Login',
          params: { displayUsername: null }
      })
    }
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
  .error {
    color: red;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
  }
  #login-box {
    position: fixed;
    margin-left: 30%;
    margin-right: 25%;
    bottom: 15%;
    background-color: rgba(75,75,75,0.65);
    border-radius: 10%;
    border: 2px solid black;
    padding: 10px;
    width: 350px;
  }
</style>
