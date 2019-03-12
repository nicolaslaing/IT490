<template>
  <div>
  <div class="container body">
    <div class="main_container">

      <!-- top navigation -->
      <DefaultHeader></DefaultHeader>

      <!-- page content -->
      <div role="main">
        <div class="jumbotron">
          <!-- <h1 class="display-5">Welcome to Music Repeater!</h1> -->

          <p class="lead">
            <component v-bind:is="currentView"></component>
          </p>
        </div>
      </div>

      <!-- footer content -->
      <DefaultFooter></DefaultFooter>

    </div>
  </div>

</div>
</template>

<script>
import DefaultHeader from './DefaultHeader'
import DefaultFooter from './DefaultFooter'
import Login from '@/components/Login'
import ForgotUsername from '@/components/ForgotUsername'
import ForgotPassword from '@/components/ForgotPassword'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'

import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'DefaultTemplate',
  props: ['currentView'],
  components :{
    'DefaultHeader' :DefaultHeader,
    'DefaultFooter' :DefaultFooter,
    'Login': Login,
    'ForgotUsername': ForgotUsername,
    'ForgotPassword': ForgotPassword,
    'Register': Register,
    'Dashboard': Dashboard,
  },
  data () {
    return {

    }
  },
  created() {

  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 100%;
    padding: 0;
    margin-right: auto;
    margin-left: auto;
  }
  .container .panel {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
