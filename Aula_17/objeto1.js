//INTRODUCAO BASICA A OBJETOS 

let eu = {nome: 'Luan',
sexo:'M', 
peso: 62.2,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

eu.engordar(5)
console.log(`${eu.nome} pesa ${eu.peso}Kg`)