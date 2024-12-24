const outDenominadores = document.getElementById('outDenominadores');
const inNumero = document.getElementById('inNumero');
const btAdicionar = document.getElementById('btAdicionar');
const btLimpar = document.getElementById('btLimpar');
const outValor = document.getElementById('outValor');


let listaDenominadores = [];
inNumero.focus();


function adicionar() {
  if (Number(inNumero.value) === 0 || isNaN(Number(inNumero.value))) {
    inNumero.value = '';
    inNumero.focus();
    return;
  }
  if (Number(inNumero.value) < 0) {
    inNumero.value *= -1;
  }
  listaDenominadores.push(Number(inNumero.value));
  outDenominadores.value = listaDenominadores;
  inNumero.value = '';
  inNumero.focus();
  calcular();
}

function calcular() {
  if (listaDenominadores.length === 0) {
    inNumero.focus();
    return;
  }

  // Encontrando MMC.
  const numeros = [...listaDenominadores];
  let maior = Math.max(...numeros);
  let multiplicador = 1;
  let copiaMaior = maior;

  while (true) {
    let cont = 0;
    for (let x = 0; x < numeros.length; x++) {
      if (copiaMaior % numeros[x] === 0) {
        cont++
      }
    }
    if (cont === numeros.length) {
      break;
    } else {
      copiaMaior = maior * multiplicador;
    }
    multiplicador++;
  }
  //console.log('MMC = ' + copiaMaior);


  // Encontrando MDC.
  //const numeros = [400,320];
  let menor = Math.min(...numeros);
  let copiaMenor = menor;

  while (true) {
    let cont = 0;
    for (let x = 0; x < numeros.length; x++) {
      if (numeros[x] % copiaMenor === 0) {
        cont++;
      }
    }
    if (cont === numeros.length) {
      break;
    } else {
      copiaMenor--;
    }
  }
  //console.log('MDC = ' + copiaMenor);
  outValor.innerHTML = `MMC = ${copiaMaior}<br>MDC = ${copiaMenor}`;
}

function limpar() {
  listaDenominadores = [];
  outDenominadores.value = '';
  inNumero.focus();
  outValor.innerText = '';
}



btAdicionar.addEventListener('click', adicionar);
btLimpar.addEventListener('click', limpar);

inNumero.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    adicionar();
  }
});