// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     info(){
//         console.log(`The name of the user is ${this.username} and his email is ${this.email}`)
//     }

//     encryptPassword(){
//         console.log(`Encrypted Password is ${this.password}`)
//     }
// }

// class Teacher extends user{
//     constructor(username,email,password,location){
//         super(username,email,password)
//         this.location=location
//     }

//     getWholeInfo(){
//         console.log(`The name of the user is ${this.username}, his email is ${this.email} lived in ${this.location}`)
//     }
// }

// newUser=new user("AShish","example@gmail.com","2322")
// newUser.info()

// person=new Teacher("Ashish","example@gmail.com","353434","Lucknow")
// person.getWholeInfo()



//behind the scence

function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

user.prototype.getInfo=function(){
    console.log(`The name of the user is ${this.username} and his email is ${this.email}`)
}

user.prototype.encryptPassword=function(){
    console.log(`${this.password}dcks`)
}

newuser=new user("Ashish","exapmle@mail.com","3546")
newuser.getInfo()
newuser.encryptPassword()


function Teacher(username,email,password,location){
    user.call(this,username,email,password)
    this.location=location
}

Teacher.prototype.getWholeInfo=function(){
    console.log(`The name of the user is ${this.username}, his email is ${this.email} lived in ${this.location}`)
}

std=new Teacher("ashish","example@gmail.com","6554","Lucknow")
std.getWholeInfo()