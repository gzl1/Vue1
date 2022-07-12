import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./Home"
import Audio from "./Audio"
import Broadcast from "./Broadcast"
import Group from "./Group"
import Mine from "./Mine"
import Detailes from "./details"

Vue.use(VueRouter)

const routes = [
  {path:"/",redirect:"home"},
  {path:'/not',component:()=>import("@/views/Not/index")},
  {path:"*",redirect:"/not"},
  Home, Audio, Broadcast, Group, Mine, Detailes
]

const router = new VueRouter({
  // mode:"history",
  routes
})

export default router
