function contarParesEImpares() {
    let quantidadePares = 0;
    let quantidadeImpares = 0;

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt(`Insira o ${i + 1}º número:`));

        if (numero % 2 === 0) {
            quantidadePares++;
        } else {
            quantidadeImpares++;
        }
    }

    console.log(`Quantidade de números pares: ${quantidadePares}`);
    console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);
}

contarParesEImpares();
