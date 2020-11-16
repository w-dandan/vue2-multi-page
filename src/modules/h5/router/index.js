import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import(/*webpackChunkName: "h5-home"*/'@/modules/h5/views/home/Home')
    },
    {
      path: '/about',
      component: () => import(/*webpackChunkName: "h5-about"*/'@/modules/h5/views/about/About')
    },
  ]
})

export default router
