<template>
  <div>
    <div class="login">
    
    <form id="login-box" @submit.prevent="doForgotUsername">
      <h1>Music Repeater</h1>
      <input id="email" type="text" v-model.lazy="email" placeholder="Enter Email"><br>

      <button id="cancel" type="button" name="cancel" v-on:click.stop.prevent="cancel">Cancel</button>
      <button id="submit" type="submit" name="submit" v-on:click.stop.prevent="doForgotUsername">Submit</button><br><br>

      <div v-if="error != ''">{{error}}</div>
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
    }
  },
  created() {

  },
  methods: {
    doForgotUsername(){
      let self = this
      axios.post('http://localhost/forgotusername', this.email)
      .then(function(response){
        self.$router.push({
          name: 'Login',
          params: { emailSubmitted: true }
        })
      })
      .catch(function(error){
        console.log(error)
        self.error = "Email does not exist"
      })
    },
    cancel: function() {
      this.$router.push({
          name: 'Login',
          params: { emailSubmitted: false }
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
