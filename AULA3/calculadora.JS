const leia = require("readline-sync");

console.log("\n===================================")
console.log("\n        CALCULADORA COM SWITCH CASE")
console.log("\n===================================")
console.log("1 - Soma                             ")   
console.log("2 - Subtração                        ")  
console.log("3 - Multiplicação                    ")  
console.log("4 - Divisão                          ")                


let numero1 = leia.questionFloat("Digite o primeiro numero: ",
                                            {limitMessage: 'Digite um numero float'}
                                            );

let numero2 = leia.questionFloat("Digite o primeiro numero: ",
                                            {limitMessage: 'Digite um numero float'}
                                            ); 

let operacao = leia.questionInt("Digite o numero da operacao: ",
                                            {limitMessage: 'Digite um numero inteiro'}
                                            );   
                                            
switch(operacao){
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1} + ${numero2}`);
        break;

        case 2:
            console.log(`${numero1} - ${numero2} = ${numero1} - ${numero2}`);
            break;

            case 3:
                console.log(`${numero1} * ${numero2} = ${numero1} * ${numero2}`);
                break;

                case 4:
                    console.log(`${numero1} / ${numero2} = ${numero1} / ${numero2}`);
                    break;
                    default:
                        console.log("Operacao Invalida!");
                
}                                          
