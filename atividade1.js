// (salario + abono)

const readline = require ("readline-sync");

let salario = readline.questionFloat("Digite o seu salario: ");
let abono = readline.questionFloat("Digite o seu abono: ");

let novoSalario = (salario + abono).toFixed(2);


console.log("Novo salario: " + novoSalario );
