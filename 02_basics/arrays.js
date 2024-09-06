const myArr=[0, 1, 2, 3, 4, 5]

myArr.push(6)
myArr.push(7)
myArr.push(8)
myArr.pop()
// console.log(myArr);

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(2))
// console.log(myArr.slice(1,5))  // return only portion of the array
// console.log("A",myArr)
// console.log(myArr.splice(1,4))  //remove the portion of Arrays form original arrays and last index is also included
// console.log("B",myArr);


const marverlHeroes=["SpiderMan","IronMan","AntMan","Thor"]
const dcHeroes=["Flase","SuperMan","BatMan"]

// pushes dcHeroes as a Array
// marverlHeroes.push(dcHeroes)
// console.log(marverlHeroes)

// concatinate both arrays
const allHeroes=marverlHeroes.concat(dcHeroes)
console.log("1",allHeroes);
const allNewArrays=marverlHeroes.flat(...allHeroes, ...dcHeroes)
console.log(("2",allNewArrays));


console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"))

let score1=562
let score2=546
let score3=876

console.log(Array.of(score1,score2,score3))