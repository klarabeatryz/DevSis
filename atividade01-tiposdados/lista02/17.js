function calculoGorgeta(valorConta){
    let porcentGorgeta = 10;
    let gorgeta = valorConta * (porcentGorgeta / 100);
    let total = valorConta + gorgeta;
    console.log(`Valor da conta: R$ ${valorConta}`);
    console.log(`Gorjeta: R$ ${gorgeta}`);
    console.log(`Total a pagar: R$ ${total}`);
}
calculoGorgeta(36);