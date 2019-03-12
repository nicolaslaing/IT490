<template>
  <div class="login">
    
    <form id="login-box" @submit.prevent="doLogin">
      <h1>Music Repeater</h1>
      <input id="username" type="text" v-model.lazy="login.username" placeholder="Enter Username"><br>
      <input id="password" type="password" v-model.lazy="login.password" placeholder="Enter Password"><br><br>
      <router-link style="text-decoration: none; color: white;" :to="{name: 'Register'}">Register</router-link><br>
      <router-link style="text-decoration: none; color: white;" :to="{name: 'ForgotUsername'}">Forgot Username</router-link><br>
      <router-link style="text-decoration: none; color: white;" :to="{name: 'ForgotPassword'}">Forgot Password</router-link><br><br>
      <button id="submit" type="submit" name="submit" v-on:click.stop.prevent="doLogin">Login</button><br><br>

      <div v-if="$route.params.didRegister">Successfully registered</div>
      <div class=error v-if="error != ''">{{error}}</div>
    </form>

  </div>
</template>

<script>
import axios from 'axios'

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
      })
      .catch(function(error){
        console.log(error)
        self.error = "Username or password was incorrect"
      })
      // var q = 'tasks';
      // let options = {
      //   protocol: 'amqp',
      //   hostname: 'localhost',
      //   port: 5672,
      //   username: 'guest',
      //   password: 'guest',
      //   locale: 'en_US',
      //   frameMax: 0,
      //   heartbeat: 0,
      //   vhost: '/',
      // }
 
      // var open = require('amqplib').connect('amqp://localhost', options);
      // console.log(open)

      // // Publisher
      // open.then(function(conn) {
      //   console.log("test1", conn)
      //   return conn.createChannel();
      // }).then(function(ch) {
      //   console.log(ch)
      //   return ch.assertQueue(q).then(function(ok) {
      //     return ch.sendToQueue(q, Buffer.from('something to do'));
      //   });
      // }).catch(function(error){
      //   console.log(error)
      // });
       
      // // Consumer
      // open.then(function(conn) {
      //   console.log("test2", conn)
      //   return conn.createChannel();
      // }).then(function(ch) {
      //   console.log(ch)
      //   return ch.assertQueue(q).then(function(ok) {
      //     return ch.consume(q, function(msg) {
      //       if (msg !== null) {
      //         console.log(msg.content.toString());
      //         ch.ack(msg);
      //       }
      //     });
      //   });
      // }).catch(function(error){
      //   console.log(error)
      // });
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
