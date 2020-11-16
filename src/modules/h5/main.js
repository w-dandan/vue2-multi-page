import Vue from 'vue'
import App from './App.vue'
import router from '@/modules/h5/router'
import '@/common/styles/tailwind.styl'
// import _ from 'lodash'

Vue.config.productionTip = false

// console.log(_.join([1, 2, 3], '_'))
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
