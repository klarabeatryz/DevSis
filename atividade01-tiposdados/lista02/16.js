 function calcularSalarioLiquido(salarioBruto) {
  let desconto = 0;
  let porcentagem = 0;

  if (salarioBruto <= 1518.00) {
    porcentagem = 5;
  } else if (salarioBruto <= 2826.65) {
    porcentagem = 7.5;
  } else if (salarioBruto <= 3751.05) {
    porcentagem = 15;
  } else {
    porcentagem = 27.5;
  }

  desconto = salarioBruto * (porcentagem / 100);
  let salarioLiquido = salarioBruto - desconto;

  console.log(`Salário Bruto: R$ ${salarioBruto}`);
  console.log(`Desconto (${porcentagem}%): R$ ${desconto}`);
  console.log(`Salário Líquido: R$ ${salarioLiquido}`);
}
calcularSalarioLiquido(1500);