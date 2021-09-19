<template>
    <div>
        <h1 class="centralizado"> {{ novoTitulo }} </h1>
        <compo @update="atualiza +=$event" @reseta="limpa" @troca="novoTitulo = $event"> </compo>
        <compon :atualiza="atualiza"></compon>
    </div>
</template>

<script>
import compo from './componente2.vue'
import compon from './componente3.vue'

export default {
    //componente que renderiza, recebe e transmite informações 
    components: { 
        compo,
        compon 
    },

        data() {

            return {
                novoTitulo: 'Olá, eu troco de nome',
                atualiza: 0
            }
        },

        methods: {
            limpa(){
                this.novoTitulo = 'Olá, eu troco de nome'
                this.atualiza = 0
            }
        }
    
}
</script>


<style scoped>

</style>
