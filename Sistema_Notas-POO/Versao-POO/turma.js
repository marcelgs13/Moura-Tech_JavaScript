class Turma {
  constructor(nome) {
    this.nome = nome;
    this.alunos = [];
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
    return aluno;
  }

  calcularMediaGeral() {
    let somaMedias = 0;

    for (const aluno of this.alunos) {
      somaMedias += aluno.calcularMedia();
    }

    return somaMedias / this.alunos.length;
  }

  obterEstatisticas() {
    let aprovados = 0;
    let reprovados = 0;

    for (const aluno of this.alunos) {
      if (aluno.obterSituacao() === "Aprovado") {
        aprovados++;
      } else {
        reprovados++;
      }
    }

    return {
      mediaGeral: this.calcularMediaGeral(),
      aprovados,
      reprovados,
    };
  }
}

module.exports = Turma;
