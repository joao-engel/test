function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 13) {
        img.src = 'ftdia.png'
        document.body.style.background = '#e2d483'
    } else if (hora >= 13 && hora < 18) {
        img.src = 'fttarde.png'
        document.body.style.background = '#24adf3'
    } else {
        img.src = 'ftnoite.png'
        document.body.style.background = '#091b37'
    }
}