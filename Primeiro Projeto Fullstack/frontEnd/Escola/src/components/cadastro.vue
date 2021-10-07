<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 card-content">
        <div
          class="col-sm-3"
          style="border: 1px solid black; border-radius: 30px"
        >
          <label class="col-sm-6"> Cadastro de alunos:</label>

          <div class="col-sm-12 espacamento">
            <label for="nomeCad">
              Nome:
              <input
                class="col-sm-8"
                type="text"
                id="nomeCad"
                v-model="form.nome"
              />
            </label>
          </div>

          <div class="col-sm-12 espacamento">
            <label for="emailCad">
              Email:
              <input
                class="col-sm-8"
                type="text"
                id="emailCad"
                v-model="form.email"
              />
            </label>
          </div>

          <div class="col-sm-12 espacamento">
            <label for="telefoneCad">
              Telefone:
              <input
                class="col-sm-8"
                type="text"
                id="telefoneCad"
                v-model="form.telefone"
              />
            </label>
          </div>

          <div class="col-sm-12 espacamento">
            <label for="dataCad">
              Data:
              <input
                class="col-sm-8"
                type="date"
                id="dataCad"
                v-model="form.data"
              />
            </label>
          </div>

          <div class="col-sm-12 espacamento">
            <label for="statusCad">
              Status:
              <input
                class="col-sm-8"
                type="text"
                id="statusCad"
                v-model="form.status"
              />
            </label>
          </div>
          <button
            class="btn btn-primary col-sm-8"
            style="margin-top: 20px"
            @click="salvar()"
          >
            Salvar
          </button>
        </div>
      </div>
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

<style scoped>
.espacamento {
  margin-top: 5%;
}
</style>
