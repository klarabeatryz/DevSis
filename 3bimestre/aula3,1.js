let frutas = ['maçã', 'banana', 'laranja'];

let indice = frutas.indexOf('banana');

if(indice !== -1){
     //frutas[indice] = 'uva'
     frutas.splice(indice, 1)
}
console.log(frutas)