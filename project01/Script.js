const home=document.querySelector('.home')
const ytLink=document.querySelector(".youTubeLink")
const button=document.querySelectorAll('.button')
// const b2=document.querySelector("#Yellow")
// const b3=document.querySelector('#Green')
// const b4=document.querySelector("#Black")
const body=document.querySelector("body")
ytLink.addEventListener('click',GoToYT)
function GoToYT(){
    location.href="https://www.youtube.com/watch?v=EGqHVjU-fas&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=35"
}
button.forEach((button)=>{
    // console.log(button)
    button.addEventListener("click",(e)=>{
        const key=e.target.id
        switch (key) {
            case "White":
                body.style.backgroundColor="white"
                body.style.color="black"
                break;
            case "Yellow":
                body.style.backgroundColor="yellow"
                body.style.color="black"
                break;
            case "Green":
                body.style.backgroundColor="green"
                body.style.color="black"
                break;
            case "Black":
                body.style.backgroundColor="black"
                body.style.color="white"
                break;
            default:
                break;
        }
    })
})

// b1.addEventListener("click",whiteBgc)
// function whiteBgc(){
//     body.style.backgroundColor="white";
//     body.style.color="black"
//     b1.backgroundColor="gray"
// }

// b2.addEventListener("click",yellowBgc)
// function yellowBgc(){
//     body.style.backgroundColor="yellow";
//     body.style.color="black"
// }

// b3.addEventListener("click",greenBgc)
// function greenBgc(){
//     body.style.backgroundColor="green";
//     body.style.color="black"
// }

// b4.addEventListener("click",blackBgc)
// function blackBgc(){
//     body.style.backgroundColor="black";
//     body.style.color="white"
// }