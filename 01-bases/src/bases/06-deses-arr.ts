const caracter = ["Goku", "Vegueta", "Gohan"];

const [, v, g2] = caracter;
console.log({ v, g2 });

const returnArray = () => {
  return ["abc", 123] as const;
};

const [letters, numbers] = returnArray();

console.log(numbers * 2, letters.toUpperCase());
