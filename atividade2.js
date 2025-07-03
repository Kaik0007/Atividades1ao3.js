//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. 
//CALCULAR MÉDIA = (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4



const readline = require ("readline-sync");

let Nota1 = readline.questionFloat("Digite a sua primeira nota: ");
let Nota2 = readline.questionFloat("Digite a sua segunda nota: ");
let Nota3 = readline.questionFloat("Digite a sua terceira nota: ");
let Nota4 = readline.questionFloat("Digite a sua quarta nota: ");


let media = ((Nota1+Nota2+Nota3+Nota4) /4).toFixed(2);


console.log("Media: " + media);
