// callBackHell
// const getdata=function(data,getNextData){
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`data:${data}`)
//             if(getNextData){
//                 getNextData()
//             }
//         },2000)
//     })

// }

// this is called call Back Hell
// console.log("getting data1....")
// getdata(1,()=>{
//     console.log("getting data2....")
//     getdata(2,()=>{
//         console.log("getting data3....")
//         getdata(3,()=>{
//             console.log("getting data4....")
//             getdata(4)
//         })
//     })
// })

// and to solve the call Bacl hell problem we use promise channing



// promises creation
function getdata(data) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data == 4) {
                console.log("data is Fetched")
                resolve("success")
            } else {
                reject("Some error occured: data is not fetched")
            }
        }, 5000)
    })
}
// const p1=getdata(5)
// p1.then((res)=>{
//     console.log(res)
// })
// p1.catch((err)=>{
//     console.log(err)
// })


// promise Chaining
function getdata(data) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data:${data}`)
            resolve("success")
        }, 2000)
    })
}

// chainning
// const p1=getdata(3)
// console.log("getting data3....")
// p1.then((res)=>{
//     console.log("getting data4....")
//     getdata(4).then((res)=>{
//         console.log("getting data5....")
//         getdata(5).then((res)=>{

//         })
//     })
// })



// const p1 = getdata(1)
// console.log("getting data1....")
// p1
// .then((res) => {
//     console.log("getting data2....")
//     return getdata(2)
// })
// .then((res) => {
//     console.log("getting data3....")
//     return getdata(3)
// })
// .then((res) => {
//     console.log(res)
// })




// console.log("getting data 1....")
// getdata(1)
// .then((res)=>{
//     console.log("getting data 2....")
//     return getdata(2)
// }).then((res)=>{
//     console.log("getting data 3....")
//     return getdata(3)
// })
// .then((res)=>{
//     console.log(res)
    
// })



// AsyncAwait

function getdata(data) {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log(`data:${data}`)
           resolve("success")
        }, 5000)
    })
}

async function gettingData(){
    console.log("getting data1....")
    await getdata(1);
    console.log("getting data2....")
    await getdata(2)
    console.log("getting data3....")
    await getdata(3)
}