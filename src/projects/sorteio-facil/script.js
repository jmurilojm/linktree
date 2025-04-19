const inNome = document.querySelector('#inNome');
const outLista = document.querySelector('#outLista');
const btnSortear = document.querySelector('#btnSortear');
const btnAdicionar = document.querySelector('#btnAdicionar');
const btnReiniciar = document.querySelector('#btnReiniciar');
const ganhador = document.querySelector('#ganhador');
const numeroDoSorteio = document.querySelector('#numeroDoSorteio');
const outData = document.querySelector('#outData');
const outHora = document.querySelector('#outHora');
const totalNaLista = document.querySelector('#totalNaLista')

let listaDeNomes = [];
inNome.focus();
let sorteios = 0;
outData.textContent = inforData();
//outHora.textContent = inforHora();
setInterval(() => {
  outHora.textContent = inforHora();
}, 1000);

// verificar data e se ja houve sorteio
let dataverificada = localStorage.getItem('data')
let data = new Date()
  const dia = acrescentarZero(data.getDate());
  const mes = acrescentarZero(data.getMonth() + 1);
  const ano = data.getFullYear();
let formatoDeData = `${dia}/${mes}/${ano}`

if(dataverificada == formatoDeData){
  alert(`Você já fez um sorteio hoje!\n\nVencedor: ${localStorage.getItem('sorteado').toUpperCase()}`)
} else{
  alert(`Atenção!\n\nLimite de um sorteio por dia!`)
  localStorage.removeItem('data')
  localStorage.removeItem('sorteado')
}

// usar tecla enter para inserção de dados
inNome.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addNomeNaLista();
  }
});


function addNomeNaLista() {
  // verificar se há dígito válido antes de adicionar
  if (inNome.value.trim() === '' || inNome.value.trim().length < 2) {
    alert('Valor inválido!');
    return;
  }

  // adicionar nome na lista
  listaDeNomes.push(inNome.value.trim());
  // limpar lista exibida para atualizar
  outLista.innerHTML = '';
  // imprimir lista atraves da função 
  imprimirLista();
  // limpar campo input
  inNome.value = '';
  inNome.focus();
  // imformar total de cadastros
  totalNaLista.textContent = listaDeNomes.length;
}

function imprimirLista() {
  // iterar nomes da lista
  listaDeNomes.forEach(nome => {
    // lançar cada nome com a tag <li>
    outLista.innerHTML += `<li>${nome}</li>`;
  });
}

function sortearNome() {
  // verificar se houver sorteio no dia
let sorteioRealizado = localStorage.getItem('sorteado')
if(sorteioRealizado){
  alert(`O Sorteio de hoje já foi realizado!\n\nVencedor: ${sorteioRealizado.toUpperCase()}`)
  return
}

  // verificar se há nomes suficientes
  if (listaDeNomes.length < 2) {
    alert('Cadastre pelo menos dois Nomes!');
    return;
  }

  // pegar total de nomes salvos
  let quantidadeDeNomes = listaDeNomes.length;
  // sorteio de uma posição aleatória
  let numeroAleatorio = Math.floor(Math.random() * quantidadeDeNomes);
  // o ganhador é quem esta na posição aleatória 
  let nomeDoGanhador = listaDeNomes[numeroAleatorio];

  // limitar sorteio:
  let data = new Date()
  const dia = acrescentarZero(data.getDate());
  const mes = acrescentarZero(data.getMonth() + 1);
  const ano = data.getFullYear();
  const hora = acrescentarZero(data.getHours());
  const min = acrescentarZero(data.getMinutes());
  const seg = acrescentarZero(data.getSeconds());
  localStorage.setItem("sorteado",`${nomeDoGanhador}\n\nData: ${dia}/${mes}/${ano} às ${hora}:${min}:${seg}`)

  localStorage.setItem('data',`${dia}/${mes}/${ano}`)

  // exibir ganhador na tela
  ganhador.innerHTML = `Parabéns ${nomeDoGanhador}!`;
  // remover o sorteado das listas e atualizar
  const liSorteada = outLista.children[numeroAleatorio];
  outLista.removeChild(liSorteada);
  listaDeNomes.splice(numeroAleatorio, 1);

  // contagem de sorteio
  sorteios++;
  numeroDoSorteio.textContent = sorteios;

  // atualizar hora
  //outHora.textContent = inforHora();
}

function inforData() {
  const data = new Date();
  const dia = acrescentarZero(data.getDate());
  const mes = acrescentarZero(data.getMonth() + 1);
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function inforHora() {
  const data = new Date();
  const hora = acrescentarZero(data.getHours());
  const min = acrescentarZero(data.getMinutes());
  const seg = acrescentarZero(data.getSeconds());
  return `${hora}:${min}:${seg}`;
}

function acrescentarZero(elemento) {
  let formatado = elemento < 10 ? `0${elemento}` : elemento;
  return formatado;
}

function reiniciar() {
  let confirmacao = confirm('Atenção!\n\nTodos os dados serão apagados.');

  // apos confirmacao, atualizar a pagina para um novo sorteio
  if (confirmacao) {
    listaDeNomes = [];
    sorteios = 0;
    outLista.innerHTML = '';
    ganhador.innerHTML = '...';
    numeroDoSorteio.textContent = sorteios;
    inNome.value = '';
    inNome.focus();
    outData.textContent = inforData();
    outHora.textContent = inforHora();
    totalNaLista.textContent = listaDeNomes.length;
  }
}
