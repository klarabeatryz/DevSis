let turno = 'm'
let m = '(matutino)';
let v = '(vespertino)';
let n = '(noturno)';
if (turno == 'm'){
    console.log('seu turno é o da manhã. '+ m);
}
else if (turno == 'v'){
    console.log('seu turno é o da tarde. '+ v);
}
else if (turno == 'n'){
    console.log('seu turno é o da noite. '+ n);
}
else {
    console.log('turno desconhecido.');
}