document.querySelector('#inDado').addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    consultar()
  }
})

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