<template>
  <section
    v-if="isLoading || randomPokemon?.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere un momento</h1>
    <h3 class="animate-pulse">Cargando Pokemones . . .</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Quien es ese pokemon?</h1>
    <button class="bg-purple-400 rounded-2xl p-2" @click="getNextRound(4)">Reload</button>

    <!-- Imagen de pokemon  -->
    <PokemonPicture
      :pokemon-id="randomPokemon?.id ?? 0"
      :show-image="gameStatus !== GameStatus.Playing"
    />
    <!-- Opciones del pokemon  -->
    <PokemonOptions
      :options="options"
      @selected-option="checkAnswer"
      :block-selection="gameStatus !== GameStatus.Playing"
      :answer="randomPokemon?.id ?? 0"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemons } from '../composables/usePokemonGame.ts';
import { GameStatus } from '../interfaces/game-status.enum.ts';

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonsOptions: options,
  checkAnswer,
  getNextRound,
} = usePokemons();
</script>

<style lang="scss" scoped></style>
