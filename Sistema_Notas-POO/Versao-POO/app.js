const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const SistemaNotas = require("./sistemaNotas");

class AplicacaoTerminal {
  constructor(sistema = new SistemaNotas(), rl = null) {
    this.sistema = sistema;
    this.rl = rl || readline.createInterface({ input: stdin, output: stdout });
  }

  listarAlunos() {
    console.log("");
    console.log("Todos os alunos:");
    console.log("--------------------------------");

    for (const aluno of this.sistema.listarAlunos()) {
      console.log(
        aluno.nome +
          " - " +
          aluno.turma +
          " - média: " +
          aluno.calcularMedia().toFixed(2),
      );
    }
  }

  async escolherTurma() {
    while (true) {
      console.log("");
      console.log("1 - MouraTech Fullstack");
      console.log("2 - MouraTech Dados");
      console.log("3 - MouraTech Automação");
      console.log("");
      const opcaoTurma = await this.rl.question("Digite o numero da turma:");

      if (opcaoTurma == 1) {
        return "Mouratech Fullstack";
      } else if (opcaoTurma == 2) {
        return "Mouratech Dados";
      } else if (opcaoTurma == 3) {
        return "Mouratech Automação";
      } else {
        console.log("");
        console.log("Digite um número valido");
        console.log("");
      }
    }
  }

  async lerNota(mensagem) {
    while (true) {
      const nota = Number(await this.rl.question(mensagem));

      if (nota >= 0 && nota <= 10) {
        return nota;
      }

      console.log("Digite um valor valido entre 0 e 10");
    }
  }

  async cadastrarAluno() {
    console.log("");
    const nome = await this.rl.question("Nome: ");
    const turma = await this.escolherTurma();
    const n1 = await this.lerNota("Nota 1: ");
    const n2 = await this.lerNota("Nota 2: ");
    const n3 = await this.lerNota("Nota 3: ");

    this.sistema.cadastrarAluno(nome, [n1, n2, n3], turma);
    console.log("Aluno cadastrado com sucesso!");
  }

  analisarTurma(nomeTurma) {
    console.log("");
    console.log("Turma: " + nomeTurma);
    console.log("--------------------------------");

    for (const aluno of this.sistema.analisarTurma(nomeTurma)) {
      console.log(
        aluno.nome +
          " - média: " +
          aluno.calcularMedia().toFixed(2) +
          " - " +
          aluno.obterSituacao(),
      );
    }
  }

  mostrarAnalitica() {
    const relatorio = this.sistema.gerarRelatorioAnalitico();

    console.log("");
    console.log("Relatório analítico");
    console.log("--------------------------------");
    console.log(
      "Maior média: " +
        relatorio.maiorAluno.nome +
        " (" +
        relatorio.maiorAluno.calcularMedia().toFixed(2) +
        ")",
    );
    console.log(
      "Menor média: " +
        relatorio.menorAluno.nome +
        " (" +
        relatorio.menorAluno.calcularMedia().toFixed(2) +
        ")",
    );

    for (const item of relatorio.turmas) {
      console.log("");
      console.log(item.turma.nome);
      console.log("Média geral: " + item.estatisticas.mediaGeral.toFixed(2));
      console.log(
        "Aprovados: " +
          item.estatisticas.aprovados +
          " | Reprovados: " +
          item.estatisticas.reprovados,
      );
    }
  }

  async executar() {
    let sair = false;

    while (!sair) {
      console.log("");
      console.log("1 - listar alunos");
      console.log("2 - analisar turma");
      console.log("3 - cadastrar aluno");
      console.log("4 - relatório analítico");
      console.log("0 - sair");
      const opcao = await this.rl.question("Escolha uma opção: ");

      if (opcao === "1") {
        this.listarAlunos();
      } else if (opcao === "2") {
        const turma = await this.escolherTurma();
        this.analisarTurma(turma);
      } else if (opcao === "3") {
        await this.cadastrarAluno();
      } else if (opcao === "4") {
        this.mostrarAnalitica();
      } else if (opcao === "0") {
        sair = true;
      } else {
        console.log("Opção inválida!");
      }
    }

    console.log("Saindo...");
    this.rl.close();
  }
}

if (require.main === module) {
  const aplicacao = new AplicacaoTerminal();
  aplicacao.executar();
}

module.exports = AplicacaoTerminal;
