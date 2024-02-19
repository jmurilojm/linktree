function calcular() {
  let resolucao = document.getElementById('resolucao')
  let base = document.getElementById('base')
  let altura = document.getElementById('altura')
  let resultado = document.getElementById('resultado')


  // pixel = cm * ppi / 2.54
  pixelBase = (Number(base.value) * Number(resolucao.value) / 2.54).toFixed(0)
  pixelAltura = (Number(altura.value) * Number(resolucao.value) / 2.54).toFixed(0)
  

  resultado.innerText = `${pixelBase} x ${pixelAltura} pixels`
}