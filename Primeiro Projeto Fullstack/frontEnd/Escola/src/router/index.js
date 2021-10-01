import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import cadastro from '../components/cadastro.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'home',
        component: home,
        meta: {
            publica: true
        }
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: cadastro,
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