let num=654.54
// console.log(num);

let num1=new Number(555)
// console.log(num1);


// Methods of Number
// console.log(num1.toFixed(2))
// console.log(num.toPrecision(3)); 
// console.log(num1.toString())



// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math.abs(-1)); // return positive number
console.log(Math.round(432.5));  //___
console.log(Math.ceil(432.44));  //   |___ round off the value
console.log(Math.floor(432.94)); //___|
console.log(Math.sqrt(25));
console.log(Math.random())
console.log(Math.floor((Math.random()*10)+1))  //Return from 1 to 9

// when we want random number btw a range
let max=20
let min=10
console.log(Math.floor(Math.random()*(max-min+1)+min));  // Return random number btw 10 to 20
