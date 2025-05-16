let opcao = 1; 
let n1 = 40, n2 = 70, p1 = 4, p2 = 2; 

if (opcao === 1) {
  let media = (n1 + n2) / 2;
  console.log(media >= 60 ? `Aprovado! Média: ${media}` : media >= 40 ? `Recuperação! Média: ${media}`: `Reprovado! Média: ${media}`);
} 
else if (opcao === 2) {
  let media = (n1 * p1 + n2 * p2) / (p1 + p2);
console.log(media >= 60 ?  }`Aprovado! Média ponderada: ${media}` : media >= 40 ? `Recuperação! Média ponderada: ${media}` : `Reprovado! Média ponderada: ${media}`);
} 
else if (opcao === 3) {
  console.log("Saindo...");
} 
else {
  console.log("Opção inválida.");
}