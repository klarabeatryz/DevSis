let idade = 17;
let msg = '';

if (idade >= 18){
    msg = 'adulto'; 
}
else if (idade >= 16){
    msg = 'adolescente'
}
else {
    msg = 'criança'
}
console.log('Você é ' + msg)