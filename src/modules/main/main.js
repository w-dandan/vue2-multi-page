import Vue from 'vue'
import App from './App.vue'
import router from '@/modules/main/router'
import '@/common/styles/tailwind.styl'
// import dayjs from 'dayjs'

Vue.config.productionTip = false

// console.log(dayjs().year())
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
