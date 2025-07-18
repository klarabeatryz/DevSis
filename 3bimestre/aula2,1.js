let alunos = ['felipe', 'gabriel', 'klara', 'lívia', 'cibelly', 'dandara', 'maria clara medeiros', 'maria clara sales', 'joão henrique', 'gabriel felipe', 'rosana'];

alunos = alunos.sort();

for(let i = 0; i < alunos.length; i++) {
    console.log('- ' + alunos[i].toUpperCase());    
}

if(alunos.indexOf('fabricyo') != -1){
    console.log('achei você!');    
}
else{
    console.log('não achei você!');
}
console.log(alunos.includes('klara'));
