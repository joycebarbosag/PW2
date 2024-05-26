function verificarNumeroPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    let divisores = [];

    for (let i = 2; i <= numero / 2; i++) {
        // Se o número for divisível por algum inteiro, armazena o divisor
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    // Se a lista de divisores estiver vazia, o número é primo
    if (divisores.length === 0) {
        return true;
    } else {
        // Se a lista de divisores não estiver vazia, o número não é primo
        return divisores;
    }
}

let numero = parseInt(prompt("Digite um número inteiro:"));

let resultado = verificarNumeroPrimo(numero);
if (resultado === true) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo. Ele é divisível por: " + resultado.join(', '));
}
