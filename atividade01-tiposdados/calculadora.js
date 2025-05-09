// opção 1: média simples de duas notas
// opção 2: média ponderada de 3 notas com pesos 2, 3, 5

function mediaSimples (n1, n2){
    return (n1 + n2) / 2;
}
function mediaPonderada (n1, n2, n3){
    let m = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    return m; 
}
let opcao = 2;
let media;

switch (opcao){
    case 1:
        media = mediaSimples (80, 90);
        console.log(`Média: ${media} pontos `);
        break;
    case 2: 
        media = mediaPonderada (80, 90, 100);
        console.log(`Média: ${media} pontos `);
        break;
    default:
        console.log('Opção inválida');
        break;        
        
}