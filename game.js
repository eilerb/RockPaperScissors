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

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return str1;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return str2;
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

function game() {
    let playerScore = 0;
    let compScore = 0;
    const victory = "You Won the Game! The Computer Lost!";
    const defeat = "You Lost the Game! The Computer ";
    const roundUpdateW = "You Won! The score is " + playerScore + " - " + compScore + " ";
    const roundUpdateL = "You Lost! The score is " + playerScore + " - " + compScore + " ";
    let playerSelection = prompt("Rock, Paper or Scissors?");
    
    for (let i = 0; i < 5; i++) {
        if (playRound() === str1) {
            i--;
        } else if (playRound() === str2 || str3 || str4) {
            compScore++;
            console.log(roundUpdateL);
        } else {
            playerScore++;
            console.log(roundUpdateW);
        }

        if (playerScore == 3) {
            console.log(victory);
            break;
        } else {
            console.log(defeat);
            break;
        }
    }
}

const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));