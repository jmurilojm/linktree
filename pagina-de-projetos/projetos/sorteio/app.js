let quadroEntrada = document.getElementById('quadroEntrada');
const quadroSaida = document.getElementById('quadroSaida');
const inNome = document.getElementById('inNome');
const btAdicionar = document.getElementById('btAdicionar');
const btSortear = document.getElementById('btSortear');
const btNovoSorteio = document.getElementById('btNovoSorteio');
const btLimpar = document.getElementById('btLimpar');


let nomes = [];
let cont = 1;

btAdicionar.addEventListener('click', adicionar);
btSortear.addEventListener('click', sortear);
btNovoSorteio.addEventListener('click', novoSorteio);
btLimpar.addEventListener('click', limpar);
inNome.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    adicionar();
  } // caso o botao enter, que possui o codigo 13, for clicado, a funcao adionar é chamada.
});
quadroEntrada.addEventListener('click',()=>{
  inNome.focus();
}); // caso clique na area onde fica a lista de nomes cadastrados, será direcionado focus() no input-text de adicionar nomes;


inNome.focus();

function adicionar(){
  if(inNome.value === '' || inNome.value.length < 3){
    alert('Valor inválido ou muito curto!');
    return;
  } // verifica se o valor de entrada está vazio ou se têm menos que 03 caracteres. Se isso ocorrer, uma mensagem de alerta será mostrada.
  
  const nome = (inNome.value).trim().toUpperCase();
  nomes.push(nome); // adiciona o nome digitado à lista nomes.
  inNome.value = '';
  inNome.focus();
  listarNomes();
  
  // habilitar botão limpar. Por padrão está desabilitado.
    // remover esses atributos.
    btLimpar.removeAttribute('disabled');
    btLimpar.classList.remove('limparDesabilitado');
}

function listarNomes(){
  quadroEntrada.innerText = ''; // limpa o quadro dos nomes antes de fazer a atualização a seguir.
  
  nomes.forEach(nome => {
    quadroEntrada.innerHTML += `${nome}<br>`;
  }); // percorre a lista de nomes para apresentar cada um deles.
}

function sortear(){
  if(nomes.length === 0){
    alert('Lista de Nomes, vazia!');
    cont = 1;
    return;
  } // antes de realizar o sorteio é verificado se existe nomes na lista de nomes. Caso não, um alerta será dado para que cadastre e possa seguir para as próximas alternativas.
  
  /*
  // fazer um sorteio por cotas
  const quantosSorteios = prompt('Quantos voce quer?');
  
  if(quantosSorteios > nomes.length){
    alert(`Existem apenas ${nomes.length} cadastros!`)
    return;
  } // verifica se a quantidade de cadastrados exitem.
  
  for(let i = 0; i < quantosSorteios; i++){} // itera a quantidade solicitada, caso seja possivel.
  */
  
  const nomeSorteado = Math.floor(Math.random() * nomes.length); // realiza o sorteio de um indice da lista de nomes.
  nomes = nomes.filter((nome, i) => {
    if(nome !== nomes[nomeSorteado]){
      return nome;
    } else{
      quadroSaida.innerHTML += `${cont}º- ${nomes[nomeSorteado]}<br>`;
    }
  }); // o nome sorteado será sera retirado da lista de nomes e passará para o quadro dos sorteados.
  cont++; // para adicionar a colocação do sorteado no quadro dos sorteados.
  listarNomes(); // atualiza a lista no quadro dos nomes.
  
  // habilita o botão novo sorteio, assim que realizar o primeiro sorteio.
    btNovoSorteio.removeAttribute('disabled');
    btNovoSorteio.classList.remove('novoSorteioDesabilitado');
  
  // se for para habilitar o botão quando zerar a lista dos nomes cadastrados.
  /*if(nomes.length === 0){
    // remover esses atributos.
    btNovoSorteio.removeAttribute('disabled');
    btNovoSorteio.classList.remove('novoSorteioDesabilitado');
  }*/
  
  // após o primeiro sorteio, o botão limpar fica indisponível.
    // retorna os atributos removidos do botão limpar.
    btLimpar.setAttribute('disabled', true);
    btLimpar.classList.add('limparDesabilitado');
}

function novoSorteio(){
  nomes = []; // lista nomes volta a ficar vazia.
  cont = 1; // resta o contador para 1.
  listarNomes(); // atualiza o quadroNomes.
  quadroSaida.innerText = ''; // quadro dos sorteados fica vazio.
  
  // retorna os atributos removidos do botao novo sorteio.
    btNovoSorteio.setAttribute('disabled', true);
    btNovoSorteio.classList.add('novoSorteioDesabilitado');
}

function limpar(){
  nomes = [];
  cont = 1;
  listarNomes();
  quadroEntrada.innerText = '';
  
  // retorna os atributos removidos do botao limpar.
    btLimpar.setAttribute('disabled', true);
    btLimpar.classList.add('limparDesabilitado');
}