<template>
<div class="box has-text-weight-bold">
    <div class="columns">
        <div class="column is-7">
            {{ tarefa.descricao }}
        </div>
        <div class="column">
            <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos"/>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
//PropType serve para importar tipos criados
import Cronometro from "./components/Cronometro.vue";
import ITarefa from './components/interfaces/ITarefa'

export default defineComponent({
    name: 'TarefaIndividual',
    components: { Cronometro },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>