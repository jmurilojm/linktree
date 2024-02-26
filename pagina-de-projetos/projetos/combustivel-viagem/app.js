const inDistancia = document.getElementById('inDistancia');
const btVerificarTipo = document.getElementById('btVerificarTipo');

inDistancia.focus();
btVerificarTipo.addEventListener('click', () => {
  const inVeiculo = document.getElementById('inVeiculo');
  const inCombustivel = document.getElementById('inCombustivel');
  const outTipo = document.getElementById('outTipo');
  
  const distancia = Number(inDistancia.value);
  const veiculo = Number(inVeiculo.value);
  const combustivel = Number(inCombustivel.value);
  
  if(inDistancia.value === '' || inVeiculo.value === '' || inCombustivel.value === ''){
    alert('Preencha todos os campos!');
    return;
  }
  
  const idaEVolta = ((distancia / veiculo) * combustivel).toFixed(2);
  
  
  outTipo.innerHTML = `Total de R$ ${idaEVolta}`;
});