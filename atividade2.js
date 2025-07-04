//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. 
//CALCULAR MÉDIA = (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4



const readline = require ("readline-sync");

let nota1 = readline.questionFloat("Digite a sua primeira nota: ");
let nota2 = readline.questionFloat("Digite a sua segunda nota: ");
let nota3 = readline.questionFloat("Digite a sua terceira nota: ");
let nota4 = readline.questionFloat("Digite a sua quarta nota: ");


let media = ((nota1+nota2+nota3+nota4) /4).toFixed(2);


console.log("Media: " + media);
