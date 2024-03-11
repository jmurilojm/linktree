const inNumero = document.getElementById('inNumero');
const btCalcular = document.getElementById('btCalcular');
const outValor = document.getElementById('outValor');


function fibonacci(n){
  sequencia = [];
  antiAnterior = 1;
  anterior = 1;
  
  for(let x = 0; x < n; x++){
    if(x === 0){
      sequencia.push(1);
    } else if(x === 1){
      sequencia.push(x);
    } else{
      proximo = anterior + antiAnterior;
      sequencia.push(proximo);
      antiAnterior = anterior;
      anterior = proximo;
    }
  }
  return sequencia;
}



inNumero.focus();
btCalcular.addEventListener('click', () => {
  outValor.innerText = fibonacci(inNumero.value);
});

// usando a tecla enter
inNumero.addEventListener('keypress', (e) => {
  if(e.keyCode === 13){
    outValor.innerText = fibonacci(inNumero.value);
  }
});