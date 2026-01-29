
const leia = require("readline-sync");

let nome = leia.question("Nome do colaborador: ");
let codigoCargo = parseInt(leia.question("Código do cargo: "));
let salario = parseFloat(leia.question("Salário: "));

let cargo = "";
let reajuste = 0;

switch (codigoCargo) {
    case 1:
    cargo = "Gerente";
    reajuste = 0.10;
    break;

    case 2:
    cargo = "Vendedor";
    reajuste = 0.07;
    break;

    case 3:
    cargo = "Supervisor";
    reajuste = 0.09;
    break;

    case 4:
    cargo = "Motorista";
    reajuste = 0.06;
    break;

    case 5:
    cargo = "Estoquista";
    reajuste = 0.05;
    break;

    case 6:
    cargo = "Técnico de T.I";
    reajuste = 0.08;
    break;
    default:
        console.log("Cargo inválido!");
}

if (reajuste > 0) {
    let novoSalario = salario + (salario * reajuste);
    console.log("\n---Resultado---");
    console.log(`Nome do colaborador: ${nome}`);
    console.log(`Cargo: ${cargo}`);
    console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
} 
