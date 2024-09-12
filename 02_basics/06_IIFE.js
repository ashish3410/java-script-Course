// Immediately Invoke Function Expression(IIFE)

// To Write two IIFE then explicitly semi-Colon(;) must be inserted after end of first IIFE

(function sum(num1,num2){
    // Named IFEE
    return num1+num2
})(4,6);



(()=>{
    console.log(`hi this is IIFE`)
})();



// showing how to pass Parameter to IIFE
((name)=>{
    console.log(`Hi this is ${name}`);
    
})("Ashish")