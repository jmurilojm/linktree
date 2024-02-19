function converter() {
  let largura = document.getElementById("largura").value;
  let comprimento = document.getElementById("comprimento").value;

  const PPI = document.getElementById("pontos").value;
  const POL = 2.54;
  const PX = PPI / POL;

  let larg = (largura * PX).toFixed(0);
  let comp = (comprimento * PX).toFixed(0);

  document.getElementById("resultado").innerHTML =
    "Largura: " + larg + "<br>Comprimento: " + comp;
}

//implementando a opção de usar o 'ENTER'
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    converter();
  }
});

/*
Exemplo de valores considerando 300 ppi:
    
1cm = 118
2cm = 236
3cm = 354
4cm = 472
5cm = 591
6cm = 709
7cm = 827
8cm = 945
9cm = 1063
10cm  = 1181
 
 
Como achar os pixels por centímetro?
    
1 pol = 2.54 cm
Desejando 300 ppi por pol
Calcula-se 300 / 2.54 = 118.11023622047244
Então, cada 1cm = 118.11023622047244
*/