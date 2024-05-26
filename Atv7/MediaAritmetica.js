let numNotas = parseInt(prompt("Digite o número de notas:"));

let somaNotas = 0;

for (let i = 1; i <= numNotas; i++) {
    // Solicita a nota e a converte para um número
    let nota = parseFloat(prompt("Digite a nota " + i + ":"));
    
    somaNotas += nota;
}

let media = somaNotas / numNotas;

console.log("A média aritmética das " + numNotas + " notas é: " + media.toFixed(2));
