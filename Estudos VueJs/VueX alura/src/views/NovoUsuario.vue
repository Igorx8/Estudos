<template>
  <div class="container">
    <h1>Novo usuário</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label for="nome">Nome: </label>
        <input
          type="text"
          class="form-control"
          v-model="usuario.nome"
          id="nome"
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail: </label>
        <input
          type="email"
          class="form-control"
          v-model="usuario.email"
          id="email"
        />
      </div>
      <div class="form-group">
        <label for="senha">Senha: </label>
        <input
          type="password"
          class="form-control"
          v-model="usuario.senha"
          id="senha"
        />
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
      <router-link style="margin-left: 2%" :to="'/login'">
        Já possui uma conta? Faça login
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nome: "",
        senha: "",
        email: "",
      },
    };
  },

  methods: {
    enviarFormulario() {
      this.$http
      .post("http://localhost:8000/auth/register", this.usuario)
        .then(() => this.$router.push({ name: "login" }))
        .catch((erro) => console.log(erro));
    },
  },
};
</script>
