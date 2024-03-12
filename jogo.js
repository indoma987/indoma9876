let numeroSecreto =  Math.random() * 7;
console.log(numeroSecreto);

let chute = prompt('Escolha um numero entre 0 a 10');ty


while(chute == null){
    alert('tente novamente :)')
    chute = prompt('escolha um numero entre 0 a 20.');
}

if(numeroSecreto == chute){
    alert('Parabéns!!!!! Você acertou :)');
    console.log('Parabéns, acertou krh');
} else{
    alert('Que pena, você não acertouu :(');
    console.log('Infelizmente, errou krh :(');
}
