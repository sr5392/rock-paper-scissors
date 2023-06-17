
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