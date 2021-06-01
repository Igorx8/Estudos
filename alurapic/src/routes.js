import cadastro from './components/cadastro/cadastro.vue'
import Home from './components/home/Home.vue'

export const routes = [
    { path: '', component: Home, titulo: 'Home'}, //quando o path fica vazio ele identifica o localhost na porta
    { path: '/cadastro', component: cadastro, titulo: 'Cadastro'}
];