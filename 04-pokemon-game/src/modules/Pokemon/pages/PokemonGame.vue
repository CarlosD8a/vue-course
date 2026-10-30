<template>
  <section v-if="isLoading || randomPokemon?.id === null" class="screen">
    <div class="framed secondary">
      <p>Espere un momento</p>
      <p class="blink">Cargando pokemones...</p>
    </div>
  </section>

  <section v-else-if="gameStatus === GameStatus.Config" class="screen">
    <div class="framed secondary">
      <p>Selecciona dificultad</p>
      <ul class="buttons">
        <li><button @click="getNextRound(3)">Easy</button></li>
        <li><button @click="getNextRound(4)">Medium</button></li>
        <li><button @click="getNextRound(5)">Hard</button></li>
      </ul>
    </div>
  </section>

  <section v-else class="screen">
    <div class="game">
      <!-- Cabecera -->
      <div class="framed secondary game-header">
        <span>Dificultad: {{ difficultyName }}</span>
        <span>Score: {{ score }}</span>
      </div>

      <div class="game-body">
        <!-- Imagen de pokemon -->
        <div
          class="framed"
          :class="{
            primary: gameStatus === GameStatus.Won,
            danger: gameStatus === GameStatus.Lost,
          }"
        >
          <PokemonPicture
            :pokemon-id="randomPokemon?.id ?? 0"
            :show-image="gameStatus !== GameStatus.Playing"
          />
        </div>

        <!-- Opciones del pokemon -->
        <div class="framed">
          <p>¿Quién es ese Pokémon?</p>
          <PokemonOptions
            :options="options"
            @selected-option="checkAnswer"
            :block-selection="gameStatus !== GameStatus.Playing"
            :answer="randomPokemon?.id ?? 0"
          />
        </div>
      </div>
    </div>
    <GameOverModal v-if="gameStatus === GameStatus.Lost" :score="score" @new-game="restarGame" />
  </section>
</template>

<script setup lang="ts">
import GameOverModal from '../components/GameOverModal.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemons } from '../composables/usePokemonGame.ts';
import { GameStatus } from '../interfaces/game-status.enum.ts';

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonsOptions: options,
  score,
  difficultyName,
  checkAnswer,
  getNextRound,
  restarGame,
} = usePokemons();
</script>
