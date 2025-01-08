const inNome = document.querySelector('#inNome')
const outLista = document.querySelector('#outLista')
const btnRealizarSorteio = document.querySelector('#btnRealizarSorteio')
const btnAdicionarNome = document.querySelector('#btnAdicionarNome')
const btnReiniciar = document.querySelector('#btnReiniciar')
const nomeGanhador = document.querySelector('#nomeGanhador')

let listaDeNomes = []
inNome.focus()

// usar tecla enter para inserção 
inNome.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    addNomeNaLista()
  }
})


function addNomeNaLista(){
  // verificar se há dígito válido antes de adicionar
  if(inNome.value.trim() === '' || inNome.value.length < 2){
    alert('Valor inválido!')
    return
  }
  
  // adicionar nome na lista
  listaDeNomes.push(inNome.value.trim())
  // limpar lista exibida para atualizar
  outLista.innerHTML = ''
  // imprimir lista atraves da função 
  imprimirLista()
  // limpar campo input
  inNome.value = ''
  inNome.focus()
}

function imprimirLista(){
  // iterar nomes da lista
  listaDeNomes.forEach(n => {
    // lançar cada nome com a tag <li>
    outLista.innerHTML += `<li>${n}</li>`
  })
}

function sortearNome(){
  // verificar se há nomes suficientes
  if(listaDeNomes.length < 2){
    alert('Cadastre pelo menos dois Nomes!')
    return
  }
  
  // pegar total de nomes salvos
  let quantidade = listaDeNomes.length
  // sorteio de uma posição aleatória
  let sorteado = Math.floor(Math.random() * quantidade)
  // o ganhador é quem esta na posição aleatória 
  let ganhador = listaDeNomes[sorteado]
  
  // exibir ganhador na tela
  nomeGanhador.innerHTML = `${ganhador}`
  // remover o sorteado das listas e atualizar
  const liSorteado = outLista.children[sorteado]
  outLista.removeChild(liSorteado)
  listaDeNomes.splice(sorteado,1)
}

function reiniciar() {
  // apos confirmacao, atualizar a pagina para um novo sorteio
  let confirmacao = confirm('Atencao!\n\nTodos os dados serão apagados.')

  if (confirmacao) {
    window.location.reload()
  }
}