import PokemonPicture from '@/modules/Pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPicture/>', () => {
  test('should render the hidden image when showPokemon prop is false', () => {
    const pokemonId = 3;
    const classImage = 'silhouette';
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId,
        showImage: false,
      },
    });
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemonId}.png`;
    const image = wrapper.find('img');
    const imageAtributes = image.attributes();
    expect(imageAtributes).toEqual(
      expect.objectContaining({
        class: classImage,
        src: urlImage,
      }),
    );
  });
  test('should render the image when showPokemon prop is true', () => {
    const classImage = 'fade-in';
    const pokemonId = 3;
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonId,
        showImage: true,
      },
    });
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemonId}.png`;
    const image = wrapper.find('img');
    const imageAtributes = image.attributes();
    expect(imageAtributes).toEqual(
      expect.objectContaining({
        class: classImage,
        src: urlImage,
      }),
    );
  });
});
