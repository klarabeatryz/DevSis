let codigo = 1;
let quantidade = 4;
let precoCompra, aumento, nomeProduto;

if (codigo == 1) { 
    nomeProduto = "Ovos"; precoCompra = 15; aumento = 0.30;
 }
else if (codigo == 2) 
    { nomeProduto = "Pães"; precoCompra = 5; aumento = 0.25;

     }
else if (codigo == 3) { 
    nomeProduto = "Café"; precoCompra = 7.89; aumento = 0.45; 
}

let precoVenda = (precoCompra + precoCompra) * aumento;
let total = precoVenda * quantidade;

console.log(`Produto: ${nomeProduto}, Preço de Venda: R$ ${precoVenda},Total: R$ ${total}`);