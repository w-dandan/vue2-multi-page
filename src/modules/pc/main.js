import Vue from 'vue'
import App from './App.vue'
import router from '@/modules/pc/router'
import '@/common/styles/tailwind.styl'
// import $ from 'jquery'
//
// console.log($)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
