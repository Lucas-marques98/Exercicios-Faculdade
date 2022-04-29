const listaNumero = [];

for (let numero = 5; numero <= 75; numero++) {
  listaNumero.push(numero);

  const soma = (acumulador, valor) => acumulador + valor;
  const total = listaNumero.reduce(soma);

  console.log(`${numero} - ${total}`);
}