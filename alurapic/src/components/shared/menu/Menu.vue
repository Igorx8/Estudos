<template>
    <nav>
      <ul>
        <li v-for="rota in rotas" :key="rota">
          <router-link :to="rota.path ? rota.path : '/'"> {{ rota.titulo }}</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>
export default{

    props: {       //é a mesma coisa que usar ['rotas'], porém caso dê algum erro, a mensagem será mais clara quanto ao erro
        rotas: {
            type: Array,
            required: true
        }
    }

}
</script>

<style>
</style>