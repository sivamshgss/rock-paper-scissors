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