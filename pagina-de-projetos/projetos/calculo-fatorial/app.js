const inNumero = document.getElementById('inNumero');
const btCalcular = document.getElementById('btCalcular');

inNumero.focus();
btCalcular.addEventListener('click', () => {
  const outValor = document.getElementById('outValor');
  
  const fatorialNumero = fatorial(inNumero.value)
  
  outValor.value = fatorialNumero;
});

function fatorial(n){
  if(n === 0 || n === 1){
    return n
  } else{
    return n * fatorial(n -1)
  }
}