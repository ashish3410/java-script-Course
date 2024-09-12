//when we wanna break the loop after a specific condition is met, then we make use of "break" keyword
// for loop
for (let index = 0; index <=10; index++) {
    const element = index
    if(element==5){
        // console.log('5 is detected and loop is breaked');
        break
    }
    // console.log(element);
}

let array=["Ashish","Manish","Pradeep","Deepali"]
for (let i = 0; i < array.length; i++) {
    if(array[i]=="Pradeep"){
        break
    }
    // console.log(array[i])
}


// when we wanna to skip the specific iteration continue Keyword is used
for (let index = 0; index <=10; index++) {
    const element = index
    if(element==5){
        console.log('5 is detected we skkiped the element=5');
        continue
    }
    console.log(element);
}

for (let i = 0; i < array.length; i++) {

    if(array[i]=="Pradeep"){
        console.log('Pradeep is Skipped');
        continue
    }
    console.log(array[i])
}
