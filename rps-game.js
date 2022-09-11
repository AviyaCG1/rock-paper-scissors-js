
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

function playRound(e){
    // LowerCase playerChoice
    let playerChoice = e.target.innerText.toLowerCase();
    const computerChoice = getComputerChoice();
    // Check who won
    let isWin = whoWon(playerChoice, computerChoice);
    // declare winner and update scores
    switch (isWin) {
        case "win":
            playerScore++;
            playerScoreboard.innerText = `You: ${playerScore}`;
            resultOutput.innerText = `You won! ${playerChoice} beats ${computerChoice}`;
            break;
        case "lose":
            computerScore++;
            computerScoreboard.innerText = `Computer: ${computerScore}`;
            resultOutput.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
            break;
        case "tie":
            resultOutput.innerText = `It's a tie of ${computerChoice}s!`;
            break;
        default:
            resultOutput.innerText = `invalid result: ${isWin}`;
            break;
    }
    // if someone reach 5 points end the game
    if (playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore){
            resultOutput.innerText = `You won! ${playerScore} : ${computerScore}`;
        } else {
            resultOutput.innerText = `Computer won! ${playerScore} : ${computerScore}`;
        }
        buttons.forEach((e) => e.removeEventListener('click',playRound));// disable choice-buttons to stop the game
    }

}

function newGame(){
    playerScore = 0;
    playerScoreboard.innerText = `You: ${playerScore}`;
    computerScore = 0;
    computerScoreboard.innerText = `Computer: ${computerScore}`;
    resultOutput.innerText = 'Lets play rock-paper-scissors!';
    buttons.forEach((e) => e.addEventListener('click',playRound));
}

const buttons = document.querySelectorAll('.choice-button');
buttons.forEach((btn) => btn.addEventListener('click',playRound));

const resultOutput = document.querySelector(".result");
resultOutput.innerText = 'Lets play rock-paper-scissors!';

let playerScore = 0;
let computerScore = 0;

const playerScoreboard = document.querySelector('.player');
const computerScoreboard = document.querySelector('.computer');

playerScoreboard.innerText = `You: ${playerScore}`;
computerScoreboard.innerText = `Computer: ${computerScore}`;

const playAgainButton = document.querySelector('#play-again-button');
playAgainButton.addEventListener('click', newGame);

