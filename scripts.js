function getComputerChoice() {
    let choice = Math.random();
    if (choice < (1 / 3)) {
        choice = "Rock";
    } else if (choice < (2 / 3)) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper or Scissors?").toLowerCase();
    if (choice === "rock") {
        choice = "Rock";
    } else if (choice === "paper") {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log( `Draw! both chose ${humanChoice}.`)
        } else if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                ++computerScore;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            } else {
                ++humanScore;
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            }
        } else if (humanChoice === "Paper") {
            if (computerChoice === "Scissors") {
                ++computerScore;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            } else {
                ++humanScore;
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            }
        } else {
            if (computerChoice === "Rock") {
                ++computerScore;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            } else {
                ++humanScore;
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;
    
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    if (humanScore > computerScore) {
        console.log(`You win! ${humanScore} - ${computerScore}.`);
    } else {
        console.log(`You lose! ${humanScore} - ${computerScore}.`);
    }
}

playGame();