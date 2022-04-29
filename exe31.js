const readline = require("readline-sync");

const n1 = readline.questionInt("Digite um numero: ");
const n2 = readline.questionInt("Digite outro numero: ");
const n3 = readline.questionInt("Digite outro numero: ");
const n4 = readline.questionInt("Digite outro numero: ");
const n5 = readline.questionInt("Digite outro numero: ");

let numero = [n1,n2,n3,n4,n5]

console.log(`Os números digitados pelo usuário, em ordem crescente são:  ${numero.sort()}`);