// VARIÁVEL DOM;
const campoTexto = document.getElementById('inTexto');
const campoImagem = document.getElementById('imgQrcode');
const botaoDownload = document.getElementById('btnDownload');
const botaoGerar = document.getElementById('btnGerar');


// VERIFICANDO A CONEXÃO COM A REDE ASSIM QUE ENTRAR NA PÁGINA;
if (!navigator.onLine) {
  alert('Verifique sua conexão!');
} else {
  campoTexto.removeAttribute('disabled');
  campoTexto.style.background = 'transparent';
}


// O async COM await, try E catch, PARA FAZER A REQUISIÇÃO. O try VERIFICA A CONEXÃO E catch LANÇA MENSAGEM DE ERRO;
async function gerarQrcode() {
  if ((campoTexto.value).trim().length < 1) {
    alert('Por favor, digite algo!');
    return;
  }

  const apiQrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${campoTexto.value}`;

  try {
    if (!navigator.onLine) {
      campoTexto.value = '';
      alert('Verifique sua conexão!');
      return;
    }

    const respostaURL = await fetch(apiQrcode);

    campoImagem.classList.remove('loading');
    campoImagem.src = apiQrcode;
    botaoDownload.style.display = 'block';

    fetch(apiQrcode.replace('150x150', '300x300'))
      .then(resposta => resposta.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        botaoDownload.href = url
        botaoDownload.download = 'qr-code.png';
      })
      .catch(() => alert('Falha ao baixar a imagem.'));

    campoTexto.value = '';
  } catch (erro) {
    console.log('Erro na conexão com a API (' + erro + ').');
  }
}


// ACIONAMENTO;
botaoGerar.addEventListener('click', gerarQrcode);