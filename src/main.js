// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import HelloWorld from './components/HelloWorld'
import VueRouter from 'vue-router'
import Login from './pages/login'
import Main from './pages/main'
import Agreement from './pages/main/agreement'
import Message from './pages/main/message'
import Order from './pages/main/order'
import Person from './pages/main/person'
import Product from './pages/main/product'
import Visit from './pages/main/visit'
import AgreementDetail from './pages/main/agreementdetail'
import OrderDetail from './pages/main/orderdetail'
import ProductChange from './pages/main/productchange'
import ProductAdd from './pages/main/productadd'
import PersonAdd from './pages/main/personadd'
import PersonChange from './pages/main/personchange'
import MessageDetail from './pages/main/messagedetail'
import VisitDetail from './pages/main/visitdetail'
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.prototype.$urlPath = "http://115.159.78.32:8080/nmapi/nmweb/"
Vue.use(VueRouter)
let router = new VueRouter({
	mode: 'history',
	routes:[
		{
			path: '/',
			component: Login
		},
		{
			path:'/main',
			component:Main,
			redirect:'/main/agreement',
			children:[
				{
					path:"agreement",
					component:Agreement
				},
				{
					path:"agreementdetail",
					component:AgreementDetail
				},
				{
					path:"message",
					component:Message
				},
				{
					path:"order",
					component:Order
				},
				{
					path:"orderdetail",
					component:OrderDetail
				},
				{
					path:"person",
					component:Person
				},
				{
					path:"product",
					component:Product
				},
				{
					path:"productchange",
					component:ProductChange
				},
				{
					path:"productadd",
					component:ProductAdd
				},
				{
					path:"visit",
					component:Visit
				},
				{
					path:"personadd",
					component:PersonAdd
				},
				{
					path:"personchange",
					component:PersonChange
				},
				{
					path:"messagedetail",
					component:MessageDetail
				},
				{
					path:"visitdetail",
					component:VisitDetail
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<HelloWorld/>',
  components: { HelloWorld }
})
