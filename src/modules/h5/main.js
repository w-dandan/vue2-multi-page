import Vue from 'vue'
import App from './App.vue'
import router from '@/modules/h5/router'
import '@/common/styles/tailwind.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
