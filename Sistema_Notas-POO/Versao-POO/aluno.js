class Aluno {
  constructor(nome, notas, turma) {
    this.nome = nome;
    this.notas = notas;
    this.turma = turma;
  }

  calcularMedia() {
    let soma = 0;

    for (const nota of this.notas) {
      soma += nota;
    }

    return soma / this.notas.length;
  }

  obterSituacao() {
    if (this.calcularMedia() >= 7.0) {
      return "Aprovado";
    }

    return "Reprovado";
  }
}

module.exports = Aluno;
