let correctNumber = Math.floor(Math.random() * 99);
let correctMessage = "Congrats, you guessed within 7 attempts !";
let tooLowMessage = "Too Low !";
let tooHighMessage = "Too High !";
let youLostMessage = "You Lost !";

let alreadyPlayed = document.querySelector("#alreadyPlayed");
let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");

// function displayWinMessage() {
//     guessResult.textContent = correctMessage;
//     guessResult.style.color = "green";
// }

let i = 0;

console.log(correctNumber);
guessButton.addEventListener("click", function() {


    console.log(i);
    if (correctNumber == guessInput.value) {
        alreadyPlayed.textContent += " " + guessInput.value;
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
        i++;
        return
    }

    else if(correctNumber > guessInput.value) {
        alreadyPlayed.textContent += " " + guessInput.value;
        guessResult.textContent = tooLowMessage;
        guessResult.style.color = "orange";
        i++;
    }

    else if(correctNumber < guessInput.value) {
        alreadyPlayed.textContent += " " + guessInput.value;
        guessResult.textContent = tooHighMessage;
        guessResult.style.color = "orange";
        i++;
    }

    if(i >= 7) {
        guessResult.textContent = youLostMessage;
        guessResult.style.color = "red";
        return
    }

});




