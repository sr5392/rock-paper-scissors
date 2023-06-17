
function getComputerChoice() {
    const MIN = 1;
    const MAX = 3;

    const randomNumber = MIN + (Math.floor(Math.random() * 10) % MAX);

    switch(randomNumber) {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
        default:
            break;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Input: ");
    playerChoice = playerChoice.toUpperCase();

    if (playerChoice !== "ROCK" && 
        playerChoice !== "PAPER" &&
        playerChoice !== "SCISSORS") {

        console.log('Wrong Input! Only "ROCK","PAPER" or "SCISSORS" allowed.');
        return getPlayerChoice();
    }

    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    if (playerChoice === "ROCK" && computerChoice === "ROCK") {
        return "DRAW";
    }

    if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        return "LOSE";
    }

    if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        return "WIN";
    }



    if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        return "WIN";
    }

    if (playerChoice === "PAPER" && computerChoice === "PAPER") {
        return "DRAW";
    }

    if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        return "LOSE";
    }



    if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        return "LOSE";
    }

    if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        return "WIN";
    }

    if (playerChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        return "DRAW";
    }
}

function game() {
    let winCount = 0;
    let drawCount = 0;
    let loseCount = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice, computerChoice);
        
        switch (result) {
            case "WIN":
                winCount += 1;
                break;
            case "DRAW":
                drawCount += 1;
                break;
            case "LOSE":
                loseCount+= 1;
                break;
            default:
                break;
        }

        console.log(`Round ${i + 1} | ${result} | Player: ${playerChoice} - Computer: ${computerChoice}`);
    }

    if (winCount > loseCount) {
        return "The player won the game!";
    }

    if (loseCount > winCount) {
        return "The computer won the game!";
    }

    return "The game ended in a draw!";
}