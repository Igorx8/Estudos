<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Cronometro from './Cronometro.vue'

export default defineComponent({
  name: "Temporizador",
  components: {
    Cronometro
  },
  setup(props, { emit }) {
    const tempoEmSegundos = ref(0);
    const cronometro = ref(0);
    const cronometroRodando = ref(false);
    const teste = computed(() => tempoEmSegundos.value + cronometro.value);

    const iniciar = () => {
      cronometroRodando.value = true
      cronometro.value = setInterval(() => {
        tempoEmSegundos.value += 1
      }, 1000)
    }

    const finalizar = () => {
      cronometroRodando.value = false
      clearInterval(cronometro.value)
      emit('aoTemporizadorFinalizado', tempoEmSegundos)
      tempoEmSegundos.value = 0
    }

    return {
      tempoEmSegundos,
      cronometro,
      cronometroRodando,
      iniciar,
      finalizar
    }
  }
});
</script>