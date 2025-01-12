const inNome = document.querySelector('#inNome')
const outLista = document.querySelector('#outLista')
const btnRealizarSorteio = document.querySelector('#btnRealizarSorteio')
const btnAdicionarNome = document.querySelector('#btnAdicionarNome')
const btnReiniciar = document.querySelector('#btnReiniciar')
const ganhador = document.querySelector('#ganhador')

let listaDeNomes = []
inNome.focus()
let sorteios = 0

// usar tecla enter para inserção 
inNome.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    addNomeNaLista()
  }
})


function addNomeNaLista(){
  // verificar se há dígito válido antes de adicionar
  if(inNome.value.trim() === '' || inNome.value.trim().length < 2){
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
  listaDeNomes.forEach(nome => {
    // lançar cada nome com a tag <li>
    outLista.innerHTML += `<li>${nome}</li>`
  })
}

function sortearNome(){
  // verificar se há nomes suficientes
  if(listaDeNomes.length < 2){
    alert('Cadastre pelo menos dois Nomes!')
    return
  }
  
  // pegar total de nomes salvos
  let quantidadeDeNomes = listaDeNomes.length
  // sorteio de uma posição aleatória
  let numeroAleatorio = Math.floor(Math.random() * quantidadeDeNomes)
  // o ganhador é quem esta na posição aleatória 
  let nomeDoGanhador = listaDeNomes[numeroAleatorio]
  
  // exibir ganhador na tela
  ganhador.innerHTML = `Parabéns ${nomeDoGanhador}!`
  // remover o sorteado das listas e atualizar
  const liSorteada = outLista.children[numeroAleatorio]
  outLista.removeChild(liSorteada)
  listaDeNomes.splice(numeroAleatorio,1)
  
  // contagem de sorteio
  sorteios++
  numeroDoSorteio.textContent = sorteios
}

function reiniciar() {
  // apos confirmacao, atualizar a pagina para um novo sorteio
  let confirmacao = confirm('Atencao!\n\nTodos os dados serão apagados.')

  if (confirmacao) {
    window.location.reload()
  }
}