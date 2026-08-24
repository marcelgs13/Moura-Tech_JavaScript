import { Calculadora } from './Calculadora.js';

describe('Calculadora', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  test('somar', () => {
    const resultado = calc.somar(2, 3);
    expect(resultado).toBe(5);
  });
  test('subtrair', () => {
    let resultado = calc.subtrair(2, 3);
    expect(resultado).toBe(-1);
    let resultado = calc.subtrair(2, 2);
    expect(resultado).toBe(0);
    let resultado = calc.subtrair(2, 4);
    expect(resultado).toBe(-2);
  });
});