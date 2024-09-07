let addTwo=function (num1,num2){
    console.log(num1+num2)
}
addTwo(4,6)


// an Error is occured "Cannot access 'add' before initialization"
console.log(add(4,8))
let add=function (num1,num2){
    return num1+num2
}



//this can be possible, no error occured
console.log(multi(4,5))
function multi(num1,num2){
    return num1*num2
}

