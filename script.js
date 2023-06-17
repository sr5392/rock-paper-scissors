
function getComputerChoice() {
    const MIN = 1;
    const MAX = 3;

    const randomNumber = MIN + (Math.floor(Math.random() * 10) % MAX);

    switch(randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            break;
    }
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if (playerChoice === "ROCK" && computerChoice === "ROCK") {
        return "Draw";
    }

    if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        return "Lose";
    }

    if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        return "Win";
    }



    if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        return "Win";
    }

    if (playerChoice === "PAPER" && computerChoice === "PAPER") {
        return "Draw";
    }

    if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        return "Lose";
    }



    if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        return "Lose";
    }

    if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        return "Win";
    }

    if (playerChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        return "Draw";
    }
}

const playerChoice = "Rock";
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));
