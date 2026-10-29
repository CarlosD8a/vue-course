import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemons = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Config);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);
  const isLoading = computed(() => pokemons.value.length === 0);
  const score = ref(0);
  const dificult = ref<number>();

  const difficultyName = computed(() => {
    const names: Record<number, string> = { 3: 'Easy', 4: 'Medium', 5: 'Hard' };
    return names[dificult.value ?? 0] ?? '-';
  });

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

  const getNextRound = async (howMany: number = 4) => {
    if (pokemons.value.length < howMany) {
      pokemons.value = await getPokemons();
    }
    dificult.value = howMany;
    gameStatus.value = GameStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany); // lo que hace es tomar del cero al howmany y guardarlos en la nueva variable pero no toca el arreglo original
    pokemons.value = pokemons.value.slice(howMany); // corta a partir del howmany hacia adelante dejandonos el resto de opciones en el arreglo
  };

  const checkAnswer = async (answer: number) => {
    const haswon = randomPokemon.value?.id === answer;

    if (haswon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 350,
        spread: 150,
        origin: { y: 0.6 },
      });
      score.value += 1;
      await new Promise((response) => setTimeout(response, 3000));
      getNextRound(dificult.value);
      return;
    }
    gameStatus.value = GameStatus.Lost;
  };

  const restarGame = async () => {
    score.value = 0;
    if (pokemons.value.length < 10) {
      pokemons.value = await getPokemons();
    }
    gameStatus.value = GameStatus.Config;
  };

  onMounted(async () => {
    await new Promise((response) => setTimeout(response, 1500));
    pokemons.value = await getPokemons();
    // getNextRound();
  });

  return {
    gameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,
    score,
    difficultyName,

    // Methods
    checkAnswer,
    getNextRound, // este es el que se usara cada vez que se precione un boton por tanto no va en el onMounted
    restarGame,
  };
};
