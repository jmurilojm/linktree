let itens = []

function cadastrar() {
  let numero = Number(document.getElementById('numero').value)
  let lista = document.getElementById('listagem')


  if (numero == '' || numero > 100 || itens.indexOf(numero) != -1) {
    alert('Número existente ou inválido!')
  } else {
    itens.push(numero)
    document.getElementById('numero').value = ''
    lista.innerText = itens
  }
  document.getElementById('numero').focus()
}


function finalizar(){
  let saida = document.getElementById('tela')
  
  let quantidade = itens.length
  let maior = Math.max(...itens)
  let menor = Math.min(...itens)
  let soma = somarLista(itens)
  let media = soma / quantidade
  
  
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

function limpar(){
  itens = []
  document.getElementById('numero').value = ''
  document.getElementById('tela').innerText = ''
  document.getElementById('listagem').innerText = ''
}
