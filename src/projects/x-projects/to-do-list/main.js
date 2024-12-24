const inTexto = document.querySelector('#inTexto');
const btAdicionar = document.querySelector('#btAdicionar');
const outTarefas = document.querySelector('#outTarefas');



function adicionarTarefa(){
  // criando espaco para tarefa
  const novaDivTarefa = document.createElement('div');
  novaDivTarefa.classList.add('tarefa');
  
  // criando paragrafo que recebera o texto
  const paragrafoParaTexto = document.createElement('p');
  paragrafoParaTexto.innerText = inTexto.value;
  
  // criando espaco para os ícones 
  const iconeMarcador = document.createElement('div');
  iconeMarcador.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  iconeMarcador.classList = 'corVerde';
  iconeMarcador.addEventListener('click', marcar);
  
  const iconeLixeira = document.createElement('div');
  iconeLixeira.innerHTML = '<i class="bi bi-trash-fill"></i>';
  iconeLixeira.classList = 'corVermelho';
  iconeLixeira.addEventListener('click',apagar)
  
  // adicionando p e ivones a espaco tarefa
  novaDivTarefa.append(paragrafoParaTexto, iconeMarcador, iconeLixeira);
  
  // adicionando a tarefa na caixa das tarefas
  outTarefas.appendChild(novaDivTarefa);
  
  inTexto.value = '';
  inTexto.focus();
}
btAdicionar.addEventListener('click', adicionarTarefa);


// dar funcionalidades aos ícones
function marcar(e){
  const tarefa = e.target.parentNode.parentNode;
  tarefa.classList.toggle('textoMarcado');
}

function apagar(e) {
  const tarefa = e.target.parentNode.parentNode;
  tarefa.remove();
  inTexto.focus()
}

// para aficionar com enter
inTexto.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    adicionarTarefa()
  }
});