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
import { ATUALIZA_PROJETO, ADICIONA_PROJETO } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';
// import { notificacaoMixin } from '@/mixins/notificar'
import useNotificador from '@/hooks/notificador'

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
        
        this.notificar('Novo projeto salvo', 'O projeto foi salvo com sucesso', TipoNotificacao.SUCESSO)
        this.$router.push('/projetos');
      }
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