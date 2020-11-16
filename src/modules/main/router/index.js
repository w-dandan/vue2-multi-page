import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import(/*webpackChunkName: "main-home"*/'@/modules/main/views/home/Home')
    },
    {
      path: '/about',
      component: () => import(/*webpackChunkName: "main-about"*/'@/modules/main/views/about/About')
    },
  ]
})

export default router
