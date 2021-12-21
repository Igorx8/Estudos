import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    meta: {
      publica: true
    }
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastro',
    name: 'cadastro.usuario',
    component: () => import( /* webpackChunkName: "registrar" */ '../views/NovoUsuario.vue'), //lazy loading
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
})

//configuração de rotas, conferindo se existe token e se é pública

router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.publica && !store.state.token){
    return next({ path: '/login'})
  }
  next()
})
export default router
