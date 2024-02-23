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


inNome.focus();

function adicionar(){
  if(inNome.value === '' || inNome.value.length < 3){
    alert('Valor inválido ou muito pequeno!');
    return
  }
  
  const nome = (inNome.value).trim().toUpperCase();
  nomes.push(nome);
  inNome.value = '';
  inNome.focus();
  listarNomes();
  
  // habilitar botao limpar.
    // remover esses atributos.
    btLimpar.removeAttribute('disabled');
    btLimpar.classList.remove('limparDesabilitado');
}

function listarNomes(){
  quadroEntrada.innerText = '';
  nomes.forEach(nome => {
    quadroEntrada.innerHTML += `${nome}<br>`;
  })
}

function sortear(){
  if(nomes.length === 0){
    alert('Não há Nomes para sorteio!');
    cont = 1;
    return
  }
  
  const nomeSorteado = Math.floor(Math.random() * nomes.length);
  nomes = nomes.filter((nome, i) => {
    if(nome !== nomes[nomeSorteado]){
      return nome;
    } else{
      quadroSaida.innerHTML += `${cont}º - ${nomes[nomeSorteado]}<br>`;
    }
  });
  cont++;
  listarNomes();
  
  // habilitar botao novo sorteio.
  btNovoSorteio.removeAttribute('disabled');
  btNovoSorteio.classList.remove('novoSorteioDesabilitado');
  
  // se for para habilitar o botao quando zerar a lista dos nomes cadastrados.
  /*if(nomes.length === 0){
    // remover esses atributos.
    btNovoSorteio.removeAttribute('disabled');
    btNovoSorteio.classList.remove('novoSorteioDesabilitado');
  }*/
  
  // apos o primeiro sorteio, o botao limpar fica indisponivel.
    // retorna os atributos removidos do botao limpar.
    btLimpar.setAttribute('disabled', true);
    btLimpar.classList.add('limparDesabilitado');
}

function novoSorteio(){
  nomes = [];
  cont = 1;
  listarNomes();
  quadroSaida.innerText = '';
  
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