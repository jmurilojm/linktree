const cronometro = document.querySelector('#outTempo');
const btInciar = document.querySelector('#btIniciar');
const btZerar = document.querySelector('#btZerar');

let [hora, min, seg] = [0, 0, 0];
let intervaloDeTempo;
let estadoDoCronometro = 'pausado';



function atualizarTempo() {
  seg++;

  if (seg / 60 === 1) {
    seg = 0;
    min++;
    if (min / 60 === 1) {
      min = 0;
      hora++;
    }
  }

  const segMenor = formatarMenor(seg);
  const minMenor = formatarMenor(min);
  const horaMenor = formatarMenor(hora);

  cronometro.textContent = `${horaMenor}:${minMenor}:${segMenor}`;
}


function formatarMenor(numero) {
  return numero < 10 ? '0' + numero : numero;
}


btInciar.addEventListener('click', function() {
  if (estadoDoCronometro === 'pausado') {
    intervaloDeTempo = setInterval(atualizarTempo, 1000);
    btInciar.innerHTML = `<i class="bi bi-pause-fill"></i>`;
    btInciar.classList.add('corPausado');
    estadoDoCronometro = 'iniciado';
  } else {
    clearInterval(intervaloDeTempo);
    btInciar.innerHTML = `<i class="bi bi-play-fill"></i>`;
    btInciar.classList.remove('corPausado');
    estadoDoCronometro = 'pausado';
  }
});

btZerar.addEventListener('click', function() {
  clearInterval(intervaloDeTempo);

  hora = 0;
  min = 0;
  seg = 0;

  cronometro.textContent = `00:00:00`;
  btInciar.innerHTML = `<i class="bi bi-play-fill"></i>`;
  btInciar.classList.remove('corPausado');
  estadoDoCronometro = 'pausado';
});