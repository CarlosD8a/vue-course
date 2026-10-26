// console.log("Inicio");

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise((respuesta, rechazo) => {
//   setTimeout(() => {
//     respuesta("Mi amigos no cumplio");
//   }, 1000);
// })
//   .then((message) => console.log(message))
//   .catch((meesageError) => console.log(meesageError));

// console.log("fin");

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      hero ? resolve(hero) : reject("No existe el heroe");
    }, 1500);
  });
};

getHeroByIdAsync(1)
  .then((hero) => console.log(hero))
  .catch(console.error);
