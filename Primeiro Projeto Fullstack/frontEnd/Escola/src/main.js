import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
import http from './http/index.js'
import store from './store'
Vue.prototype.$http = http

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
