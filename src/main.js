import Vue from 'vue'
import App from './App'

new Vue({
	el: '#app', // name of element for application to insert html into
	// components: {
	// 	App
	// },
	// template: '<App/>'
	render (h) {
    	return h('app', 'Test')
  	}
})