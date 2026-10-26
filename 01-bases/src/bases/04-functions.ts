function getName(name: string) {
  return `Hola ${name}`;
}

const getName2 = () => "Hola desde una arrow function";

console.log(getName("charly"));
console.log(getName2());

const returnUser = (id: string) => ({
  id: id,
  username: "Pablo123",
});

console.log(returnUser("33"));

const heroes = [
  {
    id: 1,
    name: "batman",
  },
  {
    id: 2,
    name: "spiderman",
    power: "spider",
  },
];

const hero = heroes.find((h) => h.id === 2);

console.log(hero?.power?.toUpperCase());
