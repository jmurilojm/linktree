setInterval(() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${r},${g},${b})`;
}, 250);