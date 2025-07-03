//Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras 
// e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo:

//SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS



const readline = require ("readline-sync");

let salarioBruto = readline.questionFloat("Digite a seu salario bruto: ");
let adicionalNoturno = readline.questionFloat("Digite o seu adicional noturno ");
let horasExtras = readline.questionFloat("Digite as suas horas extras: ");
let descontos = readline.questionFloat("Digite o desconto: ");


let salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras*5) - descontos).toFixed(2);


console.log("Salario liquido: " + salarioLiquido);