const capa = document.getElementById('capa');
const nomeMusica = document.getElementById('nome-musica');
const nomeBanda = document.getElementById('nome-banda');
const audio = document.getElementById('audio');
const tocar = document.getElementById('tocar');
const voltar = document.getElementById('voltar');
const avancar = document.getElementById('avancar');
const btCurtir = document.getElementById('curtir');
const preenchimento = document.getElementById('preenchimento');
const boxBarras = document.getElementById('box-barras');
const aleatorio = document.getElementById('aleatorio');
const repetir = document.getElementById('repetir');
const tempoAudio = document.getElementById('tempo-audio');
const tempoTotal = document.getElementById('tempo-total');

/*
// aquivos das músicas em objetos
const musica01 = {
  nomeMusica : 'Chorando Se Foi',
  artista : 'Paulinha',
  file : 'Chorando Se Foi - Paulinha Abelha (320)',
  imagem : 'https://picsum.photos/300/300',
  curtido : false
}
const musica02 = {
  nomeMusica : 'Vira - Vira',
  artista : 'Mamonas Assassinas',
  file : '02. Vira-Vira',
  imagem : 'https://picsum.photos/301/301',
  curtido : false
}
const musica03 = {
  nomeMusica : 'Pelados Em Santos',
  artista : 'Mamonas Assassinas',
  file : '03. Pelados em Santos',
  imagem : 'https://picsum.photos/302/302',
  curtido : false
}
const musica04 = {
  nomeMusica : 'Chopis Centis',
  artista : 'Mamonas Assassinas',
  file : '04. Chopis Centis',
  imagem : 'https://picsum.photos/303/303',
  curtido : false
}*/


// variáveis auxiliares
let auxEstaTocando = false;
let estaEmbaralhado = false;
let estaRepetir = false;
//const playlist = [musica01, musica02, musica03]; // mudado pela opção de pegar no localstorage.
const playlist = JSON.parse(localStorage.getItem('playlist')) ?? [paulinha001, mamonas001, mamonas002, mamonas003]; // operador de coalicencia nula.
let playlistMisturada = [...playlist]; // para espalhar os itens do array que está sendo copiado.
let indiceMusica = 0;


// funções 
function tocarMusica(){
  tocar.querySelector('.bi').classList.remove('bi-play-circle-fill');
  tocar.querySelector('.bi').classList.add('bi-pause-circle-fill');
  audio.play();
  auxEstaTocando = true;
}

function pausarMusica(){
  tocar.querySelector('.bi').classList.remove('bi-pause-circle-fill');
  tocar.querySelector('.bi').classList.add('bi-play-circle-fill');
  audio.pause();
  auxEstaTocando = false;
}

function decidirPlayPause(){
  if(auxEstaTocando === true){
    pausarMusica();
  } else{
    tocarMusica();
  }
}

function atualizarMusica(){
  capa.src = playlistMisturada[indiceMusica].imagem;
  nomeMusica.innerText = playlistMisturada[indiceMusica].nomeMusica;
  nomeBanda.innerText = playlistMisturada[indiceMusica].artista;
  audio.src = `midia/${playlistMisturada[indiceMusica].file}.mp3`;
  desenharCurtir();
}

function voltarMusica(){
  if(indiceMusica === 0){
    indiceMusica = playlistMisturada.length - 1;
  } else{
    indiceMusica--;
  }
  atualizarMusica();
  tocarMusica();
}

function avancarMusica(){
  if(indiceMusica === playlistMisturada.length - 1){
    indiceMusica = 0;
  } else{
    indiceMusica++;
  }
  atualizarMusica();
  tocarMusica();
}

function atualizarBarra(){
  const tempoTocado = audio.currentTime;
  const tempoMusica = audio.duration;
  const larguraBarra = (tempoTocado / tempoMusica) * 100;
  preenchimento.style.setProperty('--barra', `${larguraBarra}%`);
  tempoAudio.innerText = paraHMS(audio.currentTime);
}

function pularTempoPara(e){
  const tamBox = boxBarras.clientWidth;
  const posClick = e.offsetX;
  const pularPara = (posClick / tamBox) * audio.duration;
  audio.currentTime = pularPara;
}

function embaralharMusicas(arr){
  const tamanho = arr.length;
  let indiceMaior = tamanho - 1; // ultimo elemento.
  while(indiceMaior > 0){
    const indiceSorteado = Math.floor(Math.random() * tamanho);
    let aux = arr[indiceMaior]; // cópia do antigo.
    arr[indiceMaior] = arr[indiceSorteado];
    arr[indiceSorteado] = aux;
    indiceMaior--;
  }
}

function ativarAleatorio(){
  if(estaEmbaralhado === false){
    estaEmbaralhado = true;
    embaralharMusicas(playlistMisturada);
    aleatorio.classList.add('botao-ativado');
  } else{
    estaEmbaralhado = false;
    playlistMisturada = [...playlist];
    aleatorio.classList.remove('botao-ativado');
  }
}

function ativarRepetir(){
  if(estaRepetir === false){
    estaRepetir = true;
    repetir.classList.add('botao-ativado');
  } else{
    estaRepetir = false;
    repetir.classList.remove('botao-ativado');
  }
}

function avancarOuRepetir(){
  if(estaRepetir === false){
    avancarMusica();
  } else{
    tocarMusica();
  }
}

function paraHMS(segTempoTotal){
  let hor = Math.floor(segTempoTotal / 3600);
  let min = Math.floor((segTempoTotal - (hor * 3600)) / 60);
  let seg = Math.floor(segTempoTotal - (hor * 3600) - (min * 60));
  
  return `${hor.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`; // trnsforma em string e formata para receber 2 algarismos, na falta completa com o zero.
}

/*function atualizarTempoAudio(){
  tempoAudio.innerText = paraHMS(audio.currentTime);
}*/ // foi atribuído na função atualizarBarra()

function atualizarTempoTotal(){
  tempoTotal.innerText = paraHMS(audio.duration);
}

function desenharCurtir(){
  if(playlistMisturada[indiceMusica].curtido === true){
    btCurtir.querySelector('.bi').classList.remove('bi-heart');
    btCurtir.querySelector('.bi').classList.add('bi-heart-fill');
    btCurtir.classList.add('botao-ativado');
  } else {
    btCurtir.querySelector('.bi').classList.add('bi-heart');
    btCurtir.querySelector('.bi').classList.remove('bi-heart-fill');
    btCurtir.classList.remove('botao-ativado');
  }
}

function curtir(){
  if(playlistMisturada[indiceMusica].curtido === false){
    playlistMisturada[indiceMusica].curtido = true;
  } else{
    playlistMisturada[indiceMusica].curtido = false;
  }
  desenharCurtir();
  localStorage.setItem('playlist', JSON.stringify(playlist));
}


// chamada de função
atualizarMusica();


// eventos
tocar.addEventListener('click', decidirPlayPause);
voltar.addEventListener('click', voltarMusica);
avancar.addEventListener('click', avancarMusica);
audio.addEventListener('timeupdate', atualizarBarra); // pegar posição atual do áudio.
audio.addEventListener('ended', avancarOuRepetir); // aviso ao terminar o áudio.
audio.addEventListener('loadedmetadata', atualizarTempoTotal);
boxBarras.addEventListener('click', pularTempoPara);
aleatorio.addEventListener('click', ativarAleatorio);
repetir.addEventListener('click', ativarRepetir);
btCurtir.addEventListener('click', curtir);


















// eu havia criado sem uso da aula

//const iconeTocar = document.getElementById('icone-tocar'); // JMurilo

/*
function tocarMusica() {
  audio.play();

  const classeAtual = iconeTocar.classList[1];
  if (classeAtual === 'bi-play-circle-fill') {
    iconeTocar.classList.remove(classeAtual);
    iconeTocar.classList.add('bi-pause-circle-fill');
  } else {
    iconeTocar.classList.remove(classeAtual);
    iconeTocar.classList.add('bi-play-circle-fill');
    audio.pause();
  }
} // JMurilo
*/