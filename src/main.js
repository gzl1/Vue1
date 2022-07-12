import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "font-awesome/css/font-awesome.min.css"
import Router from 'vue-router'

import axios from 'axios'
Vue.prototype.$http = axios; 

import $ from "jquery"
import 'bootstrap'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

Vue.prototype.$ = $;

import {Lazyload,InfiniteScroll,Loadmore} from "mint-ui";
Vue.use(Lazyload)
Vue.use(InfiniteScroll)
Vue.use(Loadmore.name,Loadmore)

import "../src/stylesheets/main.scss"
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"

Vue.config.productionTip = false

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


  
