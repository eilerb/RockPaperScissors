function computerPlay() {
    let a = 'rock';
    let b = 'paper';
    let c = 'scissors';

    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
        return a;
    } else if (rand === 1) {
        return b;
    } else {
        return c;
    }
}

const str1 = 'Go again';
const str2 = 'You Lose! Paper beats Rock';
const str3 = 'You Lose! Rock beats Scissors';
const str4 = 'You Lose! Scissors beat Paper';
const str5 = 'You Win! Paper beats Rock';
const str6 = 'You Win! Rock beats Scissors';
const str7 = 'You Win! Scissors beat Paper';

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, Scissors, GO!').toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        return str1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return str2;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return str6;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return str5;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return str4;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return str7;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return str3;
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    const victory = 'You Won the Game! The Computer Lost!';
    const defeat = 'You Lost the Game! The Computer Won!';
}

console.log(game());
