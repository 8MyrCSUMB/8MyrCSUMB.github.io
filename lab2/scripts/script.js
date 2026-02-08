let correctNumber = Math.floor(Math.random() * 99);
console.log(correctNumber);
let correctMessage = "Congrat, you guessed within 7 attempts !";
let tooLowMessage = "Too Low !";
let tooHighMessage = "Too High !";
let youLostMessage = "You Lost";

let alreadyPlayed = document.querySelector("#alreadyPlayed");
let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");

// function displayWinMessage() {
//     guessResult.textContent = correctMessage;
//     guessResult.style.color = "green";
// }

let i = 0;

guessButton.addEventListener("click", function() {

    console.log(i);
    if(i >= 7) {
        guessResult.textContent = youLostMessage;
        guessResult.style.color = "red";
    }
    else if (correctNumber == guessInput.value) {
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
        i++;
    }
    else if(correctNumber > guessInput.value) {
        guessResult.textContent = tooLowMessage
        guessResult.style.color = "orange"
        i++
    }
    else if(correctNumber < guessInput.value) {
        guessResult.textContent = tooHighMessage;
        guessResult.style.color = "orange";
        i++
        
    }
    alreadyPlayed.textContent += " " + guessInput.value;

});




