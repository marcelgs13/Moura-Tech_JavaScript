const { alunos } = require("./dados");

function calcularMedia(...notas) {
  let soma = 0;
  for (const n of notas) {
    soma += n;
  }
  return soma / notas.length;
}

function analisarTurma(nomeTurma) {
  console.log("");
  console.log("Turma: " + nomeTurma);
  console.log("--------------------------------");

  for (const aluno of alunos) {
    if (aluno.turma === nomeTurma) {
      const media = calcularMedia(...aluno.notas);
      let situacao = "Reprovado";
      if (media >= 7.0) {
        situacao = "Aprovado";
      }
      console.log(aluno.nome + " - média: " + media.toFixed(2) + " - " + situacao);
    }
  }
}

module.exports = { calcularMedia, analisarTurma };
