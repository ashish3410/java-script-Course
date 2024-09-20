// closure Scoping


// inner function have the access of variables of outer function

// function outer(){
//     let name="Ashish"
//     function inner(){
//         console.log(name)
//     }
//     inner()
// }

// outer()


// lexical Scoping

function outer(){
    let name="Ashish"
    function inner(){
        console.log(name)
    }
    return inner
}

const store=outer()
store()