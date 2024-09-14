const ytLink=document.querySelector(".youTubeLink")
const guess=document.querySelector("#submitGuess")
const result=document.querySelector(".loWhigh")
const userInput=parseInt(document.getElementById("guessField").value)
const prev=document.querySelector(".previous")
const remain=document.querySelector(".remaining")


ytLink.addEventListener('click',GoToYT)
function GoToYT(){
    location.href="https://www.youtube.com/watch?v=EGqHVjU-fas&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=35"
}
let prevGuesses=0;
let remaining=10;
let playGame=true;
const randomNum=Math.floor((Math.random()*100)+1)

guess.addEventListener("submit",()=>{
    validateGame()
    calChances()
    reduceChances()
    prevGuess()
    if(userInput<randomNum){
        result.innerHTML=`<h4> Your guess ${userInput} is low </h4>`
    }else if(userInput.val>randomNum){
        result.innerHTML=`<h4> Your guess ${userInput} is high </h4>`
    }else if(userInput.val===randomNum){
        result.innerHTML=`<h4> Hurray! You smash it </h4>`
    }
})


function validateGame(){
    if(userInput=="" || userInput<0 || userInput>100 || isNaN(userInput)){
        result.innerHTML="Please Enter the valid input (Number Between 1 to 100)"
    }
} 

function calChances(){
    if(remaining===0){
        guess.ariaDisabled=false
    }
}

function reduceChances(){
    remaining=remaining-1;
    remain.innerHTML=`Remaining Guesses: ${remaining}`

}
function prevGuess(){
    prevGuesses=guess
    prev.innerHTML=`Previous Guess ${prevGuess}`
}

