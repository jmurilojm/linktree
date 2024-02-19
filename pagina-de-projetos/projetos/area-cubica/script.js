function calcular() {
  let base = document.getElementById('base')
  let altura = document.getElementById('altura')
  let profundidade = document.getElementById('profundidade')
  let resultado = document.getElementById('resultado')


  let area = Number(base.value) * Number(altura.value) * Number(profundidade.value)


  resultado.innerText = `= ${area} m³`
}