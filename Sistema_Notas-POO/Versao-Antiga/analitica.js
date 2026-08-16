const { alunos, turmaDados, turmaFullstack, turmaAutomacao } = require("./dados");
const { calcularMedia } = require("./notas");

function mostrarAnalitica() {
  let maiorAluno = alunos[0];
  let menorAluno = alunos[0];
  let maiorMedia = calcularMedia(...alunos[0].notas);
  let menorMedia = maiorMedia;

  for (const aluno of alunos) {
    const media = calcularMedia(...aluno.notas);
    if (media > maiorMedia) {
      maiorMedia = media;
      maiorAluno = aluno;
    }
    if (media < menorMedia) {
      menorMedia = media;
      menorAluno = aluno;
    }
  }

  console.log("");
  console.log("Relatório analítico");
  console.log("--------------------------------");
  console.log("Maior média: " + maiorAluno.nome + " (" + maiorMedia.toFixed(2) + ")");
  console.log("Menor média: " + menorAluno.nome + " (" + menorMedia.toFixed(2) + ")");

  const turmas = [
    { nome: "Mouratech Dados", lista: turmaDados },
    { nome: "Mouratech Fullstack", lista: turmaFullstack },
    { nome: "Mouratech Automação", lista: turmaAutomacao },
  ];

  for (const turma of turmas) {
    let somaMedias = 0;
    let aprovados = 0;
    let reprovados = 0;

    for (const aluno of turma.lista) {
      const media = calcularMedia(...aluno.notas);
      somaMedias += media;
      if (media >= 7.0) {
        aprovados++;
      } else {
        reprovados++;
      }
    }

    const mediaGeral = somaMedias / turma.lista.length;
    console.log("");
    console.log(turma.nome);
    console.log("Média geral: " + mediaGeral.toFixed(2));
    console.log("Aprovados: " + aprovados + " | Reprovados: " + reprovados);
  }
}

module.exports = { mostrarAnalitica };
