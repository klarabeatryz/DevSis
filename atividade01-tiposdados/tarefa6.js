//Solicite um número e verifique se ele é negativo, caso seja, verifique se ele é par ou ímpar.
let n = -4;
let par = n%2==0;
let impar = n%2 != 0;

// if (n < 0 && n == par){
//     console.log('O número é negativo e par.');
// }
// else if (n < 0 && n == impar) {
//     console.log('O número é negativo e impar.');
// }
// else {
//     console.log('O número não é negativo.');
// }

if (n < 0) {
    console.log("Número negativo!");
    if(n % 2 == 0){
        console.log("O número é par");
    }
    else {
        console.log("O número é impar");
    }
} 
else {
    console.log("O número é positivo");
}