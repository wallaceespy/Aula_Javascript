//exercicio 1
const leia = require("readline-sync");



let A = parseInt(question("Digite o número A: "));
let B = parseInt(question("Digite o número B: "));
let C = parseInt(question("Digite o número C: "));

let soma = A + B;

console.log(`${A} + ${B} = ${soma}`);

if (soma > C) {
    console.log("A Soma de A + B é maior do que C");
} else if (soma < C) {
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log("A Soma de A + B é Igual a C");
}