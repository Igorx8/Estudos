import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Grafico from './components/graficos.vue'

export const routes = [
    { path: '', component: Home, titulo: 'Home'},
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' },
    { path: '/graficos', component: Grafico, titulo: 'Graficos'}
];