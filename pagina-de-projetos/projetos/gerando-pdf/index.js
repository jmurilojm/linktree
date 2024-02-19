const btImprimir = document.getElementById('btImprimir')

btImprimir.addEventListener('click', function imprimir() {
  const dados = coletarDados()

  const tempo = new Date()
  let numeroImpressao = tempo.getFullYear() +
    '.' + tempo.getDate() +
    '.' + (tempo.getMonth() + 1) +
    '.' + tempo.getHours() +
    '.' + tempo.getMinutes() +
    '.' + tempo.getSeconds()

  var doc = new jsPDF()
  doc.text(dados, 10, 10)
  doc.save(numeroImpressao + '.pdf')

  inNome.value = ''
  inMail.value = ''
  inNome.focus()
})



function coletarDados(){
  const inNome = document.getElementById('inNome')
  const inMail = document.getElementById('inMail')

  const nome = inNome.value
  const mail = inMail.value

  if (nome == '' || mail == '') {
    alert('Por favor, preencha todos os campos!')
    return
  }
  
  const dados = nome + '\n' + mail
  const apresentar = 'Dados informados:\n\nNome: ' + nome + '\nE-mail: ' + mail + '\n\nConfirma?'
  
  const confirmacao = confirm(apresentar)
  
  if (!confirmacao) {
    return
  }
  
  return dados
}