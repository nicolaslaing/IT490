<template>
  <div class="login">
    
    <form id="login-box" @submit.prevent="doLogin">
      <h1>Music Repeater</h1>
      <hr>
      <h3>Login</h3>
      
      <input id="username" type="text" v-model.lazy="login.username" placeholder="Enter Username"><br>
      <input id="password" type="password" v-model.lazy="login.password" placeholder="Enter Password"><br><br>
      <router-link style="text-decoration: none; color: white;" :to="{name: 'Register'}">Register</router-link><br>
      <router-link style="text-decoration: none; color: white;" :to="{name: 'ForgotUsername'}">Forgot Username</router-link><br>
      <router-link style="text-decoration: none; color: white;" :to="{name: 'ForgotPassword'}">Forgot Password</router-link><br><br>
      <button id="submit" type="submit" name="submit" v-on:click.stop.prevent="doLogin">Login</button><br><br>

      <div class="good" v-if="$route.params.didRegister">Successfully registered</div>
      <div class="good" v-if="$route.params.displayUsername != null">
        Your username is: <span style="font-size: 24px;">{{$route.params.displayUsername}}</span>
      </div>
      <div class="good" v-if="$route.params.passwordReset">
        Your password has been reset
      </div>
      <div class="error" v-if="error != ''">{{error}}</div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
import { EventBus } from '@/plugins/event-bus.js'

export default {
  /* eslint-disable */
  name: 'Login',
  data () {
    return {
      login: {
        username: '',
        password: '',
      },
      error: '',
    }
  },
  created() {

  },
  methods: {
    doLogin: function() {
      let self = this
      this.error = ''
      
      this.$route.params.didRegister = false
      this.$route.params.displayUsername = null
      this.$route.params.passwordReset = false
      
      if(this.login.username == "" || this.login.password == ""){
        this.error = "Please enter a username and password"
        return
      }

      axios.post('http://localhost/login', this.login)
      .then(function(response){
        self.$cookies.set("User", response.data)
        self.$router.push({
          name: 'Dashboard'
        })
        EventBus.$emit("logged-in")
      })
      .catch(function(error){
        console.log(error)
        self.error = "Username or password was incorrect"
      })
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
  .error {
    color: red;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
  }
  .good {
    color: green;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
  }
  #login-box {
    position: fixed;
    margin-left: 34%;
    bottom: 15%;
    background-color: rgba(75,75,75,0.65);
    border-radius: 10%;
    border: 2px solid black;
    padding: 10px;
    width: 350px;
  }
</style>
