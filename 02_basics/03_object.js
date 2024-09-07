// let user=new Object()

let user={}
// console.log(user);

user.name="ashish"
user.email="some@gmail.com"
user.age=12
user.isLoggedIn=false
// console.log(user)


console.log(Object.keys(user))
console.log(Object.values(user))

// how to access element in nested Object
const tinderUSer={
    name:{
        userFullname:{
            firstName:"Ashish",
            lastName:"Kumar"
        }
    }
}
// console.log(tinderUSer.name.userFullname.firstName)



// *********************Concatenation of two or more objects**********************************
let obj1={1:"a",2:"b"}
let obj2={3:"c",4:"d"}
let obj3={5:"a",6:'b'}

// +++++++++++++method 1+++++++++++++++
// let obj4={obj1,obj2,obj3}
// console.log(obj4);

// +++++++++++++ methid 2 +++++++++++++
// let obj4=Object.assign({},obj1,obj2,obj3)
// console.log(obj4)

// +++++++++++++ method 3 +++++++++++++
let obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

