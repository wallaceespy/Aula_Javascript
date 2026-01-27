//console.log(mensagem);

console.log("Salário Líquido: ",
new Intl.NumberFormat('pt-Br',{
    style: 'currency',
    currency:'BRL',
}).formatToParts(salarioBruto + (bonus * salarioBruto))
)