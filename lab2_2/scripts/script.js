let correctNumber = Math.floor(Math.random() * 99);
console.log(correctNumber);
let correctMessage = "Congrats, you guessed within 7 attempts !";
let tooLowMessage = "Too Low !";
let tooHighMessage = "Too High !";
let invalidInput = "Please choose a number between 0 and 99";
let wonGames = 0;
let lostGames = 0;
let i = 0;

let alreadyPlayed = document.querySelector("#alreadyPlayed");
let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");

document.querySelector("#win").textContent = "Win : " + wonGames;
document.querySelector("#lost").textContent = "Lost : " + lostGames;

guessButton.addEventListener("click", function() {
    if (isNaN(guessInput.value) || guessInput.value === "" || guessInput.value > 99 || guessInput.value < 0) {
        guessResult.textContent = invalidInput;
        guessResult.style.color = "orange";
        return;
    }

    if (correctNumber == guessInput.value) {
        alreadyPlayed.textContent += " " + guessInput.value;
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
        wonGames++;
        document.querySelector("#win").textContent = "Win : " + wonGames;
        guessButton.disabled = true;
        playAgain();
    } 
    else {
        alreadyPlayed.textContent += " " + guessInput.value;
        i++;
        if (i >= 7) {
            guessResult.textContent = "You Lost ! The correct number was : " + correctNumber;
            guessResult.style.color = "red";
            lostGames++;
            document.querySelector("#lost").textContent = "Lost : " + lostGames;
            guessButton.disabled = true;
            playAgain();
        } 
        else if (correctNumber > guessInput.value) {
            guessResult.textContent = tooLowMessage;
            guessResult.style.color = "orange";
        } 
        else if (correctNumber < guessInput.value) {
            guessResult.textContent = tooHighMessage;
            guessResult.style.color = "orange";
        }
    }
});

function playAgain() {
    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Game";
    resetBtn.id = "reset";
    resetBtn.style.backgroundColor = "green";
    resetBtn.style.borderRadius = "10px"
    document.querySelector("#resetBtn").append(resetBtn);
    resetBtn.addEventListener("click", function() {
        correctNumber = Math.floor(Math.random() * 99);
        console.log("New number: " + correctNumber);
        i = 0;
        guessResult.textContent = "";
        alreadyPlayed.textContent = "";
        guessInput.value = "";
        guessButton.disabled = false;
        resetBtn.remove(); 
    });
}