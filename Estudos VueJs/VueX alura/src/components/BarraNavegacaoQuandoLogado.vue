<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/gerentes" class="nav-link">
        Gerentes
      </router-link>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click.prevent="efetueLogout">Logout</a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    efetueLogout() {
      this.$store.commit('DESLOGAR_USUARIO');
      this.$router.push({ name: "login" });
    },
  },
};
</script>
