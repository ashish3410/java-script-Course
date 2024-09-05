// there are two type of dataType in js

//  1. Premitive dataType    2. Non-Primitive (Reference Type)


// 1. primitive => String ,Number, Boolean, null, Undefined, BigInt, Symbol-> used to define a unique variables


//  2. Non-Primitive => Array , Objects, Function


let Id=Symbol("123")
let anotherId=Symbol("123")

console.log(Id==anotherId);   //return False


let BigInt=54346544n;
// console.log(typeof BigInt)


const heroes=["Shaktiman" ,"Junoir Ji", "Naagraj"];
// console.log(heroes)
// console.log(typeof heroes)

const object={
    "Name":"Ashish",
    "age":18
}
// console.log(object);
// console.log(typeof object);

let myFunction=function(){
    console.log("Hello World");
    
}
// console.log(myFunction);
// console.log(typeof myFunction);
