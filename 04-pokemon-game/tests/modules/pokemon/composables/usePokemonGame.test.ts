import { withSetup } from '../../../utils/with-setup';
import { usePokemons } from '@/modules/Pokemon/composables/usePokemonGame';

describe('usePokemonGame', () => {
  test('should initialize with the correct default values', () => {
    const [result, app] = withSetup(usePokemons);
  });
});
