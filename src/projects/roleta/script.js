const uMilhar = document.querySelector('#uMilhar')
const centena = document.querySelector('#centena')
const dezena = document.querySelector('#dezena')
const unidade = document.querySelector('#unidade')

function iniciar() {
  // zera para uma nova contagem.
  zerarCores(unidade)
  zerarCores(dezena)
  zerarCores(centena)
  zerarCores(uMilhar)
  // botao é ocultado após iniciado os giros.
  ocultarBotao()

  // velocidade do giro igual a 10 e o tempo de parada de cada roleta com mínimo de 4000 milissegundos.
  const velocidade = 10
  const tempoStop = 4000
  // girando todas as roletas.
  let intervaloU = setInterval(gerarUnidade, velocidade)
  let intervaloD = setInterval(gerarDezena, velocidade)
  let intervaloC = setInterval(gerarCentena, velocidade)
  let intervaloUM = setInterval(gerarUMilhar, velocidade)

  // comando de parada.
  setTimeout(stop, tempoStop - 3000, intervaloU, unidade)
  setTimeout(stop, tempoStop - 2000, intervaloD, dezena)
  setTimeout(stop, tempoStop - 1000, intervaloC, centena)
  setTimeout(stop, tempoStop - 0, intervaloUM, uMilhar)

  // com dois segundos a mais, o botao é exibido.
  setTimeout(exibirBotao, tempoStop + 2000)
}

function gerarNumero() {
  let numero = Math.floor(Math.random() * 10)
  return numero
}

function gerarUMilhar() {
  uMilhar.textContent = gerarNumero()
}

function gerarCentena() {
  centena.textContent = gerarNumero()
}

function gerarDezena() {
  dezena.textContent = gerarNumero()
}

function gerarUnidade() {
  unidade.textContent = gerarNumero()
}

function stop(intervalo, elemento) {
  clearInterval(intervalo)
  // estilo do numero o sorteado.
  elemento.style.backgroundColor = 'green'
  elemento.style.color = 'white'
}

function zerarCores(elemento) {
  elemento.style.backgroundColor = 'white'
  elemento.style.color = 'gray'
}

function exibirBotao() {
  //document.querySelector('#btnIniciar').style.display = 'block'
  document.querySelector('#btnReiniciar').style.display = 'block'
}

function ocultarBotao() {
  document.querySelector('#btnIniciar').style.display = 'none'
}

function reiniciar() {
  window.location.reload()
}