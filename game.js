function computerPlay()
{
    let answer = Math.floor(Math.random() * 3);
    switch (answer) 
    {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}
//returns 1 if player wins, 0 if draw, -1 if loses, returns a string if bad input
//never actually do this
function playRound(playerSelection, computerSelection)
{
    //playerSelection = playerSelection.toLowerCase();
    let action = document.querySelector(".action");
    switch(playerSelection)
    {
        case "rock":
        {
            if (computerSelection === "rock") 
            {
                //console.log("Draw");
                action.textContent = "Draw";
                return 0;
            }
            else if (computerSelection === "paper") 
            {
                //console.log("You lose! Paper beats rock!");
                action.textContent = "You lose! Paper beats rock!";
                return -1;
            }
            
            else 
            {
                //console.log("You win! Rock beats scissors!");
                action.textContent = "You win! Rock beats scissors!";
                return 1;
            }
            
        }
        case "paper":
        {
            if (computerSelection === "rock")
            {
                //console.log("You win! Paper beats rock!");
                action.textContent = "You win! Paper beats rock!";
                return 1;
            }
            else if (computerSelection === "paper") 
            {
                //console.log("Draw");
                action.textContent = "Draw";
                return 0;
            }
            else
            {
                //console.log("You lose! Scissors beats paper!");
                action.textContent = "You lose! Scissors beats paper!";
                return -1;
            } 
        }

        case "scissors":
        {
            if (computerSelection === "rock") 
            {
                //console.log("You lose! Rock beats scissors!");
                action.textContent = "You lose! Rock beats scissors!";
                return -1;
            }
            else if (computerSelection === "paper") 
            {
                //console.log("You win! Scissors beats paper!");
                action.textContent = "You win! Scissors beats paper!";
                return 1;
            }
            
            else 
            {
                //console.log("Draw");
                action.textContent = "Draw";
                return 0;
            }
        }
        default: return `Error: Unknown player selection in function 'playRound()'`;
    }
}

function progress(roundResult) {
    if (roundResult === 1) ++playerScore;
    else if (roundResult === -1) ++computerScore;
    score.textContent = `Player Score: ${playerScore} ${'\t'} Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5)
    {
        let buttons = document.querySelectorAll("button");
        buttons.forEach((btn) => {
            btn.style.cssText = "display: none;"
        });
        if (playerScore > computerScore)
        {
            gameResult.textContent = "You Won!";
        } 
        else if (playerScore < computerScore)
        {
            gameResult.textContent = "You lost...";
        } 
        else gameResult.textContent = "It was a draw";   
    }
}
//plays a five round game
//function game()
let playerScore = 0;
let computerScore = 0;
let roundResult;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let score = document.querySelector(".score");
let gameResult = document.querySelector(".end");

rock.addEventListener("click", () => {
    roundResult = playRound("rock",computerPlay());
    progress(roundResult);
})

paper.addEventListener("click", () => {
    roundResult = playRound("paper", computerPlay());
    progress(roundResult);
})

scissors.addEventListener("click", () => {
    roundResult = playRound("scissors", computerPlay());
    progress(roundResult);
})
