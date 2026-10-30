import { GameStatus } from '@/modules/Pokemon/interfaces';
import { withSetup } from '../../../utils/with-setup';
import { usePokemons } from '@/modules/Pokemon/composables/usePokemonGame';
import { flushPromises } from '@vue/test-utils';
import MockAdapter from 'axios-mock-adapter';
import { pokemonApi } from '@/modules/Pokemon/api/pokemonApi';
import { pokemonsFake } from '../../../data/fake-data-pokemon';
import confetti from 'canvas-confetti';

const mockPokemonApi = new MockAdapter(pokemonApi);
mockPokemonApi.onGet('/?limit=151').reply(200, {
  results: pokemonsFake,
});

// esto es el mock del confeti pero solo cuando  pero solo cuando es exportacion directa
vi.mock('canvas-confetti', () => ({ default: vi.fn() }));

describe('usePokemonGame', () => {
  test('should initialize with the correct default values', async () => {
    const [result] = withSetup(usePokemons);

    expect(result.gameStatus.value).toBe(GameStatus.Config);
    expect(result.isLoading.value).toBe(true);
    expect(result.pokemonsOptions.value).toEqual([]);
    expect(result.randomPokemon.value).toBe(undefined);

    await flushPromises(); // este sirve para esperar a que el onMonted termine pero si tiene asincronas anidadas no funciona
    // por eso se usa el mock de la api para simularla y ya no haya await internos
    expect(result.isLoading.value).toBe(false);
    expect(result.pokemonsOptions.value.length).toBe(4);
    expect(result.randomPokemon.value).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    });
  });

  test('should correctly handle getNextRoun', async () => {
    const [result] = withSetup(usePokemons);
    const options = 5;
    await flushPromises();

    result.getNextRound(options);
    // console.log(result.pokemonsOptions.value);
    expect(result.gameStatus.value).toBe(GameStatus.Playing);
    expect(result.pokemonsOptions.value).toHaveLength(options);
  });

  test('should correctly handle getNextRound and return diferent pokemons', async () => {
    const [result] = withSetup(usePokemons);
    await flushPromises();
    //extraer id con map
    result.getNextRound();
    // console.log(result.pokemonsOptions.value);
    const firstValueIds = result.pokemonsOptions.value.map((pokemon: { id: number }) => pokemon.id);
    // console.log(firstValueIds);
    result.getNextRound();
    // console.log(result.pokemonsOptions.value);
    const secondValueIds = result.pokemonsOptions.value.map(
      (pokemon: { id: number }) => pokemon.id,
    );
    // console.log(secondValueIds);

    expect(firstValueIds).not.toEqual(secondValueIds);
  });

  test('should correctly handle getNextRound and return diferent pokemons (curso)', async () => {
    const [result] = withSetup(usePokemons);
    await flushPromises();
    const firstpokemonsNames = [...result.pokemonsOptions.value].map((pokemon) => pokemon.name);
    result.getNextRound();
    const secondPokemonsName = [...result.pokemonsOptions.value];
    secondPokemonsName.forEach((pokemon) => {
      expect(firstpokemonsNames).not.toContain(pokemon.name);
    });
  });

  test('should correctly handle a incorrect answer', async () => {
    const [result] = withSetup(usePokemons);
    await flushPromises();

    const { checkAnswer, gameStatus } = result;

    expect(gameStatus.value).toBe(GameStatus.Playing);

    checkAnswer(10000);

    expect(gameStatus.value).toBe(GameStatus.Lost);
  });
  test('should correctly handle a correct answer', async () => {
    const [result] = withSetup(usePokemons);
    await flushPromises();

    const { checkAnswer, gameStatus, randomPokemon } = result;

    expect(gameStatus.value).toBe(GameStatus.Playing);

    checkAnswer(randomPokemon.value.id);

    expect(confetti).toHaveBeenCalled();
    expect(confetti).toHaveBeenCalledWith({
      particleCount: 350,
      spread: 150,
      origin: { y: 0.6 },
    });

    expect(gameStatus.value).toBe(GameStatus.Won);
  });
});
