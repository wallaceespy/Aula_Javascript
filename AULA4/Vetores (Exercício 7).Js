
const leia = require('readline-sync');

const vetor = [2, 5, 1, 4, 3, 9, 7, 10, 8, 6];
let numeroBusca = leia.questionInt("Digite o numero que voce deseja encontrar: ");
let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numeroBusca) {
        posicao = i;
        break;
    }
}

if (posicao !== -1) {
    console.log(`O número ${numeroBusca} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numeroBusca} não foi encontrado!`);
}