function calcularPotencia(base, expoente) {
    let resultado = 1;

    if (expoente >= 0) {
        for (let i = 0; i < expoente; i++) {
            resultado *= base;
        }
    } else {
        for (let i = 0; i < -expoente; i++) {
            resultado *= base;
        }
        resultado = 1 / resultado;
    }

    return resultado;
}

function main() {
    let base = parseFloat(prompt("Insira a base:"));
    let expoente = parseInt(prompt("Insira o expoente:"));

    let resultado = calcularPotencia(base, expoente);

    console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
}

main();
