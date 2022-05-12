<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fa fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <!-- <button @click="adicionaTxt" class="btn btn-info">Adicionar string ao state</button> -->
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Nome
          </th>
          <th>
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td> {{ projeto.id }} </td>
          <td> {{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

  </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { EXCLUIR_PROJETO } from '@/store/tipo-mutacoes';
import { computed, defineComponent } from 'vue'
import { notificacaoMixin } from '@/mixins/notificar';
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
  name: 'ListaView',
  methods: {
    excluir(id: string) {
      this.store.commit(EXCLUIR_PROJETO, id);
      this.notifica('Excluido com sucesso', 'O projeto foi excluído', TipoNotificacao.FALHA);
    }
  },

  mixins: [notificacaoMixin],

  setup() {
    const store = useStore();

    return {
      projetos: computed(() => store.state.projetos),
      store
    }
  }
});
</script>