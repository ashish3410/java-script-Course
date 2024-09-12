let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let total=arr.reduce( (acc,CurVal)=>{
    // console.log(`value of acc ${acc} and value of curVal is ${CurVal}`)
    return acc+CurVal},0)
// console.log(total);


let shoppingCart=[
    {
        courseName:"Js Course",
        coursePrice:2999
    },
    {
        courseName:"py Course",
        coursePrice:3999
    },
    {
        courseName:"Java Course",
        coursePrice:999
    },
    {
        courseName:"Web dev Course",
        coursePrice:99
    },
]

let amountToPay=shoppingCart.reduce( (acc,item)=> acc+item.coursePrice,0)
console.log(amountToPay);
