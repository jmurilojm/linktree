document.querySelector('#inNome').addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    adicionarNome()
  }
})

function adicionarNome() {
  // pegar o texto informado e criar um elemento 'li' que ira receber o texto
  let inNome = document.querySelector('#inNome')
  let outLista = document.querySelector('#outLista')
  let nome = document.createElement('li')

  // eliminar os espaços e verificar se foi informado algum nome valido
  inNome.value = inNome.value.trim()

  if (!inNome.value) {
    alert('Informe um nome!')
    inNome.focus()
    return
  } else {
    nome.textContent = inNome.value
    outLista.appendChild(nome)

    inNome.value = ''
    inNome.focus()
  }

  // habilitar botao de realizar sorteio, apos inclusao de pelo menos dois nomes
  let nomes = document.querySelector('#outLista')
  let quantidade = nomes.children.length

  if (quantidade >= 2) {
    document.querySelector('#btnRealizarSorteio').removeAttribute('disabled')
  }
}

function realizarSorteio() {
  // pegar a quantidade de elementos inseridos e, pos confirmacao, realizar o sorteio
  let nomes = document.querySelector('#outLista')
  let quantidade = nomes.children.length

  let confirmacao = confirm('Sortear?')

  if (confirmacao) {
    let sorteado = Math.floor(Math.random() * quantidade)
    let nomeSorteado = nomes.children[sorteado].textContent
    
    // estilizando o sorteado
    nomes.children[sorteado].style.backgroundColor = 'coral'

    let nomeGanhador = document.querySelector('#nomeGanhador')
    nomeGanhador.textContent = nomeSorteado

    // desabilitar botoes
    document.querySelector('#btnRealizarSorteio').setAttribute('disabled', 'disabled')
    document.querySelector('#btnAdicionarNome').setAttribute('disabled', 'disabled')
    document.querySelector('#inNome').setAttribute('disabled', 'disabled')

    // habilitar botao
    document.querySelector('#btnReiniciar').removeAttribute('disabled')
  }
}

function reiniciar() {
  // apos confirmacao, atualizar a pagina para um novo sorteio
  let confirmacao = confirm('Realizar Novo Sorteio?')

  if (confirmacao) {
    window.location.reload()
  }
}