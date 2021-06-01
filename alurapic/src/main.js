import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,  // Quando o valor do atributo for o mesmo que o nome do atributo, pode deixar um nome só
  render: h => h(App)
})
