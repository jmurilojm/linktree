setInterval(() => {
  const data = new Date();
  
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();
  
  document.getElementById('outHora').innerText = `${horas}:${minutos}:${segundos}`;
}, 1000);