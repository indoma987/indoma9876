let numeroSecreto = 7;

let chute = '';

while(chute == ''){
    chute = prompt('Escolha um número entre 0 a 10.');
}

<<<<<<< HEAD
while(chute == null || chute != numeroSecreto){
    alert('tente novamente :)')
    chute = prompt('escolha um numero entre 0 a 10.');
}

=======
>>>>>>> 85e7dd54e68f3e665d906d471c9d6d6ec1a5f11e
if(numeroSecreto == chute){
    alert('Parabéns!!!!! Você acertou :)');
    console.log('Parabéns, acertou krh');
} else{
    alert('Que pena, você não acertouu :(');
    console.log('Infelizmente, errou krh :(');
}
