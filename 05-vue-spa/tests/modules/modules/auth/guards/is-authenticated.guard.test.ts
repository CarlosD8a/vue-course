import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import type { RouteLocationNormalizedGeneric } from 'vue-router';

describe('is-authenticated.guard', () => {
  const to: RouteLocationNormalizedGeneric = {
    name: undefined,
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    meta: {},
    path: '/home',
    params: {},
  };
  const from: any = {};

  beforeEach = () => {
    localStorage.clear();
  };

  test('should block if not authenticated', async () => {
    const result = await isAuthenticatedGuard(to, from);
    expect(result).toEqual({ name: 'login' });
  });

  test('should called localStorage set item lasPaht', async () => {
    await isAuthenticatedGuard(to, from);
    const lastPath = localStorage.getItem('lastPath');
    expect(lastPath).toEqual(to.path);
  });

  test('should block if no authenticated with spies', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem'); // creamos el spia que nos va a chismear cunaod se llame el setItem

    await isAuthenticatedGuard(to, from);

    expect(setItemSpy).toHaveBeenCalledWith('lastPath', '/home');
  });

  test('should pass if authenticated', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('xyz-098'); // creamos el spia que nos va retonar el valor que nosotros querramos
    const result = await isAuthenticatedGuard(to, from);
    expect(result).toBe(true);
  });
});
