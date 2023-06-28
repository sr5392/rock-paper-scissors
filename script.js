
function getComputerChoice() {
    const MIN = 0;
    const MAX = 2;

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[MIN + Math.floor(Math.random() * 10) % (MAX + 1)];

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

function resetView() {
    winCount = 0;
    loseCount = 0;

    divInfo.innerText = "";

    enableButtons();
    updateView();
}

function playRound(event) {
    const playerChoice = event.target.id.toUpperCase();
    const computerChoice = getComputerChoice().toUpperCase();

    if (playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
        playerChoice === "PAPER" && computerChoice === "ROCK" ||
        playerChoice === "SCISSORS" && computerChoice === "PAPER") {

        winCount++;
    } else {
        loseCount++;
    }

    updateView();
}

let winCount = 0;
let loseCount = 0;

const divPlayerScore = document.querySelector(".player-score");
const divComputerScore = document.querySelector(".computer-score");
const divInfo = document.querySelector(".info");

const btnReset = document.querySelector(".reset");
btnReset.addEventListener("click", resetView);

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

