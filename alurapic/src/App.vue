<template>
  <div>
    <h1>{{ tit }}</h1>
    
    <ul>
      <li>
        <img :src="fotos.url" :alt="fotos.alt">
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
  export default{

    data() {

      return {
        tit: 'Olá, mundo!',
        fotos: [
          {
          url: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg',
          alt: 'paisagem'
        },
          {
          url: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg',
          alt: 'paisagem2'
          }
        ]
      }

    }
  }
</script>

<style>

</style>
