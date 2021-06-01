<template>
  <div class="corpo">

    <meu-menu :rotas="routes" />

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
  <!--
    PAREI NA AULA 4 DO MODULO 4
    <img v-bind:src="foto.url" v-bind:alt="foto.alt">
    <h2 v-text="tit"></h2>
    SÃO DUAS ALTERNATIVAS PARA FAZER REFERENCIA ATRAVES DE ATRIBUTOS
    -->
</template>

<script>

import { routes } from './routes'
import Menu from './components/shared/menu/Menu.vue'
export default {

    components: {
      'meu-menu' : Menu
    },
    
    data(){

      return {

        routes
      }
    }
}
</script>

<style scope>
  .corpo {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }

  .pagina-enter, .pagina-leave-active {
  opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
  transition: opacity .4s;
  }

</style>
