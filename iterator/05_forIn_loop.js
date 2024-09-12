// ForIN loop is basically is used to iterate the objects


const arr=[1, 2, 3, 4, 5, 6]
// It will return keys of the array
for (const num in arr) {
    // console.log(num);
}

// this is how we access items of arr
for (const key in arr) {
//    console.log(arr[key]);  
}


const str="Ashish"

// this is how we access the char of String using forIn Loop
for (const char in str) {
    // console.log(str[char]);
}

let myObject={
    js:"JavaScript",
    py:"Python",
    java:"Java",
    cpp:"C++"
}

// use of forIn loop to access the keys of Object
for (const key in myObject) {
    // console.log(key)
}

// this is how we access the values of Objects
for (const key in myObject) {
    // console.log(myObject[key])
}


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

// this is not working
for (const item in ArraysOfObjects) {
    console.log(ArraysOfObjects[item].languageName)
}