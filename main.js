console.log("Hello World2")

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // your code here!
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log("It's a Tie! You both chose " + humanChoice);
        } else if ( 
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice + "!!");
        } else {
            computerScore++;
            console.log("WOMP WOMP YOU LOSE! Humanity is one step closer to extiction! " + computerChoice + " beats " + humanChoice + "!!");
        }   
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

}


function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3) + 1;

    if (cpuChoice === 1) {
        return "rock";
    } else if (cpuChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let input = prompt("enter rock, paper, or scissors");
    return input.toLowerCase();
}


