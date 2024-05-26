function calcularFatorial(numero) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let resultado = calcularFatorial(numero);

console.log(`${numero}! = ${resultado}`);