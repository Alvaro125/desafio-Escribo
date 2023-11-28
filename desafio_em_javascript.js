const readline = require("node:readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Somatorio(numero_entrada) {
  try {
    let total = 0;
    if (numero_entrada<0) throw new Error("Numero deve ser positivo")
    for (let numero = 1; numero < Number(numero_entrada); numero++) {
      if (!(numero % 3) || !(numero % 5)) {
        total += numero;
      }
    }
    return total;
  } catch (err) {
    console.error(err);
  }
}
readline.question(`Digite um numero: `, (entrada) => {
  console.log(`Resultado: ${Somatorio(Number(entrada))}`);
  readline.close();
});
