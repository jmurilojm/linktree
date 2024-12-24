const tela = document.getElementById("tela");
const cor = document.getElementById("body");
const pc = document.getElementById("placar-computador");
const jog = document.getElementById("placar-jogador");
const lista = ["pedra", "papel", "tesoura"];

const fig = ["url('midia/img-mao-pedra.png')","url('midia/img-mao-papel.png')","url('midia/img-mao-tesoura.png')"]; // imagens de mãos: pedra, papel e tesoura

const limpar = document.querySelector("#limpar");

let placarComputador = 0;
let placarJogador = 0;

tela.style.backgroundSize = "cover";

function pedra() {
  let posicao = Math.floor(Math.random() * 3);
  let computador = lista[posicao];

  tela.style.backgroundImage = fig[posicao];

  if (computador == "pedra") {
    //tela.value = computador;
    cor.style.backgroundColor = "white";
  } else if (computador == "tesoura") {
    //tela.value = computador;
    cor.style.backgroundColor = "green";
    placarJogador++;
    jog.innerText = placarJogador;
  } else {
    //tela.value = computador;
    cor.style.backgroundColor = "red";
    placarComputador++;
    pc.innerText = placarComputador;
  }
}

function papel() {
  let posicao = Math.floor(Math.random() * lista.length);
  let computador = lista[posicao];
  tela.style.backgroundImage = fig[posicao];
  if (computador == "papel") {
    //tela.value = computador;
    cor.style.backgroundColor = "white";
  } else if (computador == "pedra") {
    //tela.value = computador;
    cor.style.backgroundColor = "green";
    placarJogador++;
    jog.innerText = placarJogador;
  } else {
    //tela.value = computador;
    cor.style.backgroundColor = "red";
    placarComputador++;
    pc.innerText = placarComputador;
  }
}

function tesoura() {
  let posicao = Math.floor(Math.random() * lista.length);
  let computador = lista[posicao];
  tela.style.backgroundImage = fig[posicao];
  if (computador == "tesoura") {
    //tela.value = computador;
    cor.style.backgroundColor = "white";
  } else if (computador == "papel") {
    //tela.value = computador;
    cor.style.backgroundColor = "green";
    placarJogador++;
    jog.innerText = placarJogador;
  } else {
    //tela.value = computador;
    cor.style.backgroundColor = "red";
    placarComputador++;
    pc.innerText = placarComputador;
  }
}

limpar.addEventListener("click", function () {
  tela.style.backgroundImage = "url('midia/img-robo.png')"; /*imagem robo*/

  placarJogador = 0;
  placarComputador = 0;

  jog.innerText = placarJogador;
  pc.innerText = placarComputador;

  cor.style.backgroundColor = "white";
});
