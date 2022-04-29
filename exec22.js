let numero = 1;
let listaNumero = [];

while (numero <= 100) {
  listaNumero.push(numero);
  listaNumero.sort((num1, num2) => num2 - num1);
  numero++;
}

const numeroFormatado = listaNumero.toString().split(',').join('\n');

console.log(numeroFormatado);

