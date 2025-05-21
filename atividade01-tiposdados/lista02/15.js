function saudacao(nome = 'Visitante', saudacao = 'bem-vindo (a)') {
  console.log(`${saudacao}, ${nome}!`);
}
saudacao('maria'); 
// se não tiver nome, vai sair (Visitante).