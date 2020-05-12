function calculartabuada() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('selecionar')

    if (num.value.length == 0) {
        window.alert('DIGITE UM NÚMERO PARA CALCULAR')
    } else{

        let n = Number(num.value)
        let numero2 = 1
        tab.innerHTML = ""       
        do {
            let opcao = document.createElement('option')
            tab.appendChild(opcao)
            opcao.text = `${n} X ${numero2} = ${n * numero2} `
            opcao.value = `tab${numero2}`
            numero2++
        }while(numero2 <= 10)
           
        
        
    }
}