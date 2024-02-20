const texto = document.getElementById('inTexto');
const botao = document.getElementById('btCodificar');
const outTexto = document.getElementById('outTexto');


botao.addEventListener('click', () => {
  console.log(typeof texto.value);
  let frase = texto.value;

  let novaFrase = '';

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'Z') {
      novaFrase += 'P';
    } else if (frase[i] === 'z') {
      novaFrase += 'p';
    }

    else if (frase[i] === 'E' || frase[i] === 'É' || frase[i] === 'Ê') {
      novaFrase += 'o';
    } else if (frase[i] === 'e' || frase[i] === 'é' || frase[i] === 'ê') {
      novaFrase += 'o';
    }

    else if (frase[i] === 'N') {
      novaFrase += 'L';
    } else if (frase[i] === 'n') {
      novaFrase += 'l';
    }

    else if (frase[i] === 'I' || frase[i] === 'Í') {
      novaFrase += 'A';
    } else if (frase[i] === 'i' || frase[i] === 'í') {
      novaFrase += 'a';
    }

    else if (frase[i] === 'T') {
      novaFrase += 'R';
    } else if (frase[i] === 't') {
      novaFrase += 'r';
    }

    else if (frase[i] === 'P') {
      novaFrase += 'Z';
    } else if (frase[i] === 'p') {
      novaFrase += 'z';
    }

    else if (frase[i] === 'O' || frase[i] === 'Ó' || frase[i] === 'Ô' || frase[i] === 'Õ') {
      novaFrase += 'E';
    } else if (frase[i] === 'o' || frase[i] === 'ó' || frase[i] === 'ô' || frase[i] === 'õ') {
      novaFrase += 'e';
    }

    else if (frase[i] === 'L') {
      novaFrase += 'N';
    } else if (frase[i] === 'l') {
      novaFrase += 'n';
    }

    else if (frase[i] === 'A' || frase[i] === 'Á' || frase[i] === 'À' || frase[i] === 'Â' || frase[i] === 'Ã') {
      novaFrase += 'I';
    } else if (frase[i] === 'a' || frase[i] === 'á' || frase[i] === 'à' || frase[i] === 'â' || frase[i] === 'ã') {
      novaFrase += 'i';
    }

    else if (frase[i] === 'R') {
      novaFrase += 'T';
    } else if (frase[i] === 'r') {
      novaFrase += 't';
    }

    else {
      novaFrase += frase[i];
    }
  }

  outTexto.value = novaFrase;
});