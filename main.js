alert('Bom dia povoo');
var nomeUsuario = '';
var texto = document.querySelector('span');

texto.textContent = nomeUsuario;

while(nomeUsuario == ''){
    nomeUsuario = prompt('Qual seu nome??')
}

