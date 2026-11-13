import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import type { RouteLocationNormalized } from 'vue-router';

describe('Router', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
  test('should renders HomePage when visiting /', async () => {
    await router.replace('/');
    await router.isReady();
    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web');
  });

  test('should renders Features when visiting /features', async () => {
    await router.replace('/features');
    await router.isReady();
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');

    await router.replace('/');
    await router.push({ name: 'features' });
    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  test('should renders pricing when visiting /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();
    expect(wrapper.html()).toContain('Flexible');

    await router.replace('/');
    await router.push({ name: 'pricing' });
    expect(wrapper.html()).toContain('Flexible');
  });

  test('should renders contact when visiting /contact', async () => {
    await router.replace('/contact');
    await router.isReady();
    expect(wrapper.html()).toContain('Feedback');

    await router.replace('/');
    await router.push({ name: 'contact' });
    expect(wrapper.html()).toContain('Feedback');
  });

  test('should renders LoginPage when visiting /pokemon/:id with no authentication', async () => {
    localStorage.clear();
    await router.replace('/pokemon/25');
    await router.isReady();

    expect(wrapper.find('h1').text()).toContain('Login');
  });

  test('should renders LoginPage when visiting /pokemon/:id with authentication', async () => {
    localStorage.setItem('userName', 'xyz-987');
    await router.replace('/pokemon/25');
    await router.isReady();

    expect(wrapper.find('h1').text()).toContain('Pokemon # 25');
  });

  test('should convert the segment into numbers', () => {
    const route: RouteLocationNormalized = {
      name: undefined,
      matched: [],
      fullPath: '/pokemon/25',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      meta: {},
      params: { id: '25' },
      path: '',
    };
    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');
    const { id } = pokemonRoute?.props.default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(25);
  });

  test('should convert the segment into numbers', () => {
    const route: any = {
      fullPath: '/pokemon/25',
      params: { id: '25abc' },
    };
    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');
    const { id } = pokemonRoute?.props.default(route);

    expect(pokemonRoute).toBeTruthy();
    expect(id).toBe(1);
  });
});
