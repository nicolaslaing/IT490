/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import HelloWorld from '@/components/HelloWorld' // test component

Vue.use(Router)
const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]

const router = new Router({
	mode: 'history',
	routes
})

export default router
