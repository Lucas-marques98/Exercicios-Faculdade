let numero = 1;

while (numero <= 200) {
  if (numero % 20 === 0) {
    console.log('###')
  } else {
    console.log(`${numero}`)
  }

  numero++;
}