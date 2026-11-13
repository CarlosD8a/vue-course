import PokemonPage from '@/modules/pokemons/pages/PokemonPage.vue';
import { mount, RouterLinkStub } from '@vue/test-utils';
import { RouterLink } from 'vue-router';

describe('<PokemonPage/>', () => {
  const wrapper = mount(PokemonPage, {
    props: {
      id: 25,
    },
    global: {
      stubs: {
        // RouterLink: true, // solo es para quitar el warning, solo por asi decirlo lo dejas como una caja vacia ya que no lo usas como tal
        RouterLink: RouterLinkStub, // esto es como un espia para poder acceder a las props del routerlink
      },
    },
  });
  test('should render the component correctly', () => {
    // console.log(wrapper.html());
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    );
  });

  test('should redirect to the next pokemon', async () => {
    const link = wrapper.findComponent(RouterLinkStub);

    // console.log(link.props());
    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: 26 } });
  });
});
