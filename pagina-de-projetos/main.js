const outLista = document.getElementById('outLista');

function mostrarProjetos() {
  
  for(let i = 0; i < links.length; i++){
    /*
    Será criado um novo elemento de linha e para cada
    uma linha um elemento âncora que receberá atributos 
    e valores de acordo com a lista de projetos que 
    estão listados no arquivo links.js.
    */
    const novaLinha = document.createElement('li');
    outLista.appendChild(novaLinha)
    
    const novaAncora = document.createElement('a');
    novaAncora.setAttribute('target', '_blank')
  
    novaAncora.setAttribute('href', `./projetos/${links[i].link}/index.html`)
    
    const nomeNoBotao = `${links[i].nome}`
    novaAncora.innerText = nomeNoBotao
    
    novaLinha.appendChild(novaAncora)
  }
  
}

mostrarProjetos()