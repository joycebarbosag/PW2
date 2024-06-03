const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dicionarioAlunos = {};

function adicionarAluno(id, nome, nota) {
    dicionarioAlunos[id] = { nome: nome, nota: nota };
}

function buscarAlunoPorId(id) {
    if (id in dicionarioAlunos) {
        return dicionarioAlunos[id];
    } else {
        return null;
    }
}

function calcularMediaNotas() {
    let totalNotas = 0;
    let quantidadeAlunos = 0;
    for (let id in dicionarioAlunos) {
        totalNotas += dicionarioAlunos[id].nota;
        quantidadeAlunos++;
    }
    return totalNotas / quantidadeAlunos;
}

function receberEntradaAluno() {
    rl.question("Digite o ID do aluno: ", function(id) {
        rl.question("Digite o nome do aluno: ", function(nome) {
            rl.question("Digite a nota do aluno: ", function(nota) {
                adicionarAluno(parseInt(id), nome, parseFloat(nota));

                rl.question("Deseja adicionar outro aluno? (S/N): ", function(resposta) {
                    if (resposta.toUpperCase() === 'S') {
                        receberEntradaAluno();
                    } else {
                        realizarOperacoes();
                    }
                });
            });
        });
    });
}

function realizarOperacoes() {
    rl.question("Digite o ID do aluno que deseja buscar: ", function(alunoEncontradoId) {
        let alunoEncontrado = buscarAlunoPorId(parseInt(alunoEncontradoId));
        if (alunoEncontrado) {
            console.log("Aluno encontrado:", alunoEncontrado);
        } else {
            console.log("Aluno não encontrado.");
        }

        let mediaNotas = calcularMediaNotas();
        console.log("A média das notas dos alunos é:", mediaNotas);

        rl.close();
    });
}

receberEntradaAluno(); 