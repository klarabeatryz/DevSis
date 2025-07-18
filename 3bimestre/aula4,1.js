let nomes = ['ana', 'bruno', 'carlos', 'diana', 'eduardo'];
//01) verifique se o nome 'carlos' está na lista e, se estiver, substitua por 'caio'. includes()

//02) depois, remova o nome 'ana' do array. splice()

//03) mostrar array final

let indiceCarlos = nomes.indexOf('carlos');
if (indiceCarlos != -1){
    nomes[indiceCarlos] = 'caio'
}
let indiceAna = nomes.indexOf('ana')
if (indiceAna != -1){
    nomes.splice(indiceAna, 1);
}
console.log(nomes);
console.log(nomes.length);
