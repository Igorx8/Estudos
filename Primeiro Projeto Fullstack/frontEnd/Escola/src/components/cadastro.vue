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

      <label for="dataCad"> Data:</label>
      <input type="date" id="dataCad" v-model="form.data" />

      <label for="statusCad"> Status:</label>
      <input type="text" id="statusCad" v-model="form.status" />

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
        telefone: "",
        status: "",
        data: ""
      }
    };
  },

  methods: {
    salvar() {
      this.$http
        .post("/escola", this.form)
        .then(response => console.log(response))
        .catch(erro => console.log(erro));
    }
  }
};
</script>
