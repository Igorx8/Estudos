<template>
  <p class="centralizado">Count is: {{ atualiza }}</p>
</template>
<script>
export default {
    //componente para exibir o resultado, recebe dados através de props e atualiza de acordo com o pai
    
  name:'Result',
  props: {
    atualiza: {
    type: Number,
    required: false,
    default: 0
    }
  }
}
</script>