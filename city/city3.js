const button=document.querySelector("button")
let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('container').appendChild(resultdiv)

//event listener
button.addEventListener('click',displaystats)
function displaystats(){
    //console.log('clicked')
    const input=document.getElementById("input")
const city=input.options[input.selectedIndex].value
//console.log(city)
let population = 0,literacyRate= 0, language=''
switch(city){
    case 'Bengalore':
        population=9643234
        literacyRate=77.94
        language='kannada'
        break;
        case 'Chennai':
            population=9965431
            literacyRate=99.54
            language='Tamil'
            break;
            case 'Madurai':
                population=999999
                literacyRate=99.99
                language='Tamil'
                break;
                case 'Coimbatore':
                    population=9534541
                    literacyRate=93.32
                    language='Tamil'
                    break;

}
let text=`The indian city of ${city} has a population of ${population}.laguage spoken is ${language} and literacy rate is ${literacyRate}`
document.getElementById('result').innerHTML=text

console.log(text)
}
