let r = 0;
let g = 0;
let b = 0;

document.getElementById('red').addEventListener('change', (evento) => {
  r = evento.target.value;
  //console.log('Vermelho: ' + r);
  mudarCor(r, g, b);
});

document.getElementById('green').addEventListener('change', (evento) => {
  g = evento.target.value;
  //console.log('Verde: ' + g);
  mudarCor(r, g, b);
});

document.getElementById('blue').addEventListener('change', (evento) => {
  b = evento.target.value;
  //console.log('Azul: ' + b);
  mudarCor(r, g, b);
});

function mudarCor(codR, codG, codB) {
  document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${codR},${codG},${codB})`;
  console.log(codR, codG, codB);
  
  if(codR > 200 || codG > 200 || codB > 200){
    document.getElementsByTagName('body')[0].style.color = 'black';
  } else {
    document.getElementsByTagName('body')[0].style.color = 'white';
  }
  
  document.getElementById('outCodigo').innerText = `RGB: (${codR}, ${codG}, ${codB})`;
}