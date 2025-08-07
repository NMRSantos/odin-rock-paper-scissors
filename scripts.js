function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return `Rock`;
    }
    else if (randomNum === 1) {
        return `Paper`;
    }
    else {
        return `Scissors`;
    }
} 

function getHumanChoice() {
    let answer = prompt (`Pick Rock, Paper or Scissors`);
        if (answer === null) {
            answer = prompt (`Please, try again! Pick Rock, Paper or Scissors!`);
            return answer
        }
        else {
            return answer;
        }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (computerChoice === humanChoice) {
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score:${computerScore}`);
            console.log(`It's a draw! You both picked ${humanChoice}!`);
        }
        else if (
                (computerChoice === `Rock` && humanChoice === `Scissors`) ||
                (computerChoice === `Paper` && humanChoice === `Rock`) ||
                (computerChoice === `Scissors` && humanChoice === `Paper`)
            ) {
            computerScore++;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score ${computerScore}`);
            console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
        }
        else {
            humanScore++;
            console.log(`Your Score: ${humanScore}`);
            console.log(`Computer Score ${computerScore}`);
            console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

