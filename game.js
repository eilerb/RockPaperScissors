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

// const str1 = 'Tie';
// const str2 = 'You Lose! Paper beats Rock';
// const str3 = 'You Lose! Rock beats Scissors';
// const str4 = 'You Lose! Scissors beat Paper';
// const str5 = 'You Win! Paper beats Rock';
// const str6 = 'You Win! Rock beats Scissors';
// const str7 = 'You Win! Scissors beat Paper';

const score = document.querySelector('score');
let playerScore = 0;
let compScore = 0;
const victory = `You Won the Game! The Computer Lost! The score was ${playerScore} - ${compScore}`;
const defeat = `You Lost the Game! The Computer Lost! The score was ${compScore} - ${playerScore}`;

const btn = document.querySelectorAll('button');
let result = btn.forEach(btn => {
    playerSelection = btn.getAttribute('class');
    btn.addEventListener('click', playRound)
});

score.textContent = `${playerScore} - ${compScore}`;

function playRound() {
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        compScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        compScore++;
    }

    if (playerScore === 5) {
        score.textContent = victory;
        winner = true;
    } else if (compScore === 5) {
        score.textContent = defeat;
        winner = true;
    }
}
