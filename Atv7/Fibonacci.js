function fibonacciAteLimite(limite) {
    let fibonacci = [0, 1]; 

    while (fibonacci[fibonacci.length - 1] <= limite) {
        let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximoNumero);
    }

    return fibonacci;
}

let limite = 500;
let serieFibonacci = fibonacciAteLimite(limite);

console.log(`Sequência de Fibonacci até que o valor seja maior que ${limite}:`, serieFibonacci);
