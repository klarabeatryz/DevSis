let ano = 2004;
if (ano %400==0){
    console.log('É um ano bissexto.');
}
else if (ano %4==0 && ano %100!==0){
   console.log('É um ano bissexto.');
}
else {
   console.log('Não é um ano bissexto.');
}