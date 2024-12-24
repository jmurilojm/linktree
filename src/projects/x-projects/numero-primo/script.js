function isPrimo() {
  const inNumero = document.getElementById('inNumero');
  const outResultado = document.getElementById('outResultado');

  const numero = Number(inNumero.value);

  let cont = 1;
  let totalDivisores = false;
  //let divisores = [];

  while (cont <= numero) {
    if (numero % cont == 0) {
      totalDivisores++;
      //divisores.push(cont);
    }
    cont++;
  }

  if (totalDivisores == 2) {
    outResultado.innerText = `O número ${numero} é SIM um Número Primo`;
    inNumero.value = '';
    inNumero.focus();
  } else {
    outResultado.innerHTML = `O número ${numero} NÃO é Primo, pois ele possui um total de ${totalDivisores} divisores.`;
    inNumero.value = '';
    inNumero.focus();
  }
}