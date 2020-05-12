function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var sano = document.querySelector('input#txtano')
    var result = document.querySelector('div#res')

    if (sano.value == 0 || sano.value > ano) {

        window.alert('[ERRO] VERIFICA AI E TENTA DE NOVO')

    } else{

        var fgenero = document.getElementsByName('radsex')
        var idade = ano - Number(sano.value)
        var txtgen = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fgenero[0].checked) {
            txtgen ='Homem'
            document.body.style.background = 'rgba(198, 165, 253, 1)'
            if (idade >=0 && idade <= 10){
                //BEBE
                img.setAttribute('src', 'foto_bebe_m.png')
            }else if (idade < 20) {
                //JOVEM
                img.setAttribute('src','foto_jovem_m.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src','foto_homem_m.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'foto_idoso_m.png')
            }
            
        } else if(fgenero[1].checked){
            txtgen = 'Mulher'
           
            if (idade >=0 && idade <= 10){ document.body.style.background = '#feb395'
                img.setAttribute('src', 'foto_bebe_f.png')
            }else if (idade < 20) {
                //JOVEM
                img.setAttribute('src','foto_jovem_f.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src','foto_adulto_f.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'foto_idoso_f.png')
            }

        }
       
        
        result.innerHTML = `É um(a) ${txtgen} com ${idade} anos.`
        result.appendChild(img)
       
        
        
        
        
        
    }
}