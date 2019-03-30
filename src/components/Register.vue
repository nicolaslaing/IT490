<template>
  <div class="login">
    
    <form id="login-box" @submit.prevent="doRegister">
      <h1>Music Repeater</h1>
      <input id="fName" type="text" v-model.lazy="register.fName" placeholder="Enter First Name"><br>
      <input id="lName" type="text" v-model.lazy="register.lName" placeholder="Enter Last Name"><br>
      <input id="email" type="text" v-model.lazy="register.email" placeholder="Enter Email"><br>
      <input id="username" type="text" v-model.lazy="register.username" placeholder="Enter Username"><br>
      <input id="password" type="password" v-model.lazy="register.password" placeholder="Enter Password"><br>
      <input id="passwordConfirm" type="password" v-model.lazy="passwordConfirm" placeholder="Confirm Password"><br><br>

      <button id="cancel" type="button" name="cancel" v-on:click.stop.prevent="cancel">Cancel</button>
      <button id="submit" type="submit" name="submit" v-on:click.stop.prevent="doRegister">Submit</button><br><br>

      <div class="error" v-if="error != ''">{{error}}</div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'Register',
  data () {
    return {
      register: {
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: '',
      },
      passwordConfirm: '',
      error: '',
    }
  },
  created() {

  },
  methods: {
    doRegister: function() {
      let self = this
      this.error = ''
      // Validate the user input something in each field
      for(let item in this.register){
        if(this.register[item] == ""){
          this.error = 'Please insert data into each field'
          return
        }
      }

      // Validate the passwords match
      if(this.register.password != this.passwordConfirm){
        this.error = 'Passwords do not match'
        this.register.password = ''
        this.passwordConfirm = ''
        return
      }

      axios.post('http://localhost/register', this.register)
      .then(function(response){
        console.log(response)
        self.$router.push({
          name: 'Login',
          params: { didRegister: true }
        })
      })
      .catch(function(error){
        console.log(error.response)
        self.error = error.response.data.error
      })
    },
    cancel: function() {
      this.$router.push({
          name: 'Login',
          params: { didRegister: false }
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
    margin-left: 34%;
    bottom: 15%;
    background-color: rgba(75,75,75,0.65);
    border-radius: 10%;
    border: 2px solid black;
    padding: 10px;
    width: 350px;
  }
</style>
