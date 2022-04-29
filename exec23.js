const readlineSync = require('readline-sync');

const prompt = readlineSync.questionInt('Digite um número: ');

let listaNumero = [];

for (let numero = 1; numero <= prompt; numero++) {
  listaNumero.push(numero);
  listaNumero.sort((num1, num2) => num2 - num1);
}

const numeroFormatado = listaNumero.toString().split(',').join('\n');
console.log(numeroFormatado);