const btVerificarTipo = document.getElementById('btVerificarTipo');

btVerificarTipo.addEventListener('click', () => {
  const inLado1 = document.getElementById('inLado1');
  const inLado2 = document.getElementById('inLado2');
  const inLado3 = document.getElementById('inLado3');
  const outTipo = document.getElementById('outTipo');
  
  const lado1 = Number(inLado1.value);
  const lado2 = Number(inLado2.value);
  const lado3 = Number(inLado3.value);
  
  
  let tipo;
  
  if (lado1 == lado2 && lado2 == lado3) {
    tipo = 'EQUILÁTERO<br><br>TODOS os lados são IGUAIS.';
  } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    tipo = 'ESCALENO<br><br>TODOS os lados são DIFERENTES.';
  } else {
    tipo = 'ISÓSCELES<br><br>DOIS lados são IGUAIS.';
  }
  
  outTipo.innerHTML = tipo;
});