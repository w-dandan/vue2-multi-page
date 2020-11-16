import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import(/*webpackChunkName: "home"*/'@/modules/pc/views/home/Home')
    }
  ]
})

export default router
