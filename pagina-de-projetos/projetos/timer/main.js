setInterval(function() {
  let tela = document.querySelector('.timer')
  let data = new Date()
  tela.innerHTML = data.toLocaleTimeString()
}, 1000);