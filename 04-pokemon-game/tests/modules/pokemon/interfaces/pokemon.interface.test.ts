import type { Pokemon } from '@/modules/Pokemon/interfaces';

describe('Pokemon interface', () => {
  const pokemon: Pokemon = { id: 1, name: 'Bulbasor' };
  test('should have an id property of type numer', () => {
    expect(pokemon.id).toEqual(expect.any(Number));
  });

  test('should have a name property of type string', () => {
    expect(pokemon.name).toEqual(expect.any(String));
  });
});
