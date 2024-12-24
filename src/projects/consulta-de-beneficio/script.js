function consultar(){
  let dado = document.querySelector('#inDado')
  
  // verificar se esta vazio
  if(!dado.value){
    alert('Informe Nome ou CPF!')
    return
  }
  
  let link = `https://portaldatransparencia.gov.br/busca?termo=${dado.value}`
  window.open(link, '_blank')
  //location.href = link
}