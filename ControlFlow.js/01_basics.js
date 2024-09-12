// Basic ControlFlow Structure
// if(){

// }else if(){

// }else{

// }

let userLoggedIn=true
let loggedByGoogle=false
let loggedByEMail=true

if(userLoggedIn && (loggedByGoogle || loggedByEMail)){
    console.log("Welcome User");
}else{
    console.log("Please, Login First");
    
}

let ammount=1000

if (ammount<500){
    console.log('less than 500');
    
}else if(ammount<800){
    console.log('less than 800');
    
}else if(ammount<1000){
    console.log('less than 1000');
    
}else{
    console.log('less than 1200');
    
}

// Nullish Coalesing Operator(??)

let val1=5 ?? 10
let val2=null ?? 23
let val3=undefined ?? 52
let val4=null ?? 3 ?? 34
let val5= null ?? undefined
let val6= undefined ?? null

// console.log(val1)
// console.log(val2)
// console.log(val3)
// console.log(val4)
// console.log(val5)
// console.log(val6)


// terniary Operator(?)   => SHort Hand syntax for 1 conditional statement 

let name='Ashish'
name=="Ashish"?console.log("Your name is Ashish"):console.log("Whats your name");


// Truthy and falsy value/
// Falsy => 0,false, null, undefined, "", -0, BigInt(0n), NaN

// Truthy=> 1, "0", 'false', " ", [], {} 'null', "undefined" function(){}