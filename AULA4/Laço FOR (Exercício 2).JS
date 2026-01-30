const leia = require('readline-sync');

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let num = leia.questionInt(`Digite o ${i}ºnumero: `);

    if (num % 2 === 0) {
        pares++;
    }else {
        impares++;
    }
}

console.log("\nTotal de números pares: " + pares);
console.log("\nTotal de números impares: " + impares);