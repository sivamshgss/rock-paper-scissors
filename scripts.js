let humanScore = 0;
let computerScore = 0;

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