const inPotencia = document.querySelector('#inPotencia');
const inHoras = document.querySelector('#inHoras');
const inDias = document.querySelector('#inDias');
const inTaxa = document.querySelector('#inTaxa');
const btCalcular = document.querySelector('#btCalcular');
const outResultado = document.querySelector('#outResultado');

const botao = btCalcular;
botao.addEventListener('click', calcularConsumo)



function calcularConsumo() {
  const potencia = Number(inPotencia.value) / 1000;
  const horas = Number(inHoras.value);
  const dias = Number(inDias.value);
  const taxa = Number(inTaxa.value);
  const saida = outResultado;


  const consumoKwhDia = (potencia * horas).toFixed(1);
  const consumoKwhMes = (potencia * (horas * dias)).toFixed(1);
  const consumoValorDia = (consumoKwhDia * taxa).toFixed(2);
  const consumoValorTotal = (consumoKwhMes * taxa).toFixed(2);
  

  const fraseDeApresntacao =
    `CONSUMO<br><br>
    Diário = ${consumoKwhDia} kWh/dia<br>
    Total = ${consumoKwhMes} kWh/mês<br><br><br>
    
    VALORES:<br><br>
    Por 1 dia = R$ ${consumoValorDia}<br>
    Por ${dias} dia(s) = R$ ${consumoValorTotal}`;

  saida.innerHTML = fraseDeApresntacao;
}