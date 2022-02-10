<template>
<div class="col-sm-10" style="border: 1px solid black; margin: auto" :key="chaveDaPagina">

<input class="form-search" type="text" style="float: right" placeholder="Digite para pesquisar"/>

  <table class="table table-striped table-bordered">

    <th v-for="chave in endpoints.rotaCampos" :key="chave"> {{ chave }}
      <tr v-for="dados in endpoints.dadosReq" :key="dados.id">
          <td width="15%">
            <a @click="edita(rotaAtual, item)"> </a>
            {{ dados[chave] }}
          </td>
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
            endpoints,
            chaveDaPagina: 0
        }
    },

    created() {
        this.carregaLista()
    },

    computed:{
        rotaAtual(){
            return this.$route.name
        }
    },

    methods:{
        carregaLista(){
            this.endpoints.carrega(this.rotaAtual).then(() => this.chaveDaPagina++)
        },

        editarItem(){
          this.endpoints.edita(this.rotaAtual).then(() => this.chaveDaPagina++)
        }
    }
}
</script>