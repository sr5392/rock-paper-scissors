
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    const randomChoice = getRandomNumber(0, 2);
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[randomChoice];
}

function updateView() {
    divPlayerScore.innerText = winCount;
    divComputerScore.innerText = loseCount;

    if (winCount >= 5) {
        divInfo.innerText = "YOU WON!";
        disableButtons();
    }

    if (loseCount >= 5) {
        divInfo.innerText = "YOU LOST!";
        disableButtons();
    }
}

function disableButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

function enableButtons() {
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

function resetScores() {
    winCount = 0;
    loseCount = 0;
}

function resetView() {
    divInfo.innerText = "";

    resetScores();
    enableButtons();
    updateView();
}

function updateScores(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return;

    if (playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
        playerChoice === "PAPER" && computerChoice === "ROCK" ||
        playerChoice === "SCISSORS" && computerChoice === "PAPER") {

        winCount++;
        return;
    } 

    loseCount++;
}

function playRound(event) {
    const playerChoice = event.target.parentNode.id.toUpperCase();
    const computerChoice = getComputerChoice().toUpperCase();

    updateScores(playerChoice, computerChoice);
    updateView();
}

let winCount = 0;
let loseCount = 0;

const divPlayerScore = document.querySelector(".player-score");
const divComputerScore = document.querySelector(".computer-score");
const divInfo = document.querySelector(".info");

const btnReset = document.querySelector("#restart");
btnReset.addEventListener("click", resetView);

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

