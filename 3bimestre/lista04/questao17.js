let produtos = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça Jeans", preco: 79.90 },
];

produtos.forEach((produto, index) => {
  console.log(`Produto ${index + 1}: ${produto.nome} - R$ ${produto.preco}`);
});