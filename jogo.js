let numeroSecreto = 7;

let chute = '';

while(chute == ''){
    chute = prompt('Escolha um número entre 0 a 10.');
}

if(numeroSecreto == chute){
    alert('Parabéns!!!!! Você acertou :)');
    console.log('Parabéns, acertou krh');
} else{
    alert('Que pena, você não acertouu :(');
    console.log('Infelizmente, errou krh :(');
}
