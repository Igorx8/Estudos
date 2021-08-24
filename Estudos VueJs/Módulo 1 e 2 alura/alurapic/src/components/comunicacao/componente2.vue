<template>
    <div class="centralizado">
        <button @click="trocaNomeBotao"> Troca título </button>
        <button @click="soma"> Soma </button>
        <button @click="subtrai"> Subtrai </button>
        <button @click="reseta"> Reseta </button>
            <slot> </slot>
    </div>
</template>

<script>
//componente onde são criados os métodos para que o componente pai receba os dados através de $emit
export default {
    methods: {
        soma(){
            this.$emit('update', +1)
        },
        subtrai(){
            this.$emit('update', -1)
        },
        reseta(){
            this.$emit('reseta')
        },
        trocaNomeBotao(){
            this.$emit('troca', 'Novo nome')
        }
    }
    
}
</script>


<style scoped>

</style>
