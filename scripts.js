
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let msg = document.querySelector('.message');
let res = document.querySelector('.final-result');
let roundRes = document.querySelector('.results')
let compScore = document.querySelector('#computerScoreDisplay');
let humScore = document.querySelector('#humanScoreDisplay');
let btn = document.querySelector('#refreshButton');

let computerScore = 0;
let humanScore = 0;
let roundCount = 0;

function increaseHumanScore() {
    humanScore++;
    humScore.textContent = humanScore;
}

function increaseComputerScore() {
    computerScore++;
    compScore.textContent = computerScore;
}

function getComputerChoice(){
    const gameChoices = ["rock", "paper", "scissors"];
    let choice = (Math.floor(Math.random() * gameChoices.length));
    return gameChoices[choice];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        msg.textContent = "A tie! Looks like you’re both secretly teaming up🤔";
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        msg.textContent = "You Lose! paper beats rock☹️";
        increaseComputerScore();

    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        msg.textContent = "You Won! rock beats scissors😃";
        increaseHumanScore();
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        msg.textContent = "You Won! paper beats rock😃";
        increaseHumanScore();
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        msg.textContent = "You Lose! scissors beats paper☹️";
        increaseComputerScore();
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        msg.textContent = "You Lose! rock beats scissors☹️";
        increaseComputerScore();
    }
    else {

        msg.textContent = "You Won! scissors beats paper😃";
        increaseHumanScore();
    }
}

function showEndScreen() {
    if (humanScore > computerScore) {
        roundRes.style.display = "none";
        res.style.display = "flex";
        btn.style.display = "block";
        res.textContent = "Congratulations! You Won😃";
        btn.addEventListener('click', function() {
            window.location.reload();
        });
        
    }
    else if (computerScore > humanScore) {
        roundRes.style.display = "none";
        res.style.display = "flex";
        btn.style.display = "block";
        res.textContent = "Oops! You Lose☹️";
        btn.addEventListener('click', function() {
            window.location.reload();
        });
        
    }
    else {
        roundRes.style.display = "none";
        res.style.display = "flex";
        btn.style.display = "block";
        res.textContent = "Game Is Draw!🫱🏻‍🫲🏻";
        btn.addEventListener('click', function() {
            window.location.reload();
        });
        
    }
}

function rounds(e) {
    if (roundCount < 5) {
        let humanChoice = e.target.id;
        let computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);

        roundCount++;
        
        if(roundCount === 5) {
            setTimeout(() => showEndScreen(), 5);
        } 
    }
}

function playGame() {
    rock.addEventListener('click', (e) => {
        rounds(e);
    });
    paper.addEventListener('click', (e) => {
        rounds(e);
    });
    scissors.addEventListener('click', (e) => {
        rounds(e);
    });

}

playGame();


