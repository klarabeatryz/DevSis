function calcularFolhaPagamento() {
    let valorHora = 15;
    let horasTrabalhadas = 160;
    let salarioBruto = valorHora * horasTrabalhadas;

    let ir = salarioBruto <= 1000 ? 0 : salarioBruto <= 1200 ? salarioBruto * 0.05 : salarioBruto <= 2300 ? salarioBruto * 0.10 : salarioBruto * 0.20;

    let inss = salarioBruto * 0.10;
    let sindicato = salarioBruto * 0.03;
    let fgts = salarioBruto * 0.11;

    let totalDescontos = ir + inss + sindicato;
    let salarioLiquido = salarioBruto - totalDescontos;

    console.log(`Salário Bruto: R$ ${salarioBruto}`);
    console.log(`(-) IR: R$ ${ir}`);
    console.log(`(-) INSS: R$ ${inss}`);
    console.log(`(-) Sindicato: R$ ${sindicato}`);
    console.log(`FGTS: R$ ${fgts}`);
    console.log(`Total de Descontos: R$ ${totalDescontos}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido}`);

    calcularFolhaPagamento();
}
