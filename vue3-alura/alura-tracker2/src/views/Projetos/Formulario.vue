<template>
  <section>
    <!-- <button @click="adicionaTxt" class="btn btn-info">Adicionar string ao state</button> -->
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">
          <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
        </label>
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import { TipoNotificacao } from '@/interfaces/INotificacao';
// import { notificacaoMixin } from '@/mixins/notificar'
import useNotificador from '@/hooks/notificador'
import { ALTERAR_PROJETO, CADASTRAR_PROJETOS } from '@/store/tipo-acoes';

export default defineComponent({
  name: 'FormularioView',

  props: {
    id: {
      type: String
    }
  },

  // mixins: [notificacaoMixin],

  mounted() {
    if (this.id) {
      const projeto = this.store.state.projeto.projetos.find(proj => proj.id === this.id);
      this.nomeDoProjeto = projeto?.nome || '';
    }
  },

  data() {
    return {
      nomeDoProjeto: '',
    }
  },

  methods: {
    salvar() {
      if (this.id) {
        this.store.dispatch(ALTERAR_PROJETO, { id: this.id, nome: this.nomeDoProjeto });
        this.notificaSucesso();
      }
      else {
        this.store.dispatch(CADASTRAR_PROJETOS, this.nomeDoProjeto)
          .then(() => {
            this.notificaSucesso()
          })

      }
    },

    notificaSucesso() {
      this.nomeDoProjeto = '';
      this.notificar('Novo projeto salvo', 'O projeto foi salvo com sucesso', TipoNotificacao.SUCESSO);
      this.$router.push('/projetos');
    },

    adicionaTxt() {
      this.store.commit('ADICIONA_STRING_GLOBAL', this.nomeDoProjeto);
      this.nomeDoProjeto = '';
    },
  },

  setup() {
    const store = useStore();

    const { notificar } = useNotificador();

    return {
      store,
      notificar
    }
  }
});
</script>