// two type of memory assign to a variable
//  1. Stack (All the primitive data type is stored in Stack memory)=> when we create another variable with same value as first variable then copy of the first 
//              varialble is passed means change in one variable does not affect the value of another variable

//  2. heap (all Non-primitive dataType stored in heap) => when we create another variable with same value as first variable then both the variable refered to a same memory reference


let var1="Ashish"
let var2="Ashish"
var2="Manish"   //change only var2
// console.log(var1)
// console.log(var2)


let objVar={
    name:"Ashish",
    email:"ashish@example.com"
}

let anotherObjvar=objVar

anotherObjvar.email="example@google.com" //change both var.email

console.log(objVar.email);
console.log(anotherObjvar.email);
