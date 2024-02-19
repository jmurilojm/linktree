let listaNumeros = []

function cadastrar() {
  const inNumero = document.getElementById('inNumero')
  const outSaida = document.getElementById('outSaida')
  
  const numero = Number(inNumero.value)
  const saida = outSaida


  if (numero == '' || numero > 100 || listaNumeros.indexOf(numero) != -1) {
    alert('Número existente ou inválido!')
    return
  } else {
    listaNumeros.push(numero)
    saida.textContent = listaNumeros
    inNumero.value = ''
  }
  inNumero.focus()
}


function mostraInformacoes(){
  let saida = document.getElementById('tela')
  
  let quantidade = listaNumeros.length
  let maior = Math.max(...listaNumeros)
  let menor = Math.min(...listaNumeros)
  let soma = somarLista(listaNumeros)
  let media = mediaArray(listaNumeros)
  
  
  saida.innerHTML = 
  '<p>Total de elementos: '+quantidade+
  '</p><p>Maior elemento: '+maior+
  '</p><p>Menor: '+menor+
  '</p><p>Soma dos elementos: '+soma+
  '</p><p>Media: '+media+'</p>'
}


function somarLista(parametro){
  let soma = 0
  
  for(i of parametro){
    soma += Number(i)
  }
  return soma
}


function mediaArray(array){
  const tamanho = array.length
  let soma = 0
  
  for (i of array) {
    soma += Number(i)
  }
  
  const media = (soma / tamanho).toFixed(1)
  
  return media
}