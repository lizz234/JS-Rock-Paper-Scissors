
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    
    const gameChoices = ["rock", "paper", "scissors"];
    let choice = (Math.floor(Math.random() * gameChoices.length));
    return gameChoices[choice];
}

function getHumanChoice() {

    let humanChoice = prompt("Select Your Move: rock, paper or scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("Draw!")
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! paper beats rock");
        computerScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Won! rock beats scissors");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Won! paper beats rock");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! scissors beats paper");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! rock beats scissors");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Won! scissors beats paper");
        humanScore += 1;
    }
    else {
        console.log("Invalid Selection");
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    } 

    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`); 
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You Won The Game😃");
    }
    else if (computerScore > humanScore) {
        console.log("Oops! You Lose The Game☹️");
    }
    else {
        console.log("Game Is Draw!🫱🏻‍🫲🏻");
    }
}

playGame();







