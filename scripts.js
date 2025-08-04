function getComputerChoice(max) {
    if (Math.floor(Math.random() * max) == 0) {
        return `Rock`;
    }
    else if (Math.floor(Math.random() * max) == 1) {
        return `Paper`;
    }
    else {
        return `Scissor`;
    }
    
} 

function getHumanChoice() {
    let answer = prompt (`Pick rock, paper or scissor`);
    return answer;
}


var humanScore = 0
var computerScore = 0

function playRound(humanChoice, computerChoice) {

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice(2)

    if (computerChoice == `Rock` && computerChoice == `Scissor`) {
        return `You lose, Rock beats Scissor!`;
    }
    else if (computerChoice == `Rock` && computerChoice == `Paper`) {
        return `You win, Rock beats Scissor!`;
    }
    else if (computerChoice == `Rock` && computerChoice == `Rock`) {
        return `Wow, Rock against Rock is a draw!`;
    }
    else if (computerChoice == `Paper` && computerChoice == `Rock`) {
        return `You lose, Paper beats Rock!`;
    }
    else if (computerChoice == `Paper` && computerChoice == `Paper`) {
        return `Wow, Paper against Paper is a draw!`;
    }
    else if (computerChoice == `Paper` && computerChoice == `Scissor`) {
        return `You win, Scissor beats Paper!`;
    }
    else if (computerChoice == `Scissor` && computerChoice == `Rock`) {
        return `You win, Rock beats Scissor!`;
    }
    else if (computerChoice == `Scissor` && computerChoice == `Paper`) {
        return `You lose, Scissor beats Paper!`;
    }
    else {
        return `Wow, Scissor against Scissor is a draw!`;
    }
}
