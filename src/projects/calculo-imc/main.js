let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let resultado = document.querySelector("#resultado");
let magreza = document.querySelector("#magreza");
let normal = document.querySelector("#normal");
let sobrepeso = document.querySelector("#sobrepeso");
let obesidade = document.querySelector("#obesidade");
let grave = document.querySelector("#obesidade-grave");
let extrema = document.querySelector("#obesidade-extrema");

function calcular() {
  magreza.style.backgroundColor = "";
  normal.style.backgroundColor = "";
  sobrepeso.style.backgroundColor = "";
  obesidade.style.backgroundColor = "";
  grave.style.backgroundColor = "";
  extrema.style.backgroundColor = "";

  if (!peso.value || peso.value <= 0) {
    peso.focus();
  }
  if (!altura.value || peso.value <= 0) {
    altura.focus();
  } else {
    resultado.value = (
      Number(peso.value) /
      (Number(altura.value) * Number(altura.value))
    ).toFixed(2);

    if (resultado.value < 18.5) {
      magreza.style.backgroundColor = "lightgreen";
      peso.value = "";
      altura.value = "";
    } else if (resultado.value >= 18.5 && resultado.value <= 24.9) {
      normal.style.backgroundColor = "lightgreen";
      peso.value = "";
      altura.value = "";
    } else if (resultado.value >= 25 && resultado.value <= 29.9) {
      sobrepeso.style.backgroundColor = "lightgreen";
      peso.value = "";
      altura.value = "";
    } else if (resultado.value >= 30 && resultado.value <= 34.9) {
      obesidade.style.backgroundColor = "lightgreen";
      peso.value = "";
      altura.value = "";
    } else if (resultado.value >= 35 && resultado.value <= 39.9) {
      grave.style.backgroundColor = "lightgreen";
      peso.value = "";
      altura.value = "";
    } else if (resultado.value >= 40) {
      extrema.style.backgroundColor = "lightgreen";
      peso.value = "";
      altura.value = "";
    }
  }
}

//implementando a opção de usar o 'ENTER'
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    calcular();
  }
});