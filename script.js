function getComputerChoice() {
    const randomNumber= Math.ceil(Math.random()*3)
    switch (randomNumber) {
        case 1:
            return "paper"; 
            break;
        case 2:
            return "scissor";
            break;
        case 3:
            return "rock";
            break;
        default:
            break;
    }
}

function playRound(playerChoice,ComputerChoice) {
    if (playerChoice.toLowerCase()==="rock") {
        if (ComputerChoice==="scissor") {
            return "you win";
            
        }else if(ComputerChoice==="paper"){
            return "you lose";
        }
        else{
            return "its a tie";
        }
    }else if(playerChoice.toLowerCase()==="scissor"){
        if (ComputerChoice==="scissor") {
            return "its a tie";
            
        }else if(ComputerChoice==="paper"){
            return "you win";
        }
        else{
            return "you lost";
        }
    }
    else if(playerChoice.toLowerCase()==="paper"){
        if (ComputerChoice==="scissor") {
            return "you lost";
            
        }else if(ComputerChoice==="paper"){
            return "its a tie";
        }
        else{
            return "you win";
        }
    }
    else {
        return "error";
    }
}

function game() {
    let playerScore=0;
    let computerScore=0;
    let cond=true;
    for (let i = 0; cond; i++) {
        let playerChoice=prompt("whats your move");
        let outcome =playRound(playerChoice,getComputerChoice());
        console.log(outcome);
        if (outcome==="you win") {
            playerScore++;
        }
        else if(outcome==="you lose"){
            computerScore++;
        }
        else{
            continue;
        }
        console.log(playerScore);
        if (playerScore===5 ||computerScore===5) {
            cond=false;
        }
    }
    if (playerScore===5) {
        console.log("You won");
    }else if(computerScore===5){
        console.log("you lost");
    }
    else{
        console.log("error");
    }
    
}
