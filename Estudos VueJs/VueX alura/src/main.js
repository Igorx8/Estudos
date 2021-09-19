import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import http from '@/http'
import store from './store'

Vue.config.productionTip = false

//usa o $http do vue como o http configurado, daí não precisamos importar ele em todos os arquivos do sistema, apenas usar o this.$http
Vue.prototype.$http = http

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
