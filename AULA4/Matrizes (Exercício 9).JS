const leia = require('readline-sync');

let matriz = [[], [], []];
let diagPrincipal = "";
let diagSecundaria = "";
let somaPrincipal = 0;
let somaSecundaria = 0;

// Entrada de dados
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Digite o elemento [${i}][${j}]: `);
    }
}

// Processamento
for (let i = 0; i < 3; i++) {
    diagPrincipal += matriz[i][i] + " ";
    somaPrincipal += matriz[i][i];
    
    diagSecundaria += matriz[i][2 - i] + " ";
    somaSecundaria += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal: " + diagPrincipal);
console.log("Elementos da Diagonal Secundária: " + diagSecundaria);
console.log("Soma dos Elementos da Diagonal Principal: " + somaPrincipal);
console.log("Soma dos Elementos da Diagonal Secundária: " + somaSecundaria);