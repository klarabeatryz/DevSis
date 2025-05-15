let turno = 16;

if (turno >= 5 && turno <= 12){
    console.log('turno matutino');
}
else if (turno >= 13 && turno <= 19){
    console.log('turno vespertino');   
}
else if (turno >= 20 && turno >= 24){
    console.log('turno noturno');
}
else {
    console.log('turno inválido');
}