// Exericício 01) Faça um programa que leia 3 números inteiros e apresente o menor deles.

let n1 = 6;
let n2 = 5;
let n3 = 4;

let menor; 
if (n1 < n2){
    menor = 1;
}
else {
    menor = n2;
}
if (n3 < menor){
    menor = n3;
}
console.log(`O menor número é ${menor}`);

