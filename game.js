const score = document.querySelector('.score');
const result = document.querySelector('.result');
const btn = document.querySelectorAll('button');
let playerScore = 0;
let compScore = 0;
score.textContent = '0 - 0';

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

if (playerScore < 5 || compScore < 5) {
    let round = btn.forEach(btn => {
        playerSelection = btn.getAttribute('class');
        btn.addEventListener('click', playRound)
    });
}

function playRound() {
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
    }

    score.textContent = `${playerScore} - ${compScore}`;

    if (playerScore === 5) {
        result.textContent = `You Won the Game!`;
        winner = true;
    } else if (compScore === 5) {
        result.textContent = `You Lost the Game!`
        winner = true;
    }
}
