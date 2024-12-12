console.log(5>1);
console.log(45==45)

console.log(45!=45)

console.log("2">1)

console.log(null>=0)
console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

console.log("2"===2)

// == check the number is same or not
// === strict check for number is same or not.


// Primitive data types 
// 1)String 
// 2)Number
// 3)Boolean
// 4)null
// 5)undefined
// 6)BigInt
// 7)Symbol

// non-primitive data types 
// 1)Objects
// 2) arrays
// 3)Functions

const id = Symbol('123')
console.log(id)
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 == sym2); // false
// reason every symbol is unique. so it is false.


const heros  =["shaktiman"," naagraj","doga"]
let myobj = {
    name:"ayush",
    age :20,
}
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof undefined); // undefined.
console.log(typeof (null== undefined)) // boolean

console.log(typeof heros) // objects



