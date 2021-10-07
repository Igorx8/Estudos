<template>
<div class="col-sm-10" style="border: 1px solid black; margin: auto">
<p> {{ "A rota atual é " + rotaAtual}} </p>
<table class="table table-striped table-bordered"> 
    <th v-for="chave in rotaNomes" :key="chave"> {{ chave }}
    <tr v-for="dados in endpoints.dadosReq" :key="dados.id">
        <td> {{ dados[chave] }} </td>
    </tr>
    </th>
    
</table>
</div>
</template>

<script>
import Endpoints from './endpoints'
export default {
    name: 'ListagemPadrao',

    data(){
        const endpoints = new Endpoints()
        return{
            endpoints
        }
    },

    created() {
        this.carregaLista()
    },

    computed:{
        rotaAtual(){
            return this.$route.name
        },

        rotaNomes(){
            let nomes = Object.keys(this.endpoints.dadosReq[0])
            return nomes
        }
    },

    methods:{
        carregaLista(){
            this.endpoints.carrega(this.rotaAtual)
        }
    }
}
</script>