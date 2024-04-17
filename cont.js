const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');
console.log(botoes.length);

for (let sas = 0; sas < botoes.length; sas++){
console.log(sas);
botoes[sas].onclick = function(){
    for(let j = 0; j < botoes.length; j++){
        botoes[j].classList.remove('ativo');
        textos[j].classList.remove('ativa');
    }
botoes[sas].classList.add('ativo');
textos[sas].classList.add('ativa');
}
}

const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date ('2024-04-19T00:00:00');
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = tempoFinal/1000;

contadores[0].textContent = segundos;

