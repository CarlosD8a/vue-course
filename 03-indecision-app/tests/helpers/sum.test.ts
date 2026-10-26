import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('addFunction', () => {
  test('adds 2 + 3 to equal 3', () => {
    // Preparacion
    const a = 2;
    const b = 3;

    // estimulo
    const result = sum(a, b);

    // comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('AddArrayFunction', () => {
  test('sumar arreglados to equal 15', () => {
    // preparacion
    const array = [5, 5, 5];

    // estimulo
    const result = addArray(array);

    // comportamiento esperado
    expect(result).toBe(15);
  });

  test('numeros flotantes', () => {
    //preparacion
    const array = [1, 2.1, 1.1];

    // estimulo
    const result = addArray(array);

    // comportamiento esperado
    expect(result).toBe(4.2);
  });

  test('el valor debe regresar cero si se manda vacio el arreglo', () => {
    //preparacion
    const numberArray: number[] = [];

    // estimulo
    const result = addArray(numberArray);

    // comportamiento esperado
    expect(result).toBe(0);
  });
});
