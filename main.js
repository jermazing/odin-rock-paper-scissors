console.log("Hello World2")


let getComputerChoice = function() {
    let cpuChoice = Math.floor(Math.random() * 3)   + 1;

    if (cpuChoice === 1) {
        return "Rock"
    } else if (cpuChoice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }

}

console.log(getComputerChoice())

let getHumanChoice = function(myChoice) {
    
}


if (myChoice === cpuChoice) {
    return "TIE!"
} else if (myChoice === "Rock") {
    if (cpuChoice === "Scissors") {
        return "You chose ${myChoice}! Computer chose ${cpuChoice}! You Win!"
    } else {
        return "You chose ${myChoice}! Computer chose ${cpuChoice}! You Lose!"
    }
} else if (myChoice === "Paper") {
    if (cpuChoice === "Rock") {
        return "You chose ${myChoice}! Computer chose ${cpuChoice}! You Win!"
    } else {
        return "You chose ${myChoice}! Computer chose ${cpuChoice}! You Lose!"
    }

} else {
    if (cpuChoice === "Paper") {
        return "You chose ${myChoice}! Computer chose ${cpuChoice}! You Win!"
    } else {
        return "You chose ${myChoice}! Computer chose ${cpuChoice}! You Lose!"
    }
}