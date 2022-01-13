<template>
  <div id="app">
    <menu-paginas :rotas="paginas"></menu-paginas>
   <router-view></router-view>
  </div>
</template>

<script>
import router  from './router/index.js'
import menu from './components/shared/menu.vue'

export default {
  name: "app",
  components: {
    'menu-paginas': menu
  },

  data(){
    
    return {
      paginas: router.options.routes.filter(item => item.menu)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
