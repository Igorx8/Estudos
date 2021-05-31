<template>
  <div class="corpo">
    <h1 class="centralizado">{{ tit }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="x in fotos">

        <div class="painel">
        <h2 class="painel-titulo">{{ x.titulo}}</h2>
          <div class="painel-conteudo">         
            <img :src="x.url" :alt="x.titulo" class="imagem-responsiva"/>
          </div>
        </div>

      </li>
    </ul>
  </div>


  <!--
    <img v-bind:src="foto.url" v-bind:alt="foto.alt">
    <h2 v-text="tit"></h2>
    SÃO DUAS ALTERNATIVAS PARA FAZER REFERENCIA ATRAVES DE ATRIBUTOS
    -->
</template>

<script>
export default {
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

    
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>
