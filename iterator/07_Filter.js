let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr=arr.filter(function (num){
    return num>4
})
// console.log(newArr);

let newarr=arr.filter( (num)=> num>6)
// console.log(newarr);


let myBooks=[
    {
        title:"Book One", genre:"Friction", publish:1999, edition:2008
    },
    {
        title:"Book Two", genre:"Non-Friction", publish:1987, edition:2000
    },
    {
        title:"Book Three", genre:"History", publish:2005, edition:2014
    },
    {
        title:"Book Four", genre:"Science", publish:1990, edition:2008
    },
    {
        title:"Book Five", genre:"Mythology", publish:2009, edition:2011
    },
    {
        title:"Book Six", genre:"Friction", publish:1987, edition:2000
    },
]

let newBooks=myBooks.filter( (bk)=>bk.genre==="Science")
// console.log(newBooks)


let newBk=myBooks.filter( (bk)=> bk.publish>1999)
// console.log(newBk)

let BK=myBooks.filter( (bk)=>{
    if(bk.publish>=2000 && bk.genre==="History"){
        return bk
    }
})
console.log(BK)

// channing
let nek=myBooks.filter((item)=>item.publish>=1990).filter((item)=>item.genre==="History")
console.log(nek);
