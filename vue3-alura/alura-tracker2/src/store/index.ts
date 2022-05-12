import { INotificacao } from "@/interfaces/INotificacao";
import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ATUALIZA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";

interface Estado {
  projetos: Array<IProjeto>,
  teste: Array<string>,
  notificacoes: Array<INotificacao>
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    teste: [],
    notificacoes: []
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      }

      state.projetos.push(projeto);
    },

    'ADICIONA_STRING_GLOBAL'(state, texto: string) {
      const txt = texto;
      state.teste.push(txt);
    },

    [ATUALIZA_PROJETO](state, projeto: IProjeto) {
      const indiceProj = state.projetos.findIndex(p => p.id === projeto.id);
      state.projetos[indiceProj] = projeto;
    },

    [EXCLUIR_PROJETO](state, id: string) {
      const indiceProj = state.projetos.findIndex(p => p.id === id);
      state.projetos.splice(indiceProj, 1);
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {

      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes.pop()
      }, 2000);
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}