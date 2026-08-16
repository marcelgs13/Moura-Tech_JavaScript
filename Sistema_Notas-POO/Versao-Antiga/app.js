const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

const { alunos, cadastraAluno } = require("./dados");
const { calcularMedia, analisarTurma } = require("./notas");
const { mostrarAnalitica } = require("./analitica");

const rl = readline.createInterface({ input: stdin, output: stdout });

function listarAlunos() {
  console.log("");
  console.log("Todos os alunos:");
  console.log("--------------------------------");
  for (const aluno of alunos) {
    const media = calcularMedia(...aluno.notas);
    console.log(aluno.nome + " - " + aluno.turma + " - média: " + media.toFixed(2));
  }
}

async function escolherTurma() {
  while (true) {
    console.log("");
    console.log("1 - MouraTech Fullstack");
    console.log("2 - MouraTech Dados");
    console.log("3 - MouraTech Automação");
    console.log("");
    const opcaoTurma = await rl.question("Digite o numero da turma:");

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

async function lerNota(mensagem) {
  while (true) {
    const nota = Number(await rl.question(mensagem));
    if (nota >= 0 && nota <= 10) {
      return nota;
    }
    console.log("Digite um valor valido entre 0 e 10");
  }
}

async function cadastrarAluno() {
  console.log("");
  const nome = await rl.question("Nome: ");
  const turma = await escolherTurma();

  const n1 = await lerNota("Nota 1: ");
  const n2 = await lerNota("Nota 2: ");
  const n3 = await lerNota("Nota 3: ");

  cadastraAluno(nome, [n1, n2, n3], turma);
  console.log("Aluno cadastrado com sucesso!");
}

async function main() {
  let sair = false;

  while (!sair) {
    console.log("");
    console.log("1 - listar alunos");
    console.log("2 - analisar turma");
    console.log("3 - cadastrar aluno");
    console.log("4 - relatório analítico");
    console.log("0 - sair");
    const opcao = await rl.question("Escolha uma opção: ");

    if (opcao === "1") {
      listarAlunos();
    } else if (opcao === "2") {
      const turma = await escolherTurma();
      analisarTurma(turma);
    } else if (opcao === "3") {
      await cadastrarAluno();
    } else if (opcao === "4") {
      mostrarAnalitica();
    } else if (opcao === "0") {
      sair = true;
    } else {
      console.log("Opção inválida!");
    }
  }

  console.log("Saindo...");
  rl.close();
}

main();
