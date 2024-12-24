const inNumero = document.getElementById('inNumero');
const btCalcular = document.getElementById('btCalcular');
const outValor = document.getElementById('outValor');


function fatorial(n){
  if(n === 0 || n === 1){
    return n;
  } else{
    return n * fatorial(n -1);
  }
}



inNumero.focus();
btCalcular.addEventListener('click', () => {
  outValor.value = fatorial(inNumero.value);
});


inNumero.addEventListener('keypress', (e) => {
  if(e.keyCode === 13){
    outValor.value = fatorial(inNumero.value);
  }
});