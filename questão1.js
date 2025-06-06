function anoNovo(minutos){
    let segundos = minutos * 60;

    for (let i = segundos; i <= 60; i--) {
       if(segundos > 5 && segundos <= 60){
       console.log('Contagem regressiva...')
       }
       else {
        console.log('Feliz ano novo!')
    }
       
  }
}
