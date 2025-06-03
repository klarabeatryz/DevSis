let cont = 0;
for (let i = 1; i <= 1000; i++) {
  if (1000 % i === 0) {
    cont++;
  }
}

console.log("Quantidade de divisores de 1000 entre 1 e 1000 é:", cont);