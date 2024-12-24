let totalDeCliques = 0; // guardar os cliques.
let tempo = 5; // tempo inicial de 5seg.
let intervalo; // guarda o estado da funcao setInterval().
let maiorTotal = 0; // maior pontuacao.


const outMelhorPonto = document.getElementById('outMelhorPonto');
const btClick = document.getElementById('btClick');
const btInicio = document.getElementById('btInicio');
const outCronometro = document.getElementById('outCronometro');

btInicio.addEventListener('click', iniciar);
btClick.style.backgroundColor = 'gray'; // inicia na cor cinza e so muda ao clicar em iniciar.



function timer() {
  tempo--; // diminui -1 a cada vez que é chamado pelo setIterval() é acionado a chamar a funcao iniciar().
  outCronometro.innerText = tempo; // mostra na tela.
  if (tempo == 0) {
    reiniciar();// funcao chamada para reiniciar valores do botao de clique e interromper o setInterva().

    if (totalDeCliques > maiorTotal) {
      maiorTotal = totalDeCliques;
    } // verifica se a quantidade de cliques atual é maior que a anterior que esta salva na variavel.

  }
}

function iniciar() {
  if(!btClick.hasAttribute('disabled')){
    // verifica se o play ja esta ativado.
    return;
  }
  
  outMelhorPonto.innerText = maiorTotal;// coloca a pontuacao como melhor, caso seja ela maior que a anterior.
  
  btClick.addEventListener('touchstart', clicar); // coloca o escutador de toques.
  btClick.removeAttribute('disabled'); // remove o desabilitador do botao.
  totalDeCliques = 0; // recebe zero como se estivesse reiniciando nova partida.
  outCliques.innerText = totalDeCliques; // mostra na tela.
  tempo = 5; // tempo volta para 5seg.
  outCronometro.innerText = tempo; // mostra na tela.
  btClick.style.backgroundColor = 'orangered'; // botao ativado recebe essa cor.

  intervalo = setInterval(timer, 1000); // inciando a contagem com setInterval().
}

function clicar() {
  totalDeCliques++; // a cada clique adiciona-se +1 a variavel.
  document.getElementById('outCliques').innerText = totalDeCliques; // mostra na tela.
}

function zerar() {
  reiniciar();// funcao chamada para reiniciar valores do botao de clique e interromper o setInterva().
  
  totalDeCliques = 0;
  maiorTotal = 0;
  outMelhorPonto.innerText = 0;
  outCronometro.innerText = 5;
  outCliques.innerText = 0;
}

function reiniciar(){
  clearInterval(intervalo); // pegando a varial do setInterval() para para-lo.
  btClick.setAttribute('disabled', true); // desabilita o botao.
  btClick.removeEventListener('touchstart', clicar); // remove o escutador de toques de tela.
  btClick.style.backgroundColor = 'gray'; // coloca a cor cinza apos zerar o tempo e desabilitar o botao.
}