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

const btn = document.querySelectorAll('button');

function playRound(playerSelection, computerSelection) {
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
    const victory = `You Won the Game! The Computer Lost! The score was ${playerScore} - ${compScore}`;
    const defeat = `You Lost the Game! The Computer Lost! The score was ${compScore} - ${playerScore}`;
    let winner = false;

    while (!winner) {
        let result = btn.forEach(btn => {
            playerSelection = btn.getAttribute('class');
            btn.addEventListener('click', playRound)
        });

        const score = document.querySelector('score');

        if (result === str1) {
            score.textContent = `Tie! The score is ${playerScore} - ${compScore}`;
        } else if (result === str2 || result === str3 || result === str4) {
            compScore++;
            score.textContent = `You Lost! The score is ${playerScore} - ${compScore}`;
        } else if (result === str5 || result === str6 || result === str7) {
            playerScore++;
            score.textContent = `You won! The score is ${playerScore} - ${compScore}`;
        }

        if (playerScore === 5) {
            score.textContent = victory;
            winner = true;
        } else if (compScore === 5) {
            score.textContent = defeat;
            winner = true;
        }
    }
}

