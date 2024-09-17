const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 1 is completed")
        resolve("SuccessFull")
    },2000)
})

// promise1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            console.log("task Two is completed")
            resolve("success")
        }else{
            reject("ERROR: js went wrong")
        }
    },2000)
})

promise2.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>{
    console.log("finally always excutes rather then error occured or not ")
})