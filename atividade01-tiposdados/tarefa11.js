let peso = 100;
let altura = 1.55;
let imc = peso /(altura * altura);

if (imc < 18.5){
    console.log('Você está abaixo do peso ideal');
}
else if (imc >= 18.5 & imc <= 24.9){
    console.log('Parabéns, você está em seu peso normal!');
}
else if (imc >= 25 & imc <= 29.9){
    console.log('Você está acima de seu peso (sobrepeso)');
}
else if (imc >= 30.0 & imc <= 34.9){
    console.log('Obesidade grau 1.');
}
else if (imc >= 35 & imc <= 39.9){
    console.log('Obesidade grau 2.');
}
else {
    console.log('Obesidade grau 3.');
}