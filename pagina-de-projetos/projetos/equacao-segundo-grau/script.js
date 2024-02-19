let inA = document.getElementById('inA');
let inB = document.getElementById('inB');
let inC = document.getElementById('inC');
let outResultado = document.getElementById('outResultado');



function calcular() {
  const a = Number(inA.value);
  const b = Number(inB.value);
  const c = Number(inC.value);
  
  
  const delta = b ** 2 - 4 * a * c;
  
  if (delta < 0) {
    outResultado.innerHTML = `∆ = ${delta}<br><br>Delta = Negativo`;
  } else {
    const raizDelta = Math.sqrt(delta);
  
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);
  
    outResultado.innerHTML = `∆: ${delta}<br>√${delta} = ${raizDelta}<br><br>X' = ${x1}<br>X" = ${x2}`;
  }
}

function limpar() {
  inA.value = '';
  inA.focus();
  
  inB.value = '';
  inC.value = '';
  
  outResultado.innerText = '';
}

/*
function calcularRaizEquacaoSegundoGrau(a, b, c) {

  const delta = b ** 2 - 4 * a * c;
  
  if (delta < 0) {
    return 'Delta = Negativo';
  } else {
    const raizDelta = Math.sqrt(delta);
  
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);
  
    return [x1, x2];
  }
}
*/