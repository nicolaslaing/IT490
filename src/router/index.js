import Vue from 'vue'
import Router from 'vue-router'
import DefaultTemplate from '@/components/default/DefaultTemplate'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgotUsername from '@/components/ForgotUsername'
import ForgotPassword from '@/components/ForgotPassword'
import Dashboard from '@/components/Dashboard'
import HelloWorld from '@/components/HelloWorld' // test component

Vue.use(Router)
const routes = [
    {
      path: '/',
      name: 'Login',
      component: DefaultTemplate,
      props: {
        currentView: 'Login'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: DefaultTemplate,
      props: {
        currentView: 'Register'
      }
    },
    {
      path: '/forgotusername',
      name: 'ForgotUsername',
      component: DefaultTemplate,
      props: {
        currentView: 'ForgotUsername'
      }
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: DefaultTemplate,
      props: {
        currentView: 'ForgotPassword'
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DefaultTemplate,
      props: {
        currentView: 'Dashboard'
      }
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: DefaultTemplate,
      props: {
        currentView: 'HelloWorld'
      }
    },
  ]

const router = new Router({
	mode: 'history',
	routes
})

export default router