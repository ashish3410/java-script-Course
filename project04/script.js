const ytLink = document.querySelector(".youTubeLink")
const guess = document.querySelector("#submitGuess")
let result = document.querySelector(".lowHigh")
const prev = document.querySelector(".previous")
const remain = document.querySelector(".remaining")
const newGameButton = document.querySelector(".newGame")
let userInput;

ytLink.addEventListener('click', GoToYT)
function GoToYT() {
    location.href = "https://www.youtube.com/watch?v=EGqHVjU-fas&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=35"
}
let prevGuesses = 0;
let remaining = 10;
const randomNum = Math.floor((Math.random() * 100) + 1)

guess.addEventListener("click", (event) => {
    event.preventDefault()
    userInput = parseInt(document.getElementById("guessField").value)
    validateGame()
    calChances()
    reduceChances()
    prevGuess()
})


function validateGame() {
    if (userInput < 0 || userInput > 100 || isNaN(userInput)) {
        result.innerHTML = "<h4>Please Enter the valid input (Number Between 1 to 100)</h4>"
        remaining = remaining + 1;
        remain.innerHTML = `Remaining Guesses: ${remaining}`
        return
    } else {
        if (userInput < randomNum) {
            result.innerHTML = `<h4> Your guess ${userInput} is low </h4>`
        } else if (userInput > randomNum) {
            result.innerHTML = `<h4> Your guess ${userInput} is high </h4>`
        } else if (userInput === randomNum) {
            result.innerHTML = `<h4> Hurray! You smash it </h4>`
        }
    }
}

function calChances() {
    if (remaining <= 0) {
        result.innerHTML = "<h4>Game Over! You've used all your guesses.</h4>";
        guess.disabled() = false
    }
}

function reduceChances() {
    remaining = remaining - 1;
    remain.innerHTML = `Remaining Guesses: ${remaining}`

}
function prevGuess() {
    prevGuesses = userInput
    prev.innerHTML = `Previous Guess ${prevGuesses}`
}
newGameButton.addEventListener("click", () => {
    prev.innerHTML = `Previous Guess`
    remain.innerHTML = `Remaining Guesses: 10`
    result.style.display="none"
    userInput=""
    

})
