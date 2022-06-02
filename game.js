function computerPlay() {
    let a = "Rock";
    let b = "Paper";
    let c = "Scissors";

    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
        return a;
    } else if (rand === 1) {
        return b;
    } else {
        return c;
    }
}

function playRound(playerSelection, computerSelection) {
    const str1 = "Go again";
    const str2 = "You Lose! Paper beats Rock";
    const str3 = "You Lose! Rock beats Scissors";
    const str4 = "You Lose! Scissors beat Paper";
    const str5 = "You Win! Paper beats Rock";
    const str6 = "You Win! Rock beats Scissors";
    const str7 = "You Win! Scissors beat Paper";

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return str1;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return str1;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return str6;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return str5;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return str4;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        return str7;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return str3;
    }
}

const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));