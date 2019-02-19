import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
	{
		path: 'login/',
		name: 'Login',
		props: true,
	}
]

const router = new Router({
	mode: 'history',
	routes
})

// router.addRoutes()

router.beforeEach((to, from) => {

})

router.beforeEach((to, from) => {
	document.getElementById('app').scrollIntoView()
})

export default router