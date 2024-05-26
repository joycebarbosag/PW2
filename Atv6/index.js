const verifNota = () => {
    let nota;
do {
    nota = parseInt(prompt("Digite uma nota entre 0 e 10: "));
    if (nota < 0 || nota > 10) {
        console.log("Valor inválido! Tente novamente.");
    }
} while (nota < 0 || nota > 10);

console.log("Nota:", nota);

}

const login = () => {
    let usuario, senha;

do {
    usuario = prompt("Username: ");
    senha = prompt("Password: ");
    if (usuario === senha) {
        console.log("Erro: Senha e username não podem ser iguais.");
    }
} while (usuario === senha);

console.log("Username:", usuario);
console.log("Password:", senha);
}

const validateInfo = () => {
    let nome, idade, salario, sexo, estadoCivil;

do {
    nome = prompt("Digite o nome (> 3 caracteres): ");
    idade = parseInt(prompt("Digite a idade (entre 0 e 150): "));
    salario = parseFloat(prompt("Digite o salário (> que zero): "));
    sexo = prompt("Digite o sexo (f ou m): ");
    estadoCivil = prompt("Digite o estado civil (s, c, v ou d): ");

    if (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== 'f' && sexo !== 'm') || (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd')) {
        console.log("Informações inválidas. Preencha novamente.");
    }
} while (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== 'f' && sexo !== 'm') || (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd'));

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Salário:", salario);
console.log("Sexo:", sexo);
console.log("Estado Civil:", estadoCivil);
}

const habitants = () => {
    let populacaoA = 80000;
    let taxaCrescimentoA = 0.03;
    let populacaoB = 200000;
    let taxaCrescimentoB = 0.015;
    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA);
        populacaoB *= (1 + taxaCrescimentoB);
        anos++;
    }

    console.log("Serão necessários", anos, "anos para a população de A ultrapassar ou igualar a população de B.");
}

const population = () => {
    let populacaoA = parseFloat(prompt("Informe a população inicial do país A:"));
    let taxaCrescimentoA = parseFloat(prompt("Informe a taxa de crescimento anual do país A em decimal (ex: 3% = 0.03):"));
    let populacaoB = parseFloat(prompt("Informe a população inicial do país B:"));
    let taxaCrescimentoB = parseFloat(prompt("Informe a taxa de crescimento anual do país B em decimal (ex: 1.5% = 0.015):"));
    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA *= (1 + taxaCrescimentoA);
        populacaoB *= (1 + taxaCrescimentoB);
        anos++;
    }

    console.log("Serão necessários", anos, "anos para a população de A ultrapassar ou igualar a população de B.");
}

const oneToTwenty = () => {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }

    let output = "";
    for (let i = 1; i <= 20; i++) {
        output += i + " ";
    }
    console.log(output);
}

const greatestNumber = () => {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(parseInt(prompt("Digite um número:")));
    }
    
    let maior = numeros[0];
    for (let i = 1; i < 5; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    
    console.log("O maior número é:", maior);   
}

const average = () => {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(parseFloat(prompt("Digite um número:")));
    }

    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += numeros[i];
    }

    let media = soma / 5;

    console.log("A soma dos números é:", soma);
    console.log("A média dos números é:", media);
}

const oddNumber = () => {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }    
}

const numbers = () => {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

let inicio, fim;
if (num1 < num2) {
    inicio = num1;
    fim = num2;
} else {
    inicio = num2;
    fim = num1;
}

for (let i = inicio; i <= fim; i++) {
    console.log(i);
}
}

const numberWithSum = () => {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let soma = 0;

let inicio, fim;
if (num1 < num2) {
    inicio = num1;
    fim = num2;
} else {
    inicio = num2;
    fim = num1;
}

for (let i = inicio; i <= fim; i++) {
    console.log(i);
    soma += i;
}

console.log("A soma dos números é:", soma);
}

const multiTable = () => {
    let numero = parseInt(prompt("Digite um número (de 1 a 10):"));

console.log("Tabuada de", numero + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numero, "x", i, "=", numero * i);
}
}