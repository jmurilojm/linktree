function calcular() {
  let base = document.getElementById('base')
  let altura = document.getElementById('altura')
  let resultado = document.getElementById('resultado')


  let area = Number(base.value) * Number(altura.value)


  resultado.innerText = `= ${area} m²`
}