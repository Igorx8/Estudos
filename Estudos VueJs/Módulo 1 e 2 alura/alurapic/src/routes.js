//import Cadastro from './components/cadastro/Cadastro.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue') 
//forma de escrita que permite um componente ser declarado duas vezes(útil para named routes)

import Home from './components/home/Home.vue';
import componente1 from './components/comunicacao/componente1.vue'

export const routes = [
    { path: '', name:'home', component: Home, titulo: 'Home', menu: true},
    { path: '/cadastro/', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
    { path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false},
    { path: '/comunicacao1/', name: 'comp1', component: componente1, titulo: 'componente1', menu: true},
    { path: '*', component: Home , menu: false}
];