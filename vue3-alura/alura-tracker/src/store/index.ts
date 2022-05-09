import IProjeto from "@/interfaces/IProjeto";

interface Estado {
  projetos: Array<IProjeto>
}

export const store = createStore<Estado>({
  state: {
    projetos: 
  }
})