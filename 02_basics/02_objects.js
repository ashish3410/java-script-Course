// Singleton
// Object.create()

// Object Literals
let myId=Symbol("key1")
const jsUser={
    name:"Ashish",
    "contact no":35467734,
    age:18,
    isLongedIn:false,
    location:"Lucknow",
    recentLoginDay:["Monday","Tuesday","Friday"],
    [myId]:546
}
// console.log(jsUser)

// console.log(jsUser.age);  //accessing element using dot operator
// console.log(jsUser["location"]); //accessing element using SquareBracket []
// console.log(jsUser[myId]);  // Symbol can access only using []
// console.log(jsUser["contact no"]); //
// console.log(jsUser.contact no);  Throws an error

// Object.freeze(jsUser)  // freezes the objects and retrict any change n them

jsUser.age=45 // changes in js user objects

jsUser.detail=function(){
console.log(`Hello my name is ${this.name} and i live in ${this.location}`)  //
}
console.log(jsUser.detail());
// console.log(jsUser.detail);    //return function reference
console.log(jsUser);




