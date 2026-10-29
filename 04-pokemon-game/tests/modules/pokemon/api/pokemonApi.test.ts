import { pokemonApi } from '@/modules/Pokemon/api/pokemonApi';

describe('pokemonApi', () => {
  test('should url be correctly', () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

    expect(pokemonApi.defaults.baseURL).toBe(baseUrl);
  });
});
