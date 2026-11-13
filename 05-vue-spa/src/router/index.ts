import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import NotFoud404 from '@/modules/common/pages/NotFoud404.vue';
import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPages.vue'), // se importa de manera peresosa
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContacPage.vue'), // se importa de manera peresosa
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'), // se importa de manera peresosa
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard], // aqui va los guards y pueden ser mas de uno
          props: (route) => {
            const idNumber = Number(route.params.id);
            // const idNumber = +(route.params.id); usar el signo mas a la izquierda tambien lo hace numero
            return isNaN(idNumber) ? { id: 1 } : { id: idNumber };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },
    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' }, // '/login'
      name: 'auth',
      component: () => import('@/modules/auth/layout/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // not found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoud404,
    },
  ],
});

export default router;
