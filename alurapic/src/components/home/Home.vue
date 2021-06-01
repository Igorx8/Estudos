<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do título" />
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="x of fotosComFiltro" :key="x">


        <meu-painel :titulo="x.titulo">
          <imagem-responsiva :url="x.url" :titulo="x.titulo"></imagem-responsiva>
          <meu-botao tipo="button" rotulo="REMOVER" v-on:click.native="remove(x)"/>
        </meu-painel> <!-- click.native permite que o componente use a funcao nao configurada em seu props-->


      </li>
    </ul>

  </div>
  <!--
    PAREI NA AULA 4 DO MODULO 7
    <img v-bind:src="foto.url" v-bind:alt="foto.alt">
    <h2 v-text="tit"></h2>
    SÃO DUAS ALTERNATIVAS PARA FAZER REFERENCIA ATRAVES DE ATRIBUTOS
    -->
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import imagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue'

export default {

  components: {
      'meu-painel': Painel,
      'imagem-responsiva': imagemResponsiva,
      'meu-botao' : Botao
  },

  data() {
    
    return {
      titulo: 'Olá, mundo!',
      fotos: [],
      filtro: ''
    };
  },

  computed: {
      fotosComFiltro(){
        if(this.filtro){
          // Filtrar
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
        }
        else{
          return this.fotos;
        }
      }
  },

  methods: {

    remove(x) {
      if(confirm('Deseja remover a foto ?')){
      alert(`A foto ${x.titulo} foi removida`)
      }
    }
  },

  created(){
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json()
    .then(fotos => this.fotos = fotos, err => alert(err)));
  }
};
</script>

<style scope>

  .centralizado {

    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {

    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }
</style>
