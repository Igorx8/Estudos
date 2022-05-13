import { INotificacao } from "@/interfaces/INotificacao";
import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ALTERAR_PROJETO, CADASTRAR_PROJETOS, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS, REMOVER_PROJETO } from "./tipo-acoes";
import { ADICIONAR_TAREFA, ADICIONA_PROJETO, ATUALIZA_PROJETO, DEFINIR_PROJETO, DEFINIR_TAREFAS, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import http from '@/http'
import ITarefa from "@/interfaces/ITarefa";

interface Estado {
  projetos: Array<IProjeto>,
  teste: Array<string>,
  notificacoes: Array<INotificacao>,
  tarefas: Array<ITarefa>
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    teste: [],
    notificacoes: [],
    tarefas: []
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      }

      state.projetos.push(projeto); ''
    },

    'ADICIONA_STRING_GLOBAL'(state, texto: string) {
      const txt = texto;
      state.teste.push(txt);
    },

    [DEFINIR_PROJETO](state, projetos: IProjeto[]) {
      state.projetos = projetos;
    },

    [ATUALIZA_PROJETO](state, projeto: IProjeto) {
      const indiceProj = state.projetos.findIndex(p => p.id === projeto.id);
      state.projetos[indiceProj] = projeto;
    },

    [EXCLUIR_PROJETO](state, id: string) {
      const indiceProj = state.projetos.findIndex(p => p.id === id);
      state.projetos.splice(indiceProj, 1);
    },


    [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas;
    },

    [ADICIONAR_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa);
    },

    [NOTIFICAR](state, novaNotificacao: INotificacao) {

      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes.pop()
      }, 2000);
    }
  },

  actions: {
    [OBTER_PROJETOS]({ commit }) {
      http.get('projetos')
        .then(resposta => commit(DEFINIR_PROJETO, resposta.data))
    },

    [CADASTRAR_PROJETOS](contexto, nomeDoProjeto: string) {
      return http.post('projetos', { nome: nomeDoProjeto })
    },

    [ALTERAR_PROJETO](contexto, projeto: IProjeto) {
      return http.put(`projetos/${projeto.id}`, projeto)
    },

    [REMOVER_PROJETO]({ commit }, id: string) {
      return http.delete(`projetos/${id}`)
        .then(() => commit(EXCLUIR_PROJETO, id));
    },

    [OBTER_TAREFAS]({ commit }) {
      http.get((`tarefas`))
        .then(response => commit(DEFINIR_TAREFAS, response.data))
    },

    [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http.post('tarefas', tarefa)
        .then(resposta => commit(ADICIONAR_TAREFA, resposta.data))
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}