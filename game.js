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

const score = document.querySelector('.score');
const result = document.querySelector('.result');
let playerScore = 0;
let compScore = 0;

const btn = document.querySelectorAll('button');

if (playerScore < 5 || compScore < 5) {
    let round = btn.forEach(btn => {
        playerSelection = btn.getAttribute('class');
        btn.addEventListener('click', playRound)
    });
}

score.textContent = '0 - 0';

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

    score.textContent = `${playerScore} - ${compScore}`;
    
    if (playerScore === 5) {
        result.textContent = `You Won the Game!`;
        winner = true;
    } else if (compScore === 5) {
        result.textContent = `You Lost the Game!`
        winner = true;
    }
}
