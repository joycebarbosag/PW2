const readline = require('readline');

let listaAlunos = [];

function adicionarAluno(id, nome, nota) {
    let aluno = {
        id: id,
        nome: nome,
        nota: nota
    };
    listaAlunos.push(aluno);
}


function buscarAlunoPorId(id) {
    for (let i = 0; i < listaAlunos.length; i++) {
        if (listaAlunos[i].id === id) {
            return listaAlunos[i];
        }
    }
    return null; 
}


function calcularMediaNotas() {
    let totalNotas = 0;
    for (let i = 0; i < listaAlunos.length; i++) {
        totalNotas += listaAlunos[i].nota;
    }
    return totalNotas / listaAlunos.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
        console.log(alunoEncontrado);

        let mediaNotas = calcularMediaNotas();
        console.log("A média das notas dos alunos é:", mediaNotas);

        rl.close();
    });
}

receberEntradaAluno();