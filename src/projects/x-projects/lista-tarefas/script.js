const inTexto=document.querySelector('#inTexto');
const btAdicionar=document.querySelector('#btAdicionar');
const outTarefas=document.querySelector('#outTarefas');

const texto=inTexto;
const botaoAdicionar=btAdicionar;
const listaTarefas=outTarefas;


botaoAdicionar.addEventListener('click',adicionar);
texto.addEventListener('keyup',(e)=>{
  if(e.keyCode===13){
    e.preventDefault();// evitar problemas
    botaoAdicionar.click();
  }
})// usando a tecla enter


let cont=0;// fará parate do id de cada div
function adicionar(){
  const novaDiv=`
  <div class="tarefa" id=${cont}>
    <div class="icone" onclick="marcarTarefa(${cont})"><span class="material-symbols-outlined">check_circle</span>
    </div>
    <div class="texto" onclick="marcarTarefa(${cont})">${texto.value}</div>
    <div onclick="deletar(${cont})" class="lixeira">
        <span class="material-symbols-outlined">delete</span>
    </div>
  </div>`;
  
  listaTarefas.innerHTML+=novaDiv;
  
  cont++
  texto.value='';
  texto.focus();
}


function deletar(id){
  const apagarDiv=document.getElementById(id);
  
  apagarDiv.remove();
}


function marcarTarefa(id){
  const marcarDiv=document.getElementById(id);
  const classDiv=marcarDiv.getAttribute('class');
  
  if(classDiv==='tarefa'){
    marcarDiv.classList.add('feito');
  } else{
    marcarDiv.classList.remove('feito');
  }
  
  //marcarDiv.classList.toggle('feito');// de forma mais curta
}


