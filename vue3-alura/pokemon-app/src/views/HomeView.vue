<template>
  <div class="w-full flex justify-center">
    <input type="text" placeholder="Enter Pokemon here" class="mt-10 p-2 text-center border-blue-500 border-2"
      v-model="text" />
  </div>

  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div class="ml-4 text-2x text-blue-500" v-for="(pokemon, idx) in filteredPokemon" :key="idx">

      <router-link :to="`/about/${urlIdLookup[pokemon.name]}`">
        {{ pokemon.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { Pokemon } from '@/types/Pokemon';

export default {
  name: 'HomeView',
  setup() {

    const state = reactive({
      pokemons: [],
      urlIdLookup: {},
      text: '',
      filteredPokemon: computed(() => updatePokemon())
    })

    function updatePokemon(): Array<Pokemon> {
      if (!state.text) {
        return []
      }

      return state.pokemons.filter((pokemon: Pokemon) => pokemon.name.includes(state.text)
      )
    }

    fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        state.pokemons = data.results;
        state.urlIdLookup = data
          .results
          .reduce((acc: object, cur: Pokemon, idx: number) => acc = { ...acc, [cur.name]: idx + 1 }, {})
      })

    return { ...toRefs(state) }
  }
};
</script>
