const btGerar = document.getElementById('btGerar');
const outCitacao = document.getElementById('outCitacao');
const outAutor = document.getElementById('outAutor');


buscarCitacao();
btGerar.addEventListener('click', buscarCitacao);


function buscarCitacao() {
  const linha = Math.floor(Math.random() * texto.length);

  outCitacao.innerText = `"${texto[linha].frase}"`;
  outAutor.innerText = texto[linha].autor;
}