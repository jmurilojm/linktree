const unidade1 = document.querySelector('#inUnidade1');
const unidade2 = document.querySelector('#inUnidade2');
const unidade3 = document.querySelector('#inUnidade3');
const unidade4 = document.querySelector('#inUnidade4');
const botaoCalcular = document.querySelector('#btn-Calcular');
const resultado = document.querySelector('.resultado');


function calcular() {
  let u1, u2, u3, u4;

  // Definindo o valor de undefined para o campo com nota não informada;
  if (unidade1.value === '') {
    u1 = undefined;
  } else {
    u1 = Number(unidade1.value);
  }

  if (unidade2.value === '') {
    u2 = undefined;
  } else {
    u2 = Number(unidade2.value);
  }

  if (unidade3.value === '') {
    u3 = undefined;
  } else {
    u3 = Number(unidade3.value);
  }

  if (unidade4.value === '') {
    u4 = undefined;
  } else {
    u4 = Number(unidade4.value);
  }


  let boletim = [u1, u2, u3, u4];
  const PONTOS = 28;
  let somaDasMedias = 0;
  let mediasUndefined = 0;


  for (let i = 0; i < 4; i++) {
    if (boletim[i] != undefined) {
      somaDasMedias += boletim[i];
    } else {
      mediasUndefined++;
    }
  }


  // CONDICIONAIS;
  // Verificando se um dos valores é negativo;
  if (unidade1.value < 0) {
    alert('Verifique os valores informados!\n\nSão permitidas notas de 0 a 10.0');
    unidade1.focus();
    return;
  }
  if (unidade2.value < 0) {
    alert('Verifique os valores informados!\n\nSão permitidas notas de 0 a 10.0');
    unidade2.focus();
    return;
  }
  if (unidade3.value < 0) {
    alert('Verifique os valores informados!\n\nSão permitidas notas de 0 a 10.0');
    unidade3.focus();
    return;
  }

  // Verificar se deixou de informar todas as notas;
  if (mediasUndefined === 4) {
    alert('Informe pelo menos um dos Bimestres!');
    return;
  }

  // Verificando se a soma fos valores ultrapassa o max. de 30 pontos e qual das notas foi informada acima de 10.0;
  if (somaDasMedias > 30) {
    alert('Verifique os valores informados!\n\nSão permitidas notas de 0 a 10.0');
    if (unidade1.value > 10) {
      unidade1.focus();
    } else if (unidade2.value > 10) {
      unidade2.focus();
    } else if (unidade3.value > 10) {
      unidade3.focus();
    }
    return;
  }

  // Verifica se a soma é igual ou superior a 280 pontos. Critério para ser aprovado;
  if (somaDasMedias >= 28) {
    resultado.innerHTML = '<p><strong>PARABÉNS!</strong><br><br><br>Você está <strong style="color: green">APROVADO!</strong> nesta Disciplina.</p>';

    // Os campos ficam desabilitados após o resultado;
    unidade1.setAttribute('disabled', 'disabled');
    unidade2.setAttribute('disabled', 'disabled');
    unidade3.setAttribute('disabled', 'disabled');
    return;
  }

  // Verifica se a soma é menor que oito. Critério para ser reprovado;
  if (somaDasMedias < 8) {
    resultado.innerHTML = '<p>Infelizmente você está <strong style="color: red">REPROVADO!</strong> nesta Disciplina e precisará <strong>repetir o ano</strong>.</p>';

    // Os campos ficam desabilitados após o resultado;
    unidade1.setAttribute('disabled', 'disabled');
    unidade2.setAttribute('disabled', 'disabled');
    unidade3.setAttribute('disabled', 'disabled');
    return;
  }



  let pontosACompletar = PONTOS - somaDasMedias;
  let paraAprovacao = pontosACompletar / mediasUndefined;


  // Atribuindo a média necessária para as unidades que restam serem concluídas;
  if (u1 === undefined) {
    unidade1.value = paraAprovacao.toFixed(1);
  }
  if (u2 === undefined) {
    unidade2.value = paraAprovacao.toFixed(1);
    unidade2.style.color = unidade2.value > 10 ? 'red' : 'green';
  }
  if (u3 === undefined) {
    unidade3.value = paraAprovacao.toFixed(1);
    unidade3.style.color = unidade3.value > 10 ? 'red' : 'green';
  }
  if (u4 === undefined) {
    unidade4.value = paraAprovacao.toFixed(1);

    // Se a nota for maior que 10, o bimestre 4 imprime 10 e na div resultado é dada uma informação;
    if (unidade4.value > 10) {
      resultado.innerHTML = `<p>Você está na <strong style="color: red">FINAL</strong> desta Displina.<br><br><br>Observações:<br><br>- <strong>Você precisa da Média = 10.0 no IV Bimestre</strong> e <br>- Você precisa conquistar, na <strong>FINAL</strong>, no <strong style="color: red">mínimo ${(unidade4.value - 10).toFixed(1)} pontos para ser Aprovado</strong> nesta Disciplina.</p>`;
      unidade4.value = 10;
    } else {
      unidade4.style.color = 'green';
      resultado.innerHTML = '<p>Parabéns pelo seu desempenho!<br><br><br>Conquiste a(s) média(s) na <strong style="color: green">cor VERDE</strong> para ser <strong>APROVADO</strong> nesta Disciplina e não ir para a FINAL.</p>';
    }
  }


  // Desabilitar todos os campos, após o resultado;
  unidade1.setAttribute('disabled', 'disabled');
  unidade2.setAttribute('disabled', 'disabled');
  unidade3.setAttribute('disabled', 'disabled');
  botaoCalcular.setAttribute('disabled', 'disabled');
}


function limpar() {
  unidade1.value = '';
  unidade2.value = '';
  unidade3.value = '';
  unidade4.value = '';
  resultado.innerHTML = '<p><strong>...</strong></p>';

  unidade2.style.color = 'black';
  unidade3.style.color = 'black';
  unidade4.style.color = 'black';

  unidade1.removeAttribute('disabled');
  unidade2.removeAttribute('disabled');
  unidade3.removeAttribute('disabled');
  botaoCalcular.removeAttribute('disabled');
}
