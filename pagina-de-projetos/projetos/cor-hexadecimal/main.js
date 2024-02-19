const btCor = document.getElementById('btCor').addEventListener('click', () => {
  const cor = corHexa()
  
  // mudar cor da tela
  document.body.style.backgroundColor = cor;
  // mostrar código da cor
  document.getElementById('outCodigo').innerHTML = cor;
  console.log(document.body.style.backgroundColor);
});

function corHexa(){
  const digitos = '0123456789abcdef';
  let codigoGerado = '#';
  
  for(let i = 0; i < 6; i++){
    const posicaoAleatoria = Math.floor(Math.random() * 16)
    codigoGerado += digitos[posicaoAleatoria]
  }
  
  return codigoGerado
}