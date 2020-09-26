import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  
  // {
  //   path: '/login',
  //   component: (resolve) => require(['@/views/Login/Login'], resolve),
  // }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
