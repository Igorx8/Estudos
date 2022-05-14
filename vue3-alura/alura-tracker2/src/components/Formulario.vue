<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao" />
      </div>
      <div class="column is-5">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione um projeto</option>
            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import Temporizador from './Temporizador.vue'

import { key } from '@/store'
import { OBTER_PROJETOS } from "@/store/tipo-acoes";

export default defineComponent({
  name: "FormulárioView",
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador
  },

  setup(props, { emit }) { // props, SetupContext
    const store = useStore(key);

    const descricao = ref('');
    const idProjeto = ref('');

    const projetos = computed(() => store.state.projeto.projetos);

    const finalizarTarefa = (tempoDecorrido: number): void => {
      emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetos.value.find(proj => proj.id === idProjeto.value)
      })
      descricao.value = ''
    }

    store.dispatch(OBTER_PROJETOS);

    return {
      descricao,
      idProjeto,
      projetos,
      finalizarTarefa
    }
  }
});
</script>
<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>