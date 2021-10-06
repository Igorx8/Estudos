<template>
  <div class="row" style="border: 1px solid black">
    <div class="col-sm-12"><label> Cadastro de alunos:</label></div>
    <div class="col-sm-1">
      <label for="nomeCad"> Nome:</label>
      <input type="text" id="nomeCad" v-model="form.nome" />
      <label for="emailCad"> Email:</label>
      <input type="text" id="emailCad" v-model="form.email" />
      <label for="telefoneCad"> Telefone:</label>
      <input type="text" id="telefoneCad" v-model="form.telefone" />
      <button @click="salvar()">Salvar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nome: "",
        email: "",
        telefone: ""
      }
    };
  },

  methods: {
    salvar() {
      this.$http
      .post("/escola")
      .then((response) => (this.form = response))
      .catch((erro) => console.log(erro));
    }
  }
};
</script>
