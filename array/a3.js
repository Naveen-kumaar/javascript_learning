let  matrix=[5,6,7,"vanakkam","df"]
console.log(matrix[3])
let array=[[2,3,4],[5,7,8],[9,8,7]]
console.log(array[0][2])
//array method neraiya irukku sari ya athula push pop rendu irukku
let arr=["a","b","c","d","e","f","g"] 
//push method - add element to the end
arr.push("h")
console.log(arr)
//pop method -removes element from the end 
arr.pop()
console.log(arr) 
//shift-removes element from the start

console.log(arr.shift())
//unshift add from the starting element

console.log(arr.unshift("nn"))
//splice used to delete and replace
//1st parameter-starting index value
//2nd parameter- no of element to be deleted from the starting index
//3rd parameter-values to be inserted from the starting index
arr.splice(1,2,"x","y")//altered replace the element
arr.splice(1,1)//delete the element
console.log(arr)
arr.splice(0,0,"a","b")
console.log(arr)
console.log()
//reverse
arr.reverse()
console.log(arr)
//join- converts array to string
let str=arr.join()
console.log(str)
//split-converts string to array
let name="t-r-e-t-s"
let peru=name.split("-")
console.log(peru)  
//concat and spread operator
let no1=[1,2,3]
let no2=[4,5,6]
let no3=[no1,no2]
console.log(no3)

no3=no1.concat(no2)
console.log(no3)

let no4=[...no1,...no2]
console.log(no4)