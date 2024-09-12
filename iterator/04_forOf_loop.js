// usage of for each loop

let arr=[1, 2, 3, 4, 5, 6]
for (const num of arr) {
    // console.log(num);
}

const string="Ashish"
for (const char of string) {
    // console.log(char);
}


const States=new Map()
States.set("UP","Lucknow")
States.set("MP","Bhopal")
States.set("Bihar","Patna")
States.set("TamilNadu","Chennai")
States.set("Andhra Pradesh","Hydrabad")

// forOf loop to fetch only keys
for (const [state] of States) {
    // console.log(state);

}

// forOf loop to fetch only values
for (const [state] of States) {
    // console.log(States.get(state)); 
}

// forOf loop to fetch both key and values
for (const [state,capital] of States) {
    // console.log(state,'=>',capital);
}


let myObject={
    'js':"javaScript",
    'py':"Python",
    'java':"Java",
    'cpp':"C++"
}

// we cann`t use forOf loop to iterate an object
// for (const key of myObject) {
//     console.log(key)
// }


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

for (const item of ArraysOfObjects) {
    console.log(item.languageExtension)
}