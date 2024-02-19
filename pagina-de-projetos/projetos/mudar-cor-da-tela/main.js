const tela = document.getElementById('tela');
const cor1 = 'dodgerblue';
const cor2 = 'white';

function mudarCor() {
  if (tela.style.backgroundColor != cor1) {
    tela.style.backgroundColor = cor1;
  } else {
    tela.style.backgroundColor = cor2;
  }
}