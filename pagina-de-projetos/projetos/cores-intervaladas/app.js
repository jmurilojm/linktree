const intervalo = document.getElementById('intervalo')
let timer = 1000
intervalo.innerHTML = `Intervalo de ${timer / 1000} segundos`
cores()

function cores() {
  const tempo = timer

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`

  setTimeout(cores, tempo)
}

function reduzir() {
  timer -= 100
  intervalo.innerHTML = `Intervalo de ${timer / 1000} segundos`
}

function aumentar() {
  timer += 100
  intervalo.innerHTML = `Intervalo de ${timer / 1000} segundos`
}