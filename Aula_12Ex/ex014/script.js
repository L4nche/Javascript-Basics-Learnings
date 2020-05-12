
function carregar() {
    var msg = window.document.getElementById('msg')
    var imag = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.` 

    if (hora >= 5 && hora < 12) {
        //BOM DIA
        imag.src = 'fotomanha.png'
        document.body.style.background = '#fee2a4'
        document.body.querySelector('img#imagem').style.boxShadow = '0px 0px 5px #85371c'
        document.body.querySelector('section').style.background = '#fff1ef'
        document.body.style.color = '#fec967'
        document.body.style.textShadow = '0.5px 0px 2px #2b1f1b'
        document.body.querySelector('section').style.boxShadow = '0px 0px 5px #2b1f1b'

    }else if(hora >= 12 && hora < 18) {
        // BOA TARDE
        imag.src = 'fototarde.png'
        document.body.style.background = '#e64943'
        document.body.querySelector('img#imagem').style.boxShadow = '0px 0px 5px #e64943'
        document.body.querySelector('section').style.background = '#110a0a'
        document.body.style.color = '#feb395'
        document.body.style.textShadow = '-1px 0px 1px #ff1600'
        document.body.querySelector('section').style.boxShadow = '0px 0px 5px #fe9577'

    }else {
        //BOA NOITE
        imag.src = 'fotonoite.png'
        document.body.style.background = '#111111'
        document.body.querySelector('img#imagem').style.boxShadow = '0px 0px 5px rgba(174, 222, 255, 1)'
        document.body.querySelector('section').style.background = '#12121a'
        document.body.style.color = '#9aedff'
        document.body.style.textShadow = '0px 0px 5px rgba(198, 165, 253, 1)'
        document.body.querySelector('section').style.boxShadow = '0px 0px 5px rgba(198, 165, 253, 1)'
    }
}