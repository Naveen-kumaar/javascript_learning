//class- data vayum data realted ana methods um oru class kulla group panni vechurkanum
let item ={
    name:'phone',
    price:'25000',
    quantity:1,
    range:['electronic','electric','phone'],
    dimensions:{
        length:9,
        breadth:34,
        height:34,
    }
}
console.log(item)

console.log(item.range[0])
console.log(item.dimensions.length)

//another way to create an object
let item2 = new Object();
item2.name='mobile'
item2.price='4500'
item2.quantity='1'
console.log(item2)
//particular object mattum select pannanum na
console.log(item2.name)

//using dot notation use panni access pannirukom
// dot notation use panni altrate um panlam
item2.price="26000"

console.log(item2)
    //dot notation use panni another object um add pannlamm

item2.returnable= 'true'
console.log(item2)
//square bracket notation
console.log(item2['price'])
item2['returnable'] = 'false'
console.log(item2)
// another method
let key='price'
item2[key]=57999
console.log(item2)



rio={
    name:'naveen',
    age:'23',
    place:'paramakudi',
    address(){
        console.log("paramakudi ramnad distict")
    },
    native(){
        console.log("vankkam da mapla mudukulathur la irunthu")

    }
}
rio.address()



