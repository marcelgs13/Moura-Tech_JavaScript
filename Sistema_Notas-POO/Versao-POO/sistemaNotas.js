const Aluno = require("./aluno");
const Turma = require("./turma");

class SistemaNotas {
  constructor() {
    this.turmas = [
      new Turma("Mouratech Dados"),
      new Turma("Mouratech Fullstack"),
      new Turma("Mouratech Automação"),
    ];

    this.carregarAlunosIniciais();
  }

  carregarAlunosIniciais() {
    const alunosIniciais = [
      ["Maria giganta", [8.5, 7, 9.2], "Mouratech Dados"],
      ["Joao Louco", [6, 5.5, 7.4], "Mouratech Dados"],
      ["Ruan Filho", [9.8, 9.1, 10], "Mouratech Dados"],
      ["Xaxavier Reis", [7, 7, 6.9], "Mouratech Dados"],
      ["Ruan Carvalho", [10, 10, 10], "Mouratech Fullstack"],
      ["José Ernandes", [10, 7, 9], "Mouratech Fullstack"],
      ["Rayssa Vitoria", [7.2, 6.8, 7.5], "Mouratech Fullstack"],
      ["Mauricio Chagas", [8.9, 9.4, 8.2], "Mouratech Automação"],
      ["JotaQuest", [5.8, 6.5, 6], "Mouratech Automação"],
      ["Pedro Robo", [7.7, 7.1, 8.3], "Mouratech Automação"],
      ["Vitoria Tibum", [3.2, 4.8, 5.5], "Mouratech Automação"],
    ];

    for (const [nome, notas, turma] of alunosIniciais) {
      this.cadastrarAluno(nome, notas, turma);
    }
  }

  buscarTurma(nomeTurma) {
    return this.turmas.find((turma) => turma.nome === nomeTurma);
  }

  cadastrarAluno(nome, notas, nomeTurma) {
    const turma = this.buscarTurma(nomeTurma);
    const aluno = new Aluno(nome, notas, nomeTurma);

    turma.adicionarAluno(aluno);
    return aluno;
  }

  listarAlunos() {
    const alunos = [];

    for (const turma of this.turmas) {
      alunos.push(...turma.alunos);
    }

    return alunos;
  }

  analisarTurma(nomeTurma) {
    return this.buscarTurma(nomeTurma).alunos;
  }

  gerarRelatorioAnalitico() {
    const alunos = this.listarAlunos();
    let maiorAluno = alunos[0];
    let menorAluno = alunos[0];

    for (const aluno of alunos) {
      if (aluno.calcularMedia() > maiorAluno.calcularMedia()) {
        maiorAluno = aluno;
      }

      if (aluno.calcularMedia() < menorAluno.calcularMedia()) {
        menorAluno = aluno;
      }
    }

    return {
      maiorAluno,
      menorAluno,
      turmas: this.turmas.map((turma) => ({
        turma,
        estatisticas: turma.obterEstatisticas(),
      })),
    };
  }
}

module.exports = SistemaNotas;
