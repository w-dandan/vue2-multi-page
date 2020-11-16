import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import(/*webpackChunkName: "pc-home"*/'@/modules/pc/views/home/Home')
    },
    {
      path: '/about',
      component: () => import(/*webpackChunkName: "pc-about"*/'@/modules/pc/views/about/About')
    },
  ]
})

export default router
