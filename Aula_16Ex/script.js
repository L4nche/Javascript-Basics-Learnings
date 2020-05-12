// VARIÁVEIS NECESSÁRIAS
let numero = document.querySelector('input#numero')
let lista = document.getElementById('listanum')
let result = document.getElementById('resultado')
let valores = [] 

// FUNÇÃO DO BOTAO ADICIONAR 
function adicionarf() {  
    let opcao = document.createElement('option') //cria um option só dps q chamar a function

   if (validacaoNumero(numero.value) && !naLista(numero.value, valores)) {
        valores.push(Number(numero.value)) //add o numero no array
        //opção personalizada + valor true
        lista.appendChild(opcao)
        opcao.style.background = 'rgb(26, 137, 228)'
        opcao.text += `Número digitado: ${numero.value}`
        opcao.value = `numero${numero.value}`
        result.innerHTML = ''
        document.getElementById('numero').style.borderColor = ' rgb(74, 156, 78)'
   }else{
       //opção personalizada + valor false
        document.getElementById('numero').style.borderColor = '#c00' 
        window.alert('Numero invalido ou já encontrado') 
        lista.appendChild(opcao)
        opcao.text += `${numero.value} É INVÁLIDO OU JÁ FOI DIGITADO`
        opcao.style.background = '#c00'       
        
   }  
   numero.value = ''
   numero.focus()
}

//FUNÇÃO DA VALIDAÇÃO, PARAMETRO PEGA O NUM Q VIRA O NUMBER(NUMERO.VALUE) NA FUNCAO ADDF/LINHA14

function validacaoNumero(num) {
    if (Number(num) >= 1 && Number(num)<= 100) {
        return true
    }else{
        return false
    }    
}

//VERIFICA SE AQUELE ITEM ESTÁ NA LISTA, SE NÃO ESTIVER É IGUAL A -1 LOGO, ADICIONE +1
function naLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {//verifica se está na lista
        return true //está na lista
    }else{
        return false //não está lista
    }
    
}

function finalizar() {
//DESCOBRINDO MAIOR E MENOR VALOR DENTRO DO ARRAY  E SOMA OS VALORES COM .REDUZE       
//VERIFICA SE A VARIAVEL TEM ALGUM VALOR, SE NÃO FINALIZA A ANALISE DOS VALORES ADICIONADOS
    if (valores.length == 0) {
        window.alert('opa')
        result.innerHTML = "Impossível analisar!"
        result.style.color = '#c00'
        result.style.fontWeight = '600'
    }else{
        let total = valores.length
        let max = valores.reduce(function (menor,maior) {
            return Math.max(menor,maior);
        })
        let min = valores.reduce(function (menor, maior) {
            return Math.min(menor, maior);
        })
        let soma = valores.reduce(function (total, numero) {
            return total  + numero
        })
        let media = soma / total
//RESULTADO DA ANALISE NO GERAL
        result.innerHTML = ''
        result.innerHTML += `<p>Temos uma lista com <strong>${valores.length}</strong> número(s)</p>`
        result.innerHTML += `<p>O maior valor da lista é: <strong>${max}</p>`
        result.innerHTML += `<p>O menor valor da lista é: <strong>${min}</p>`
        result.innerHTML += `<p>A soma dos valores é: <strong>${soma}</p>`
        result.innerHTML += `<p>A média dos valores é: <strong>${media.toFixed(1)}</p>`
        result.style.color =  'rgb(26, 137, 228)'
    } 

}


