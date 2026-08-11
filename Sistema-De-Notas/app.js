import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Turmas

const mouratechDados = [
    {
        nome: "Peter Parker",
        notas: [8, 7, 9],
        turma: "Mouratech Dados"
    },
    {
        nome: "Bruce Wayne",
        notas: [9, 8, 8],
        turma: "Mouratech Dados"
    },
    {
        nome: "Clark Kent",
        notas: [6, 7, 5],
        turma: "Mouratech Dados"
    }
];

const mouratechFullstack = [
    {
        nome: "Tony Stark",
        notas: [7, 8, 7],
        turma: "Mouratech Fullstack"
    },
    {
        nome: "Steve Rogers",
        notas: [9, 9, 10],
        turma: "Mouratech Fullstack"
    },
    {
        nome: "Barry Allen",
        notas: [5, 6, 6],
        turma: "Mouratech Fullstack"
    }
];

const mouratechAutomacao = [
    {
        nome: "Bruce Banner",
        notas: [8, 8, 7],
        turma: "Mouratech Automação"
    },
    {
        nome: "Diana Prince",
        notas: [10, 9, 9],
        turma: "Mouratech Automação"
    },
    {
        nome: "Matt Murdock",
        notas: [6, 5, 7],
        turma: "Mouratech Automação"
    }
];


// Cadastrar aluno

function cadastraAluno(nome, notas, turma) {

    const aluno = {
        nome,
        notas,
        turma
    };

    if (turma === "Mouratech Dados") {
        mouratechDados.push(aluno);
    }
    else if (turma === "Mouratech Fullstack") {
        mouratechFullstack.push(aluno);
    }
    else if (turma === "Mouratech Automação") {
        mouratechAutomacao.push(aluno);
    }

    console.log(`\nAluno ${nome} cadastrado com sucesso!`);
}


// Calcular média

function calcularMedia(...notas) {

    let soma = 0;

    for (let nota of notas) {
        soma += nota;
    }

    return soma / notas.length;
}


// Analisar turma

function analisarTurma(nomeTurma) {

    let turma;

    if (nomeTurma === "Mouratech Dados") {
        turma = mouratechDados;
    }
    else if (nomeTurma === "Mouratech Fullstack") {
        turma = mouratechFullstack;
    }
    else if (nomeTurma === "Mouratech Automação") {
        turma = mouratechAutomacao;
    }

    if (turma.length === 0) {
        console.log("\nNão existem alunos cadastrados nessa turma.");
        return;
    }

    console.log(`\n===== ${nomeTurma} =====`);

    for (let aluno of turma) {

        const media = calcularMedia(...aluno.notas);

        const situacao = media >= 7
            ? "Aprovado"
            : "Reprovado";

        console.log(`
Aluno: ${aluno.nome}
Média: ${media.toFixed(2)}
Situação: ${situacao}
-----------------------------
`);
    }
}


// Analítica

function analitica() {

    const turmas = [
        mouratechDados,
        mouratechFullstack,
        mouratechAutomacao
    ];

    for (let turma of turmas) {

        if (turma.length === 0) {
            continue;
        }

        let maiorMedia = -1;
        let menorMedia = 11;

        let alunoMaiorMedia;
        let alunoMenorMedia;

        let somaMedias = 0;

        let aprovados = 0;
        let reprovados = 0;

        for (let aluno of turma) {

            const media = calcularMedia(...aluno.notas);

            somaMedias += media;

            if (media > maiorMedia) {
                maiorMedia = media;
                alunoMaiorMedia = aluno;
            }

            if (media < menorMedia) {
                menorMedia = media;
                alunoMenorMedia = aluno;
            }

            if (media >= 7) {
                aprovados++;
            }
            else {
                reprovados++;
            }
        }

        const mediaGeral = somaMedias / turma.length;

        console.log(`
====================================
Turma: ${turma[0].turma}
====================================

Maior média:
${alunoMaiorMedia.nome} - ${maiorMedia.toFixed(2)}

Menor média:
${alunoMenorMedia.nome} - ${menorMedia.toFixed(2)}

Média geral da turma:
${mediaGeral.toFixed(2)}

Aprovados: ${aprovados}
Reprovados: ${reprovados}
`);
    }
}


// Listar alunos

function listarAlunos() {

    const turmas = [
        mouratechDados,
        mouratechFullstack,
        mouratechAutomacao
    ];

    console.log("\n===== ALUNOS CADASTRADOS =====");

    for (let turma of turmas) {

        for (let aluno of turma) {

            console.log(`
Nome: ${aluno.nome}
Turma: ${aluno.turma}
Notas: ${aluno.notas}
-----------------------------
`);
        }
    }
}


// Escolher turma

function escolherTurma(callback) {

    console.log(`
1 - Mouratech Dados
2 - Mouratech Fullstack
3 - Mouratech Automação
`);

    rl.question("Escolha a turma: ", opcao => {

        let turma;

        if (opcao === "1") {
            turma = "Mouratech Dados";
        }
        else if (opcao === "2") {
            turma = "Mouratech Fullstack";
        }
        else if (opcao === "3") {
            turma = "Mouratech Automação";
        }
        else {
            console.log("\nTurma inválida.");
            menu();
            return;
        }

        callback(turma);
    });
}


// Cadastro pelo terminal

function menuCadastro() {

    rl.question("\nNome do aluno: ", nome => {

        rl.question(
            "Digite pelo menos 3 notas separadas por espaço: ",
            entradaNotas => {

                const notasTexto = entradaNotas.split(" ");

                const notas = [];

                for (let nota of notasTexto) {
                    notas.push(Number(nota));
                }

                if (notas.length < 3) {
                    console.log("\nÉ necessário informar pelo menos 3 notas.");
                    menu();
                    return;
                }

                for (let nota of notas) {
                    if (isNaN(nota)) {
                        console.log("\nDigite apenas valores numéricos para as notas.");
                        menu();
                        return;
                    }
                }

                escolherTurma(turma => {

                    cadastraAluno(
                        nome,
                        notas,
                        turma
                    );

                    menu();
                });
            }
        );
    });
}


// Menu analisar turma

function menuAnalisarTurma() {

    escolherTurma(turma => {

        analisarTurma(turma);

        menu();
    });
}


// Menu principal

function menu() {

    console.log(`
====================================
       SISTEMA DE NOTAS
====================================

1 - Cadastrar aluno
2 - Analisar turma
3 - Analítica geral
4 - Listar alunos
0 - Sair
`);

    rl.question("Escolha uma opção: ", opcao => {

        if (opcao === "1") {
            menuCadastro();
        }

        else if (opcao === "2") {
            menuAnalisarTurma();
        }

        else if (opcao === "3") {
            analitica();
            menu();
        }

        else if (opcao === "4") {
            listarAlunos();
            menu();
        }

        else if (opcao === "0") {
            console.log("\nSistema encerrado.");
            rl.close();
        }

        else {
            console.log("\nOpção inválida.");
            menu();
        }
    });
}


// Iniciar sistema

menu();
