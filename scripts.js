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

// function getHumanChoice() {
//     let choice = prompt("Choose: Rock, Paper or Scissors?").toLowerCase();
//     if (choice === "rock") {
//         choice = "Rock";
//     } else if (choice === "paper") {
//         choice = "Paper";
//     } else {
//         choice = "Scissors";
//     }
//     return choice;
// }

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            let p = document.createElement("p");
            p.innerText = `Draw! both chose ${humanChoice}.`;
            res.appendChild(p);
        } else if (humanChoice === "Rock") {
            if (computerChoice === "Paper") {
                ++computerScore;
                let p = document.createElement("p");
                p.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
                res.appendChild(p);
            } else {
                ++humanScore;
                let p = document.createElement("p");
                p.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
                res.appendChild(p);
            }
        } else if (humanChoice === "Paper") {
            if (computerChoice === "Scissors") {
                ++computerScore;
                let p = document.createElement("p");
                p.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
                res.appendChild(p);
            } else {
                ++humanScore;
                let p = document.createElement("p");
                p.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
                res.appendChild(p);
            }
        } else {
            if (computerChoice === "Rock") {
                ++computerScore;
                let p = document.createElement("p");
                p.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
                res.appendChild(p);
            } else {
                ++humanScore;
                let p = document.createElement("p");
                p.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
                res.appendChild(p);
            }
        }
        scoreVal.innerText = `${humanScore} - ${computerScore}`;
    }

    let humanScore = 0;
    let computerScore = 0;
    
    // let humanChoice = getHumanChoice();
    // let computerChoice = getComputerChoice();
    // playRound(humanChoice, computerChoice);
    
    // humanChoice = getHumanChoice();
    // computerChoice = getComputerChoice();
    // playRound(humanChoice, computerChoice);
    
    // humanChoice = getHumanChoice();
    // computerChoice = getComputerChoice();
    // playRound(humanChoice, computerChoice);
    
    // humanChoice = getHumanChoice();
    // computerChoice = getComputerChoice();
    // playRound(humanChoice, computerChoice);
    
    // humanChoice = getHumanChoice();
    // computerChoice = getComputerChoice();
    // playRound(humanChoice, computerChoice);
    
    // if (humanScore > computerScore) {
    //     console.log(`You win! ${humanScore} - ${computerScore}.`);
    // } else {
    //     console.log(`You lose! ${humanScore} - ${computerScore}.`);
    // }

    let rock = document.createElement("button");
    rock.textContent = "Rock";
    let paper = document.createElement("button");
    paper.textContent = "Paper";
    let scissors = document.createElement("button");
    scissors.textContent = "Scissors";
    document.body.appendChild(rock);
    document.body.appendChild(paper);
    document.body.appendChild(scissors);

    let score = document.createElement("div");
    score.className = "score";
    let scoreHeader = document.createElement("h2");
    scoreHeader.innerText = "Score: (Human - Computer)";
    let scoreVal = document.createElement("p");
    scoreVal.style.fontSize = "20px";
    scoreVal.innerText = `${humanScore} - ${computerScore}`;
    score.appendChild(scoreHeader);
    score.appendChild(scoreVal);
    document.body.appendChild(score);

    let res = document.createElement("div");
    res.className = "result";
    let resHead = document.createElement("h2");
    resHead.innerText = "Result:";
    res.appendChild(resHead);
    document.body.appendChild(res);

    rock.addEventListener("click", () => {
        playRound(rock.innerText, getComputerChoice());
        if (humanScore > computerScore && humanScore == 5) {
            alert(`You won, ${humanScore} - ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
            scoreVal.innerText = `${humanScore} - ${computerScore}`;
            clearResult();
        }
        if (computerScore > humanScore && computerScore == 5) {
            alert(`You lost, ${humanScore} - ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
            scoreVal.innerText = `${humanScore} - ${computerScore}`;
            clearResult();
        }
    });
    paper.addEventListener("click", () => {
        playRound(paper.innerText, getComputerChoice());
        if (humanScore > computerScore && humanScore == 5) {
            alert(`You won, ${humanScore} - ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
            scoreVal.innerText = `${humanScore} - ${computerScore}`;
            clearResult();
        }
        if (computerScore > humanScore && computerScore == 5) {
            alert(`You lost, ${humanScore} - ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
            scoreVal.innerText = `${humanScore} - ${computerScore}`;
            clearResult();
        }
    });
    scissors.addEventListener("click", () => {
        playRound(scissors.innerText, getComputerChoice());
        if (humanScore > computerScore && humanScore == 5) {
            alert(`You won, ${humanScore} - ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
            scoreVal.innerText = `${humanScore} - ${computerScore}`;
            clearResult();
        }
        if (computerScore > humanScore && computerScore == 5) {
            alert(`You lost, ${humanScore} - ${computerScore}`);
            humanScore = 0;
            computerScore = 0;
            scoreVal.innerText = `${humanScore} - ${computerScore}`;
            clearResult();
        }
    });

    // function selectChoice(e) {
    //     console.log(e.target.innerText);
    // }

    function clearResult() {
        while(resHead.nextSibling) {
            resHead.nextSibling.remove();
        }
    }
    
    // while (true) {
    //     if (humanScore > computerScore && humanScore == 5) {
    //         prompt(`You won, ${humanScore} - ${computerScore}`)
    //         humanScore = 0;
    //         computerScore = 0;
    //         clearResult();
    //     }
    //     if (humanScore < computerScore && computerScore == 5) {
    //         prompt(`You lost, ${humanScore} - ${computerScore}`)
    //         humanScore = 0;
    //         computerScore = 0;
    //         clearResult();
    //     }
    // }
}

playGame();