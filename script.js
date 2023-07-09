
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    const randomChoice = getRandomNumber(0, 2);
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[randomChoice];
}

function updateView() {
    pPlayerChoice.innerText = playerChoice;
    pComputerChoice.innerText = computerChoice;

    pPlayerScore.innerText = winCount;
    pComputerScore.innerText = loseCount;

    if (winCount >= 5) {
        divInfo.innerText = "YOU WON!";
        disableButtons();
        return;
    }

    if (loseCount >= 5) {
        divInfo.innerText = "YOU LOST!";
        disableButtons();
        return;
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

function updateScores() {
    if (playerChoice === computerChoice) return;

    if (playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
        playerChoice === "PAPER" && computerChoice === "ROCK" ||
        playerChoice === "SCISSORS" && computerChoice === "PAPER") {

        winCount++;
        return;
    } 

    loseCount++;
}

function playRound() {
    playerChoice = this.id.toUpperCase();
    computerChoice = getComputerChoice().toUpperCase();

    updateScores();
    updateView();
}

let playerChoice = "";
let computerChoice = "";

let winCount = 0;
let loseCount = 0;

const pPlayerChoice = document.querySelector(".player-choice");
const pComputerChoice = document.querySelector(".computer-choice");

const pPlayerScore = document.querySelector(".player-score");
const pComputerScore = document.querySelector(".computer-score");

const divInfo = document.querySelector(".round-result");

const btnReset = document.querySelector("#restart");
btnReset.addEventListener("click", resetView);

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

