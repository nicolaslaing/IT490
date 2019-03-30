<template>
  <div>
    <div class="login">
    
    <form v-if="step == 1" id="login-box" @submit.prevent="doForgotPassword">
      <h1>Music Repeater</h1>
      <hr>
      <h3>Forgot Password</h3>

      <p style="text-align: left; margin-left: 20px;">
        Please enter your username to reset your password.
        You will be prompted to insert a new password if the username exists.
      </p>

      <br>
      
      <input id="username" type="text" v-model.lazy="username" placeholder="Enter Username">
      
      <br><br>

      <button id="cancel" type="button" name="cancel" v-on:click.stop.prevent="cancel">Cancel</button>
      <button id="submit" type="submit" name="submit" v-on:click.stop.prevent="doForgotPassword">Submit</button><br><br>

      <div v-if="error != ''">{{error}}</div>
    </form>
    <form v-if="step == 2" id="login-box" @submit.prevent="resetPassword">
      <h1>Music Repeater</h1>
      <hr>
      <h3>Reset Password</h3>

      <p style="text-align: left; margin-left: 20px;">
        Please enter a new password.
        You must enter it twice to confirm.
      </p>

      <br>
      
      <input class="password" type="password" v-model.lazy="password" placeholder="Enter Password"><br>
      <input class="password" type="password" v-model.lazy="passwordConfirm" placeholder="Confirm Password">
      
      <br><br>

      <button id="cancel" type="button" name="cancel" v-on:click.stop.prevent="cancel">Cancel</button>
      <button id="submit" type="submit" name="submit" v-on:click.stop.prevent="resetPassword">Submit</button><br><br>

      <div v-if="error != ''">{{error}}</div>
    </form>

  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'ForgotPassword',
  data () {
    return {
      error: '',
      username: '',
      password: '',
      passwordConfirm: '',
      step: 1,
      user: {},
    }
  },
  created() {

  },
  methods: {
    doForgotPassword(){
      this.error = ''
      let self = this
      axios.post('http://localhost/forgotpassword', { "username": this.username })
      .then(function(response){
        self.user = response.data
        self.step = 2
      })
      .catch(function(error){
        console.log(error)
        self.error = "Username does not exist"
      })
    },
    resetPassword(){
      this.error = ''
      if(this.password != this.passwordConfirm){
        this.error = "Passwords do not match"
        return
      }

      let self = this
      axios.post('http://localhost/resetpassword', { "id": this.user.id, "username": this.user.username, "password": this.password })
      .then(function(response){
        self.$router.push({
          name: 'Login',
          params: { passwordReset: true }
        })
      })
      .catch(function(error){
        console.log(error)
        self.error = "Error resetting password"
      })
    },
    cancel: function() {
      this.error = ''
      this.$router.push({
          name: 'Login',
          params: { passwordReset: false }
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
