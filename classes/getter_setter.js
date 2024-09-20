class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    // getter,setter for email
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }


    // getter setter for password
    get password(){
        return `${this._password}ash`
    }

    set password(value){
        this._password=value
    }
}

// const ash=new User("a@ash.com","ldfe4f5")
// console.log(ash.password)


//behind the sence

function User2(email,password){
    this._password=password
    this._email=email

    Object.defineProperty(this,'email',{
        get: function email(){
            return this._email.toUpperCase()
        },
        set: function email(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get: function password(){
            return `${this._password}ash`
        },
        set: function password(value){
            this._password=value
        }
    })
}
const ash= new User2("a@ash.om","hdw9ge")
console.log(ash.password)