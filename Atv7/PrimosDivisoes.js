function verificarNumeroPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    // Verificar divisibilidade do número por todos os inteiros de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Se o número for divisível por algum inteiro, não é primo
        if (numero % i === 0) {
            return false;
        }
    }

    // Se o número não for divisível por nenhum outro número além de 1 e ele mesmo, é primo
    return true;
}

let N = parseInt(prompt("Digite um número inteiro N:"));

let primosEncontrados = [];

let numeroDeDivisoes = 0;

// Verifica cada número de 1 a N para saber se é primo
for (let i = 2; i <= N; i++) {
    // Verifica se o número atual é primo
    if (verificarNumeroPrimo(i)) {
        // Se for primo, adiciona à lista de primos encontrados
        primosEncontrados.push(i);
    }
    // Incrementa o número de divisões realizadas
    numeroDeDivisoes++;
}

console.log("Números primos entre 1 e " + N + ": " + primosEncontrados.join(', '));
console.log("Número de divisões realizadas: " + numeroDeDivisoes);
