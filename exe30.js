const readline = require("readline-sync");

const n1 = readline.questionInt("Digite um numero: ");
const n2 = readline.questionInt("Digite outro numero: ");
const n3 = readline.questionInt("Digite outro numero: ");
const n4 = readline.questionInt("Digite outro numero: ");
const n5 = readline.questionInt("Digite outro numero: ");
const n6 = readline.questionInt("Digite outro numero: ");
const n7 = readline.questionInt("Digite outro numero: ");
const n8 = readline.questionInt("Digite outro numero: ");
const n9 = readline.questionInt("Digite outro numero: ");
const n10 = readline.questionInt("Digite outro numero: ");

const numeros = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
let soma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10

let media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) /10

let min = Math.min(...numeros);
let max = Math.max(...numeros);


console.log(soma);
console.log(media);
console.log(min);
console.log(max);




