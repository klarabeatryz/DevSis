
let numero = 121;
let Primo = true;

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        Primo = false;
    }
}

if (Primo) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}

// Questão 21.