function calcularMenorMaiorESoma(valores) {
    let menor = valores[0];
    let maior = valores[0];
    let soma = 0;

    // Percorrer todos os valores
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i];

        if (valores[i] < menor) {
            menor = valores[i];
        }

        if (valores[i] > maior) {
            maior = valores[i];
        }
    }

    return { menor: menor, maior: maior, soma: soma };
}

let conjunto = [5, 8, 2, 10, 3];
let resultado = calcularMenorMaiorESoma(conjunto);

console.log("Menor valor:", resultado.menor);
console.log("Maior valor:", resultado.maior);
console.log("Soma dos valores:", resultado.soma);
