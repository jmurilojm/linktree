// coleta de elementos
const btConverter = document.getElementById('btConverter');
const inValor = document.getElementById('inValor');
const saida1 = document.getElementById('outValorDigitado');
const saida2 = document.getElementById('outValorConvertido');
const inSelecao = document.getElementById('inSelecao');
const imgBandeira = document.getElementById('imgBandeira');
const nomeMoeda = document.getElementById('nomeMoeda');



// adicionando escutadores
btConverter.addEventListener('click', fazerConversao);
inSelecao.addEventListener('change', mudarBandeira);



// fazee a conversao de acordo com o select
function fazerConversao() {
  const dinheiro = Number(inValor.value);
  
  const valor = Number(inValor.value).toFixed(2);
  const dolarHoje = 4.99; // 23.01.2024
  const euroHoje = 5.38;
  const bitHoje = 194954.93;
  let calculo;
  const selecao = inSelecao.value;

  if (selecao === 'US$ Dólar') {
    calculo = (valor / dolarHoje).toFixed(2);
    saida2.innerText = 'US$ ' + calculo;
  } else if (selecao === '€ Euro') {
    calculo = (valor / euroHoje).toFixed(2);
    saida2.innerText = '€ ' + calculo;
  } else {
    calculo = (valor / bitHoje).toFixed(10);
    saida2.innerText = 'BTC ' + calculo;
  }

  saida1.innerText = 'R$ ' + valor;
  inValor.value = '';
}


// faz a mudanca de bandeiras
function mudarBandeira() {
  const selecao = inSelecao.value;
  const img = imgBandeira;
  const nome = nomeMoeda;

  if (selecao === 'US$ Dólar') {
    img.src = 'img/eua.jpeg';
    nome.innerText = 'Dólar Americano';
    saida2.innerText = 'US$ 0,00';
    saida1.innerText = 'R$ 0,00';
  } else if (selecao === '€ Euro') {
    img.src = 'img/europa.jpeg';
    nome.innerText = 'Euro';
    saida2.innerText = '€ 0,00';
    saida1.innerText = 'R$ 0,00';
  } else {
    img.src = 'img/bitcoin.png';
    nome.innerText = 'Bitcoins';
    saida2.innerText = 'BTC 0,00';
    saida1.innerText = 'R$ 0,00';
  }
}