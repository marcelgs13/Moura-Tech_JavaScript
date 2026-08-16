var turmaDados = [
  { nome: "Maria giganta", notas: [8.5, 7, 9.2], turma: "Mouratech Dados" },
  { nome: "Joao Louco", notas: [6, 5.5, 7.4], turma: "Mouratech Dados" },
  { nome: "Ruan Filho", notas: [9.8, 9.1, 10], turma: "Mouratech Dados" },
  { nome: "Xaxavier Reis", notas: [7, 7, 6.9], turma: "Mouratech Dados" },
];

var turmaFullstack = [
  { nome: "Ruan Carvalho", notas: [10, 10, 10], turma: "Mouratech Fullstack" },
  { nome: "José Ernandes", notas: [10, 7, 9], turma: "Mouratech Fullstack" },
  { nome: "Rayssa Vitoria", notas: [7.2, 6.8, 7.5], turma: "Mouratech Fullstack" },
];

var turmaAutomacao = [
  { nome: "Mauricio Chagas", notas: [8.9, 9.4, 8.2], turma: "Mouratech Automação" },
  { nome: "JotaQuest", notas: [5.8, 6.5, 6], turma: "Mouratech Automação" },
  { nome: "Pedro Robo", notas: [7.7, 7.1, 8.3], turma: "Mouratech Automação" },
  { nome: "Vitoria Tibum", notas: [3.2, 4.8, 5.5], turma: "Mouratech Automação" },
];

const alunos = turmaDados.concat(turmaFullstack).concat(turmaAutomacao);

function cadastraAluno(nome, notas, turma) {
  const aluno = { nome: nome, notas: notas, turma: turma };
  alunos.push(aluno);
  if (turma === "Mouratech Dados"){
    turmaDados.push(aluno)
  }
  else if (turma === "Mouratech Fullstack"){
    turmaFullstack.push(aluno)
  }
  else{
    turmaAutomacao.push(aluno)
  }
  return aluno;
}

module.exports = {
  turmaDados,
  turmaFullstack,
  turmaAutomacao,
  alunos,
  cadastraAluno,
};
