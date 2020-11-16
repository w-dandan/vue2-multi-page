import Vue from 'vue'
import App from './App.vue'
import router from '@/modules/main/router'
import '@/common/styles/tailwind.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
