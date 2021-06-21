<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form>
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" @input="foto.titulo = $event.target.value">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" @input="foto.url = $event.target.value">
        <imagem-responsiva/>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" @input="foto.descricao = $event.target.value"></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {

    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data() {

      return {

          foto: {
              titulo: '',
              url: '',
              descricao: ''
          }
      }
  },

  methods: {

      grava() {
          console.log(this.foto) // modulo 2.2
      }
  }
}

</script>

<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>