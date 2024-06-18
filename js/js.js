

console.log(isPositive(2))//hoisting
function isPositive(num){
    return num>=8
}
console.log(isPositive(8))
console.log(greet)
//default parameter
function greet (name ="vanakkam  doi"){//
    console.log("hello",name)
}
console.log(greet())
/*recursion- function calling itself
function kulla irunthu athe function ah! call pannom na
athuku peru than Recursion*/

//factorial

function fact(n){

    if (n==1)
        return 1
    return n*fact(n-1)    
}
console.log(fact(4))



let bikes =[2,4,6,8,10]
let correctans= function(bikes){
    let sum = 0 
    for(let val of bikes){
        sum+=val
    }
    return sum
}
console.log(correctans(bikes))

// arrow  funtion
let volume = (l,b,h)=>{return l*b*h}
console.log(volume(4,3,2))
//area of circle
let area

 /* Generators- generates value by one by one
  generate represents using * symbol*/


 console.clear()
 
 function*indexgenerator(){
    let index= 1
    while(true){
        yield index++
     }
 }
 const gen = indexgenerator();
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)
 console.log(gen.next().value)

 //callback- function passed as argument

  function murali(name){
     console.log('hello',name)
 }

  console.log(murali('shamuel'))
 
 function muraliheadding(name){
    const heading= document.querySelector('h3')
    heading.innerHTML='vanakkam da mapla  '+  name
 }
 console.log(muraliheadding('ezra'))

 function navi(callback){
     callback('sattii')
  }
  //navi(muraliheadding)
 
 console.log('hello')

 //using arrow function
 navi(name=>{
    const heading= document.querySelector('h3')
    heading.innerHTML='vanakkam da mapla  '+  name
 })

//foreach

arr=['ak nithish','abd basi','chan ck']
arr.forEach(print)
function print(val){
    console.log(val.toUpperCase())
}
console.log(arr)
//using arrow function
arr.forEach(val=>console.log(val))

arr.forEach((val,index,arr)=>{
    arr[index]=val.toUpperCase()})


console.log(arr)    
console.log('hllo')
console.clear()
//dropdown ,select option
bikes['r15','rx100','rr310','royalenfield','rtr310']
bikes.forEach(val=>{
    const opt = document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('dropdown').appendChild

})//check the error



art['madurai','ramnad','sivagangai','chennai']
console.log(art(1))
arr.forEach(val=>{
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('dropdown').appendChild

})

//map-execute callback for each array
//that elements and return new array
