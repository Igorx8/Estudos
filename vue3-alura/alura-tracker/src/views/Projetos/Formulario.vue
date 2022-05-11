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
import { ATUALIZA_PROJETO, ADICIONA_PROJETO, NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
  name: 'Formulario',

  props: {
    id: {
      type: String
    }
  },

  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id === this.id);
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
        this.store.commit(ATUALIZA_PROJETO, { id: this.id, nome: this.nomeDoProjeto });
        this.$router.push('/projetos');
      }
      else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
        this.nomeDoProjeto = '';
        this.store.commit(NOTIFICAR, {
          titulo: 'Novo projeto salvo',
          texto: 'O projeto foi salvo com sucesso',
          tipo: TipoNotificacao.SUCESSO
        });
        this.$router.push('/projetos');
      }
    },

    adicionaTxt() {
      this.store.commit('ADICIONA_STRING_GLOBAL', this.nomeDoProjeto);
      this.nomeDoProjeto = '';
    }
  },

  setup() {
    const store = useStore();

    return {
      store,
    }
  }
});
</script>