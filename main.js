console.log("Hello World2")


let getComputerChoice = function() {
    let rando = Math.floor(Math.random() * 3)   + 1;

    if (rando === 1) {
        return "Rock"
    } else if (rando === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }

}

console.log(getComputerChoice())

let getHumanChoice = function(pls) {
    
}


