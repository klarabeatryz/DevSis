let numeros = [1, 2, -3];
let numeroNegativo = numeros.some (numeros => numeros < 0);

if (numeroNegativo) {
  console.log("O array tem um número negativo.");
} else {
  console.log("O array não tem números negativos.");
}