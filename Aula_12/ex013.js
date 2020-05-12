var agora = new Date()
var diasema = agora.getDay()

/*
    0 Domingo
    1 Segunda
    2 Terça
    3 Quarta
    4 Quinta
    5 Sexta 
    6 Sabado
*/

switch (diasema) {
    case 0:
        console.log('DOMINGO')
        break;

    case 1:
        console.log('SEGUNDA')
        break;
    
    case  2:
        console.log('TERÇA')
        break;
    
    case 3:
        console.log('QUARTA')
        break;

    case 4:
        console.log('QUINTA')
        break;
    
    case 5:
        console.log('SEXTA')
        break;
    
    case 6:
        console.log('SÁBADO')
        break;
    
    default:
        console.log('ERRO - DIA INVÁLIDO')
        break;
}