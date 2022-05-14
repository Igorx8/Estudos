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
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { TipoNotificacao } from '@/interfaces/INotificacao';
// import { notificacaoMixin } from '@/mixins/notificar'
import useNotificador from '@/hooks/notificador'
import { ALTERAR_PROJETO, CADASTRAR_PROJETOS } from '@/store/tipo-acoes';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'FormularioView',

  props: {
    id: {
      type: String
    }
  },

  //OPTIONS API

  // mixins: [notificacaoMixin],

  // mounted() {
  //   if (this.id) {
  //     const projeto = this.store.state.projeto.projetos.find(proj => proj.id === this.id);
  //     this.nomeDoProjeto = projeto?.nome || '';
  //   }
  // },

  // data() {
  //   return {
  //     nomeDoProjeto: '',
  //   }
  // },

  // methods: {
  // salvar() {
  //   if (this.id) {
  //     this.store.dispatch(ALTERAR_PROJETO, { id: this.id, nome: this.nomeDoProjeto });
  //     this.notificaSucesso();
  //   }
  //   else {
  //     this.store.dispatch(CADASTRAR_PROJETOS, this.nomeDoProjeto)
  //       .then(() => {
  //         this.notificaSucesso()
  //       })

  //   }
  // },

  // notificaSucesso() {
  //   this.nomeDoProjeto = '';
  //   this.notificar('Novo projeto salvo', 'O projeto foi salvo com sucesso', TipoNotificacao.SUCESSO);
  //   this.$router.push('/projetos');
  // },
  // },

  //COMPOSITION API
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const { notificar } = useNotificador();
    const nomeDoProjeto = ref('');

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(proj => proj.id === props.id);
      nomeDoProjeto.value = projeto?.nome || '';

    }

    const notificaSucesso = () => {
      nomeDoProjeto.value = '';
      notificar('Novo projeto salvo', 'O projeto foi salvo com sucesso', TipoNotificacao.SUCESSO);
      router.push('/projetos');
    }

    const salvar = () => {
      if (props.id) {
        store.dispatch(ALTERAR_PROJETO, { id: props.id, nome: nomeDoProjeto.value });
        notificaSucesso();
      }
      else {
        store.dispatch(CADASTRAR_PROJETOS, nomeDoProjeto.value)
          .then(() => {
            notificaSucesso()
          })

      }
    }

    return {
      nomeDoProjeto,
      salvar
    }
  }
});
</script>