
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
    if (playerChoice == computerChoice){
        return "tie";
    }
    // IF player won RETURN "You Won! {playerChoice} beats {computerChoice}"
    if (playerChoice == "rock" && computerChoice == "scissors" || 
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper"){
            return "win";
        }
    // IF "You lose! {computerChoice} beats {playerChoice}"
    if (computerChoice == "rock" && playerChoice == "scissors" || 
        computerChoice == "paper" && playerChoice == "rock" ||
        computerChoice == "scissors" && playerChoice == "paper"){
            return "lose";
        }
    // ELSE the player input was invalid
    return "invalid input";

}

function playRound(playerChoice, computerChoice){
    // LowerCase playerChoice
    let lowerPlayerChoice = playerChoice.toLowerCase();
    // Check who won
    let result = whoWon(lowerPlayerChoice, computerChoice);
    // RETURN text
    return result;
}

function game(){
    let playerChoice, computerChoice, isWin;
    let playerScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
	    playerChoice = prompt("What's your choice - rock, paper or scissors? ");
	    computerChoice = getComputerChoice();
        isWin = playRound(playerChoice, computerChoice);
        switch (isWin) {
            case "win":
                playerScore++;
                console.log(`You won! ${playerChoice} beats ${computerChoice}`);
                break;
            case "lose":
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                break;
            case "tie":
                index--; //if the game tied reduce index
                console.log(`It's a tie of ${computerChoice}s!`);
                break;
            default:
                console.log(`invalid result: ${isWin}`);
                break;
        }
    }

    if (playerScore > computerScore){
        console.log(`You won! ${playerScore} : ${computerScore}`);
    } else {
        console.log(`Computer won! ${playerScore} : ${computerScore}`);
    }
}

