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

// function getHumanChoice() {
//     let answer = prompt (`Pick Rock, Paper or Scissors`);
//         if (answer === null) {
//             answer = prompt (`Please, try again! Pick Rock, Paper or Scissors!`);
//             return answer
//         }
//         else {
//             return answer;
//         }
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score:${computerScore}`);
        humanTally.textContent = `Your Score: ${humanScore}`;
        computerTally.textContent = `Your Score: ${computerScore}`;
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
        humanTally.textContent = `Your Score: ${humanScore}`;
        computerTally.textContent = `Your Score: ${computerScore}`;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
    }
    else {
        humanScore++;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score ${computerScore}`);
        humanTally.textContent = `Your Score: ${humanScore}`;
        computerTally.textContent = `Your Score: ${computerScore}`;
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    }
}

function playGame() {
    for ( let i = 0; i >= 5; i++) {
        rockButton.addEventListener("click", () => {
            let humanChoice = "Rock";
            playRound(humanChoice, getComputerChoice())
        });

        paperButton.addEventListener("click", () => {
            let humanChoice = "Paper";
            playRound(humanChoice, getComputerChoice())
        });

        scissorsButton.addEventListener("click", () => {
            let humanChoice = "Scissors";
            playRound(humanChoice, getComputerChoice())
        });
    }
    if (i <= 5) {
        if (humanScore > computerScore) {
            // declare winner
        }
    }
};

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
  
const div = document.createElement("div");
const script = document.querySelector("script");
const body = document.querySelector("body");
body.appendChild(div);

let humanTally = document.createElement("p");
div.append(humanTally);
let computerTally = document.createElement("p");
div.append(computerTally);

