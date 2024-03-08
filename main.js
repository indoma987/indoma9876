alert('Bom dia povoo');
var nomeUsuario = '';
var texto = document.querySelector('span');

texto.textContent = nomeUsuario;

while(nomeUsuario == '' ) { // || nomeUsuario == null
    nomeUsuario = prompt('Qual seu nome??')
}

if (nomeUsuario == null){ 
  texto.textContent = 'Usuario';
} else { 
    texto.textContent = 
}
