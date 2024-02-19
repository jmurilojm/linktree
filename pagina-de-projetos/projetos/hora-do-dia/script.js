function carregar() {
    // chamada dos elementos html
    let comprimentar = document.getElementById('comprimento')
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    // pegar hora atual
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    // impressões para o usuário e condições
    msg.innerHTML = `Agora são ${hora}:${min} horas`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#95bbbd'
        comprimentar.innerText = 'Olá, Bom dia!'
    } else if (hora < 18) {
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#caa91d'
        comprimentar.innerText = 'Olá, Boa tarde!'
    } else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#191970'
        comprimentar.innerText = 'Olá, Boa noite!'
    }
}
