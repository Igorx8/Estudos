import http from "@/http";
import IProjeto from "@/interfaces/IProjeto";
import { Estado } from "@/store";
import { ALTERAR_PROJETO, CADASTRAR_PROJETOS, OBTER_PROJETOS, REMOVER_PROJETO } from "@/store/tipo-acoes";
import { ADICIONA_PROJETO, DEFINIR_PROJETO, ATUALIZA_PROJETO, EXCLUIR_PROJETO } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoProjeto {
    projetos: IProjeto[],
}

//Module <Estado local, Estado global>
export const projeto: Module<EstadoProjeto, Estado> = {
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto: IProjeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            }

            state.projetos.push(projeto); ''
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

    },
    actions: {
        [OBTER_PROJETOS]({ commit }) {
            http
                .get("projetos")
                .then((resposta) => commit(DEFINIR_PROJETO, resposta.data));
        },

        [CADASTRAR_PROJETOS](contexto, nomeDoProjeto: string) {
            return http.post("projetos", { nome: nomeDoProjeto });
        },

        [ALTERAR_PROJETO]({ commit }, projeto: IProjeto) {
            return http.put(`projetos/${projeto.id}`, projeto)
                .then(() => commit(ATUALIZA_PROJETO, projeto));
        },

        [REMOVER_PROJETO]({ commit }, id: string) {
            return http
                .delete(`projetos/${id}`)
                .then(() => commit(EXCLUIR_PROJETO, id));
        },
    },
}