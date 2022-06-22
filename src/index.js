function nome()
{console.log('Ola, mundo!')}
nome()

function nomee(x){
let sobrenome = "Joca"   
    console.log(sobrenome, x)
}
let sobrenome = "jojo"
console.log(sobrenome)
nomee('Carioca') 


function conta(x, y, a, b){
    return x**y - a * b
}

let result = conta(10, 3, 40, 12)
console.log(result)

 
function frase(nome, idade, endereço, escolaridade){
    console.log(`Meu nome é ${nome} , tenho ${idade} anos, moro em ${endereço}, e estudo atualmente no ${escolaridade}`)
}

frase('João', 16, 'Maranhão', 'ensino medio')


//Estrutura do else if
let dia = 6
if(dia === '6'){
if(dia === 0){
    console.log("Domingo")
}else if (dia === 1){
    console.log("Segunda")
}else if (dia === 2){
    console.log("Terça")
}else if (dia === 3){
    console.log("Quarta")
}else if (dia === 4){
    console.log("Quinta")
}else if (dia === 5){
    console.log("Sexta")
}else if (dia === 6){
    console.log("Sábado")
}else{
    console.log("Não entendi sua solicitação")
}} 


//Estrutura Basica do switch

/* switch(exepressão){
    case valor1: //executa quando o resultador for a valor1
    break;
    case valor2: //executa quando o resultador for a valor2
    break;
    default: //executa quando o valor é diferente de todos os cases
    break;
} */


let diaa = 0
switch(diaa){
    case 0:
        console.log("domingo")
    break;
    case 1:
        console.log("segunda")
    break;
    case 2:
        console.log("terça")
    break;
    case 3:
        console.log("quarta")
    break;
    case 4:
        console.log("quinta")
    break;
    case 5:
        console.log("sexta")
    break;
    case 6:
        console.log("sabado")
    break;
    default:
        console.log("Dia invalido")
    break;   
} 