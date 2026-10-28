import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemons = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);
  const isLoading = computed(() => pokemons.value.length === 0);

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex];
  });

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('?limit=151');

    const PokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });
    return PokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany); // lo que hace es tomar del cero al howmany y guardarlos en la nueva variable pero no toca el arreglo original
    pokemons.value = pokemons.value.slice(howMany); // corta a partir del howmany hacia adelante dejandonos el resto de opciones en el arreglo
  };

  const checkAnswer = (answer: number) => {
    const haswon = randomPokemon.value?.id === answer;

    if (haswon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 350,
        spread: 150,
        origin: { y: 0.6 },
      });
      return;
    }
    gameStatus.value = GameStatus.Lost;
  };

  onMounted(async () => {
    await new Promise((response) => setTimeout(response, 1000));
    pokemons.value = await getPokemons();
    getNextRound();
  });

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,

    // Methods
    checkAnswer,
    getNextRound, // este es el que se usara cada vez que se precione un boton por tanto no va en el onMounted
  };
};
