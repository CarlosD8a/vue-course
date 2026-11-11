// version sin next actual
import type {
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
) => {
  const userName = localStorage.getItem('userName');
  localStorage.setItem('lastPath', to.path); // guarda la ultima ruta en la que se encuetro, actualiza solo esa variable

  if (!userName) {
    return {
      name: 'login',
    };
  }
  return true; // next es practicamnte continua sin problema sigue tu camino
};

export default isAuthenticatedGuard;

// esto es deprecado por el next
// import type {
//   NavigationGuardNext,
//   RouteLocationNormalizedGeneric,
//   RouteLocationNormalizedLoadedGeneric,
// } from 'vue-router';

// const isAuthenticatedGuard = (
//   to: RouteLocationNormalizedGeneric,
//   from: RouteLocationNormalizedLoadedGeneric,
//   next: NavigationGuardNext,
// ) => {
//   const userName = localStorage.getItem('userName');
//   localStorage.setItem('lastPath', to.path); // guarda la ultima ruta en la que se encuetro, actualiza solo esa variable

//   if (!userName) {
//     return next({
//       name: 'login',
//     });
//   }
//   return next(); // next es practicamnte continua sin problema sigue tu camino
// };

// export default isAuthenticatedGuard;
