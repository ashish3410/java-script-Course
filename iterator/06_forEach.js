let arr=[1, 2, 3, 4, 5, 6]
arr.forEach(function (item){
    // console.log(item);
})
// ________________________________________________________________________________
// Arrow Function
arr.forEach((num,index,arr)=>{
    // console.log(num,index,arr);
    
})
// ________________________________________________________________________________
// for Each loop is not used in string
// let str="Ashish"
// str.forEach((char)=>{
//     console.log(char);
    
// })

// ________________________________________________________________________________
const States=new Map()
States.set("UP","Lucknow")
States.set("MP","Bhopal")
States.set("Bihar","Patna")
States.set("TamilNadu","Chennai")
States.set("Andhra Pradesh","Hydrabad")

States.forEach((item,key,Map)=>{
    // console.log(item,"=>",key,Map);
    
})

// ________________________________________________________________________________
// we can also pass function to a forEach loop
function printMe(item){
    // console.log(item)
}
arr.forEach(printMe)


// ________________________________________________________________________________
let ArraysOfObjects=[
    {
        'languageName':"JavaScript",
        'languageExtension':"js"
    },
    {
        'languageName':"Python",
        'languageExtension':"py"
    },
    {
        'languageName':"Java",
        'languageExtension':"java"
    }
]
ArraysOfObjects.forEach((item)=>{
    console.log(item.languageExtension);
    
})