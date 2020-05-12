function calcular() {

    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('div#resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossível contar!"
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        resultado.innerHTML = `Contando: `

        if (p <= 0) {
            window.alert("PASSO INVÁLIDO - CONSIDERAREMOS 1")
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1f449}`            
            }

        }else{
            for (let c = i; c >=f; c -=p) {

                resultado.innerHTML += `${c} \u{1f449}`                
            }
        }

        resultado.innerHTML += `\u{1F3C1}`
    }
    

    

    

    
}