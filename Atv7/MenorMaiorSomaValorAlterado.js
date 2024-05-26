function calcularMenorMaiorESoma(valores) {
    let menor = valores[0];
    let maior = valores[0];
    let soma = 0;

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

function obterValores() {
    let valores = [];
    let valor;

    while (true) {
        valor = parseInt(prompt("Digite um número (0 a 1000), ou 'fim' para encerrar:"));

        if (isNaN(valor)) {
            break; 
        }

        if (valor >= 0 && valor <= 1000) {
            valores.push(valor);
        } else {
            console.log("Por favor, digite um número entre 0 e 1000."); 
        }
    }

    return valores;
}

let conjunto = obterValores();

if (conjunto.length > 0) {
    let resultado = calcularMenorMaiorESoma(conjunto);

    console.log("Menor valor:", resultado.menor);
    console.log("Maior valor:", resultado.maior);
    console.log("Soma dos valores:", resultado.soma);
} else {
    console.log("Nenhum número válido foi inserido.");
}
