function codHexa(rgb) {
  /*
  Recebe o número de cor RGB, de 0 a 255, e faz a conversão para Hexadecimal.
  */
  let numNatural = rgb;
  let copia = numNatural % 16;

  numNatural = Math.floor((numNatural / 16)).toFixed(0);
  if (numNatural > 9) {
    if (numNatural == 10) {
      numNatural = 'a';
    }
    else if (numNatural == 11) {
      numNatural = 'b';
    }
    else if (numNatural == 12) {
      numNatural = 'c';
    }
    else if (numNatural == 13) {
      numNatural = 'd';
    }
    else if (numNatural == 14) {
      numNatural = 'e';
    }
    else if (numNatural == 15) {
      numNatural = 'f';
    }
  }

  if (copia > 9) {
    if (copia == 10) {
      copia = 'a';
    }
    else if (copia == 11) {
      copia = 'b';
    }
    else if (copia == 12) {
      copia = 'c';
    }
    else if (copia == 13) {
      copia = 'd';
    }
    else if (copia == 14) {
      copia = 'e';
    }
    else if (copia == 15) {
      copia = 'f';
    }
  }

  const ex = numNatural + copia;
  return ex;
}

const btCor = document.getElementById('btCor').addEventListener('click', () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rH = codHexa(r);
  const gH = codHexa(g);
  const bH = codHexa(b);

  console.log(r, g, b);
  console.log(rH, gH, bH);

  // cor na tela
  document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${r},${g},${b})`;

  // cores para combinações 
  document.getElementById('d1').style.backgroundColor = `rgb(${b},${r},${g})`;
  document.getElementById('d1').innerHTML = `RGB: ${b}, ${r}, ${g}<br><br>Hexadecimal: #${bH}${rH}${gH}`;
  document.getElementById('d2').style.backgroundColor = `rgb(${g},${b},${r})`;
  document.getElementById('d2').innerHTML = `RGB: ${g}, ${b}, ${r}<br><br>Hexadecimal: #${gH}${bH}${rH}`;


  document.getElementById('outCodigo').innerHTML = `RGB: ${r}, ${g}, ${b}<br><br>Hexadecimal: #${rH}${gH}${bH}`;
});