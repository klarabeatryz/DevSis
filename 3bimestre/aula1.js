let alunos = [];
//inserindo dados na última posição
alunos.push('ruan');
alunos.push('jh');
alunos.push('cibelly');

console.log(alunos);

//removendo dados na última posição
alunos.pop();
console.log(alunos);

//inserindo elementos no primeiro índice
alunos.unshift('dandara');
alunos.unshift('m° helena');
console.log(alunos);

//removendo alunos no primeiro índice
alunos.shift();
console.log(alunos);

//tamanho do array
console.log('tamanho do array: '+ alunos.length);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);

//livre
alunos.push('klara');
alunos.unshift('felipin');

console.log('antes: ' + alunos);

console.log(alunos.reverse());

console.log(alunos[0]);



