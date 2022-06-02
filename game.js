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

const str1 = "Go again";
const str2 = "You Lose! Paper beats Rock";
const str3 = "You Lose! Rock beats Scissors";
const str4 = "You Lose! Scissors beat Paper";
const str5 = "You Win! Paper beats Rock";
const str6 = "You Win! Rock beats Scissors";
const str7 = "You Win! Scissors beat Paper";

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, Scissors, GO!").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == computerSelection.toLowerCase()) {
        return str1;
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return str2;
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return str6;
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return str5;
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return str4;
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return str7;
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return str3;
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    const victory = "You Won the Game! The Computer Lost!";
    const defeat = "You Lost the Game! The Computer Won!";

    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result === str1) {
            i--;
            console.log("Tie! The score is " + playerScore + " - " + compScore + " ");
            continue;
        } else if (result == str2 || result == str3 || result == str4) {
            compScore++;
            console.log("You Lost! The score is " + playerScore + " - " + compScore + " ");
            continue;
        } else if (result == str5 || result == str6 || result == str7) {
            playerScore++;
            console.log("You Won! The score is " + playerScore + " - " + compScore + " ");
        }
    }

    if (playerScore >= 3) {
        console.log(victory);
    } else {
        console.log(defeat);
    }
}

console.log(game());
