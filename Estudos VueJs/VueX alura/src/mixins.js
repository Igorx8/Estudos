export const logoutMixin = {
    methods: {
        efetueLogout() {
          this.$store.commit('DESLOGAR_USUARIO');
          this.$router.push({ name: "login" });
        }
    }
}