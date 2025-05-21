function frete(pesoKg){
    let precoPKg = 2.89;
    let valorFrete = pesoKg * precoPKg;
    return valorFrete;
}
console.log(`O valor do frete é: R$ ${frete(3)}`)