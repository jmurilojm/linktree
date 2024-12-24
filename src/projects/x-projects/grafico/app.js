/*let a = 6
let b = 3
let c = 5

let soma = a + b + c
let sp = Number((((a / soma) * 100).toFixed(1))) + Number((((b / soma) * 100).toFixed(1))) + Number((((c / soma) * 100).toFixed(1)))

console.log(soma)
console.log(sp + "%")

console.log((((a / soma) * 100).toFixed(1))+ "%")
console.log((((b / soma) * 100).toFixed(1))+ "%")
console.log((((c / soma) * 100).toFixed(1))+ "%")*/


const inValor1 = document.getElementById('inValor1');
const inValor2 = document.getElementById('inValor2');
const inValor3 = document.getElementById('inValor3');
const outBarra1 = document.getElementById('outBarra1');
const outBarra2 = document.getElementById('outBarra2');
const outBarra3 = document.getElementById('outBarra3');
const valorNaBarra1 = document.getElementById('valorNaBarra1');
const valorNaBarra2 = document.getElementById('valorNaBarra2');
const valorNaBarra3 = document.getElementById('valorNaBarra3');
const btGerar = document.getElementById('btGerar');

btGerar.addEventListener('click', gerarGrafico);

function gerarGrafico() {
  const valor1 = Number(inValor1.value);
  const valor2 = Number(inValor2.value);
  const valor3 = Number(inValor3.value);
  
  // limpar valores
  outBarra1.style.height = '1%';
  outBarra2.style.height = '1%';
  outBarra3.style.height = '1%';
  valorNaBarra1.innerText = '0.0%'
  valorNaBarra2.innerText = '0.0%'
  valorNaBarra3.innerText = '0.0%'
  
  
  if((!valor1 && !valor2 && !valor3) || valor1 < 0 || valor2 < 0 || valor3 < 0){
    inValor1.value = '';
    inValor2.value = '';
    inValor3.value = '';
    valorNaBarra1.style.color = 'black'
    valorNaBarra2.style.color = 'black'
    valorNaBarra3.style.color = 'black'
    alert('Por favor, faça algum preenchimento positivo!');
    return;
  }

  const soma = valor1 + valor2 + valor3;
  
  //const percentagemTotal = Number((((valor1 / soma) * 100).toFixed(1))) + Number((((valor2 / soma) * 100).toFixed(1))) + Number((((valor3 / soma) * 100).toFixed(1)));
  //console.log(soma);
  //console.log(percentagemTotal + "%");
  
  const resultadoBarra1 = ((valor1 / soma) * 100).toFixed(1);
  const resultadoBarra2 = ((valor2 / soma) * 100).toFixed(1);
  const resultadoBarra3 = ((valor3 / soma) * 100).toFixed(1);

  // saídas de resultados
  outBarra1.style.height = `${resultadoBarra1}%`;
  outBarra2.style.height = `${resultadoBarra2}%`;
  outBarra3.style.height = `${resultadoBarra3}%`;
  
  // mudar cor do valor que está nas barras
  if(valor1 > 0){
    valorNaBarra1.style.color = 'white'
  }
  if(valor2 > 0){
    valorNaBarra2.style.color = 'white'
  }
  if (valor3 > 0) {
    valorNaBarra3.style.color = 'white'
  }
  
  valorNaBarra1.innerText = `${resultadoBarra1}%`;
  valorNaBarra2.innerText = `${resultadoBarra2}%`;
  valorNaBarra3.innerText = `${resultadoBarra3}%`;
}