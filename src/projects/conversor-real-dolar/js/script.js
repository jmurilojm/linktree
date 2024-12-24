// VERIFICANDO A CONEXÃO COM A REDE ASSIM QUE ENTRAR NA PÁGINA;
if (!navigator.onLine) {
    alert('Verifique sua conexão!');
}



const valorReal = document.querySelector('#inReal');
const valorDolar = document.querySelector('#inDolar');
let dolar = cotacao();

valorReal.addEventListener('keyup', converterReal);
valorDolar.addEventListener('keyup', converterDolar);

valorReal.addEventListener('click', limpar);
valorDolar.addEventListener('click', limpar);



function converterReal() {
    //console.log('BRL > USA');
    const conversaoRealDolar = valorReal.value / dolar;
    valorDolar.value = conversaoRealDolar;
}

function converterDolar() {
    //console.log('USA > BRL');
    const conversaoDolarReal = valorDolar.value * dolar;
    valorReal.value = conversaoDolarReal;
}

function limpar() {
    valorReal.value = '';
    valorDolar.value = '';
}



// BUSCANDO COTAÇÃO DE MOEDAS COM API;
async function cotacao() {
    const apiCotacao = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';
    const resposta = await fetch(apiCotacao);
    const dados = await resposta.json(resposta);
    dolar = dados.USDBRL.ask;
    return;
}

  // REGRAS DA API;
/*
API: https://economia.awesomeapi.com.br/json/last/:moedas

Retorna a ultima ocorrência das moedas selecionadas.

Ex.:

https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL
*/