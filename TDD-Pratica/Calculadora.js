export class Calculadora {
  constructor() {
    this.resultado = 0;
  }

  somar(a, b) {
    this.resultado = a + b;
    return this.resultado;
  }
  subtrair(a, b) {
    return a - b;
  }
}