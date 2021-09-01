<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente
        v-for="gerente in gerentes"
        :key="gerente.numero"
        :gerente="gerente"
      />
    </div>
  </div>
</template>

<script>
import Gerente from "@/components/Gerente.vue";

export default {
  components: {
    Gerente,
  },
  data() {
    return {
      gerentes: [],
    };
  },

  mounted() {
    this.$http
      .get("gerentes")
      .then((response) => (this.gerentes = response.data))
      .catch((erro) => console.log(erro));
  },

  /*
  //beforeRouteEnter(para onde vamos, de onde estamos vindo, qual o próximo passo), para usar esse tipo de abordagem, teriamos
  que declarar em todos os componentes do sistema, podemos fazer funcionar globalmente como está feito no documento provedor.js
  e index.js do router

  beforeRouteEnter(to, from, next){
    if(!this.$store.state.token){
      next( {name: 'login'})
    }
    next()
  }
  */
};
</script>

<style></style>
