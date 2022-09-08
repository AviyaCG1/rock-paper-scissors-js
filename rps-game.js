
// return a number between 0 to (num-1)
function random(num){
    return Math.floor(Math.random() * num);
}

function getComputerChoice(){
    // Generate a random int 0,1,2
    randIndex = random(3);
    // IF int is 0 RETURN paper
    // IF int is 1 RETURN scissors
    // IF int is 2 RETURN rock
    choiceIndex = ["paper", "scissors", "rock"];
    return choiceIndex[randIndex];
}

function whoWon(playerChoice, computerChoice){
    // Check if its tie
    // IF player won RETURN "You Won! {playerChoice} beats {computerChoice}"
    // ELSE "You lose! {computerChoice} beats {playerChoice}"

}

function playRound(playerChoice, computerChoice){
    // LowerCase playerChoice
    // Check who won
    // RETURN text
}


