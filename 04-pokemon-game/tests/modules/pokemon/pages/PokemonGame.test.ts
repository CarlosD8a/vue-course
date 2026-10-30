// oxlint-disable vitest/require-mock-type-parameters
import { usePokemons } from '@/modules/Pokemon/composables/usePokemonGame';
import { GameStatus } from '@/modules/Pokemon/interfaces';
import PokemonGame from '@/modules/Pokemon/pages/PokemonGame.vue';
import { mount } from '@vue/test-utils';
import type { Mock } from 'vitest';

vi.mock('@/modules/Pokemon/composables/usePokemonGame', () => ({
  usePokemons: vi.fn(),
}));

const pokemonsOptions = [
  {
    name: 'bulbasaur',
    id: 1,
  },
  {
    name: 'ivysaur',
    id: 2,
  },
  {
    name: 'venusaur',
    id: 3,
  },
  {
    name: 'charmander',
    id: 4,
  },
];

describe('<PokemonGame/>', () => {
  test('should intialize with default values', () => {
    (usePokemons as Mock).mockReturnValue({
      randomPokemon: undefined,
      isLoading: true,
      gameStatus: GameStatus.Config,
      pokemonsOptions: [],
      score: 0,
      difficultyName: '-',
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
      restarGame: vi.fn(),
    });
    const wrapper = mount(PokemonGame);
    // console.log(wrapper.html());

    expect(wrapper.get('p').text()).toBe('Espere un momento');
    expect(wrapper.get('p[class="blink"]').text()).toBe('Cargando pokemones...');
  });

  test('should render <PokemonPicture/> and <PokemonOptions/>', () => {
    (usePokemons as Mock).mockReturnValue({
      randomPokemon: pokemonsOptions.at(0),
      isLoading: false,
      gameStatus: GameStatus.Playing,
      pokemonsOptions: pokemonsOptions,
      score: 0,
      difficultyName: 'Easy',
      checkAnswer: vi.fn(),
      getNextRound: vi.fn(),
      restarGame: vi.fn(),
    });
    const pokemons = pokemonsOptions.map((pokemon) => pokemon.name);
    const wrapper = mount(PokemonGame);
    console.log(wrapper.html());
    expect(wrapper.find('section.picture').exists()).toBe(true);
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(4);
    buttons.forEach((button) => {
      expect(pokemons).toContain(button.text());
    });
  });
});
