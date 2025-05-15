let idade = 121;

if (idade == 0 & idade > 3) {
   console.log("Bebê");
}
else if (idade >= 4 & idade == 11) {
   console.log("Criança");
}
else if (idade > 11 & idade < 13) {
    console.log("Pré-adolescente");
}
else if ( idade > 13 & idade < 18) {
    console.log("Adolescente");
}
else if (idade > 17 & idade < 65){
    console.log("Adulto");
}
else if (idade >= 65 & idade <= 120) {
    console.log("idoso");
}
else {
    console.log("Erro: idade inválida.")
}
