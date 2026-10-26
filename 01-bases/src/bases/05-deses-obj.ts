interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

export const person: Hero = {
  name: "Tony",
  age: 45,
  codeName: "Iroman",
  power: "Money",
};

const { name, age, power = "No tiene poder" } = person;

console.log({ name, age, power });

interface createHero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

const returnHero = ({ name, age, codeName, power }: createHero) => ({
  id: 123,
  name: name,
  age: age,
  codeName: codeName,
  power: power ?? "No tiene poder",
});

console.log(returnHero(person));
