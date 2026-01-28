const leia = require("readline-sync");


let numero = parseInt(question("Digite um número: "));

let parOuImpar;
let positivoOuNegativo;

if(numero % 2 === 0) {
    parOuImpar = "par";
} else {
    parOuImpar = "ímpar";
}

if (numero >= 0) {
    positivoOuNegativo = "positivo";
} else {
    positivoOuNegativo ="negativo";
}

console.log(`O Número ${numero} é ${parOuImpar} e ${positivoOuNegativo}!`);