let a = 3;
let b = 4;
let c = 5;
if (a > 0 && b > 0 && c > 0 && a %1==0 && b %1==0 && c %1==0){
    if (a * a === b * b + c * c ||
        b * b === a * a + c * c ||
        c * c === a * a + b * b) {
            console.log('os valores formam um triângulo retângulo');
        }
        else {
            console.log('os valores não formam um triângulo retângulo');
        }
}
else {
    console.log('Erro: todos os valores devem ser inteiros e positivos.');
}