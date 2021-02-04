import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Login from "@/views/auth/login.vue";
import CreateAccount from "@/views/auth/createAccount.vue";



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/createAccount',
    name: 'CreateAccount',
    component: CreateAccount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
