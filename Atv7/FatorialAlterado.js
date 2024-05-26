function calcularFatorial(numero) {
    let fatorial = 1;

    if (numero >= 0 && numero < 16) {
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    } else {
        return null; 
    }
}

function obterNumeroValido() {
    let numero;
    while (true) {
        numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial (ou -1 para encerrar):"));
        if (numero === -1) {
            return -1; 
        }
        if (numero >= 0 && numero < 16) {
            return numero; 
        } else {
            console.log("Por favor, digite um número inteiro positivo menor que 16."); 
        }
    }
}

function main() {
    while (true) {
        let numero = obterNumeroValido();
        if (numero === -1) {
            break; 
        }

        let resultado = calcularFatorial(numero);

        if (resultado !== null) {
            console.log(`${numero}! = ${resultado}`);
        } else {
            console.log("O número está fora do intervalo permitido.");
        }
    }
}

main();
