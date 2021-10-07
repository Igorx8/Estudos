import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import cadastro from '../components/cadastro.vue'
import lista from '../components/shared/lista.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        titulo: 'Home',
        menu: true,
        meta: {
            publica: true
        }
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: cadastro,
        titulo: 'Cadastro',
        menu: true,
        meta: {
            publica: true
        }
    },
    {
        path: '/lista',
        name: 'lista',
        component: lista,
        titulo: 'Lista',
        menu: true,
        meta: {
            publica: true
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router