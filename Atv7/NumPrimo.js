function verificarNumeroPrimo(numero) {
    // Números menores que 2 não são primos
    if (numero < 2) {
        return false;
    }

    // Verificar divisibilidade do número por todos os inteiros de 2 até a metade do número
    for (let i = 2; i <= numero / 2; i++) {
        // Números divisíveis por algum inteiro, não são primos
        if (numero % i === 0) {
            return false;
        }
    }

    // Se o número não for divisível por nenhum outro número além de 1 e ele mesmo, é primo
    return true;
}

let numero = parseInt(prompt("Digite um número inteiro:"));

if (verificarNumeroPrimo(numero)) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}
