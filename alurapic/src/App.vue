<template>
  <div class="corpo">
    <h1 class="centralizado">{{ tit }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="x in fotos">

        <meu-painel :titulo="x.titulo">
            <img :src="x.url" :alt="x.titulo" class="imagem-responsiva"/>
        </meu-painel>
      </li>
    </ul>
  </div>


  <!--
    PAREI NA AULA 4 DO MODULO 4
    <img v-bind:src="foto.url" v-bind:alt="foto.alt">
    <h2 v-text="tit"></h2>
    SÃO DUAS ALTERNATIVAS PARA FAZER REFERENCIA ATRAVES DE ATRIBUTOS
    -->
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {

  components: {
      'meu-painel': Painel
  },

  data() {
    
    return {
      tit: "Olá, mundo!",
      fotos: [],
    };
  },

  created(){
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
    .then(res => res.json()
    .then(fotos => this.fotos = fotos, err => alert(err)));
  }
};
</script>

<style>
    .corpo {
  font-family: Arial, Arial, Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
  }

    .centralizado {
      text-align: center;
  }

    .lista-fotos {
      list-style: none;
    }

    .lista-fotos .lista-fotos-item{
      display: inline-block;
    }

  .imagem-responsiva{
    width: 100;
  }
</style>
