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
let playerScore=0;
let computerScore=0;
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissor=document.querySelector("#scissor");

rock.addEventListener("click",(e)=>{
    console.log(e.target);
    let outcome=playRound("rock",getComputerChoice());
    game(outcome);
    

});
paper.addEventListener("click",(e)=>{
    console.log(e.target);
    let outcome=playRound("paper",getComputerChoice());
    game(outcome);
});
scissor.addEventListener("click",(e)=>{
    console.log(e.target);
    let outcome=playRound("scissor",getComputerChoice());
    game(outcome);
});

function playRound(playerChoice,ComputerChoice) {

    if (playerChoice.toLowerCase()==="rock") {
        if (ComputerChoice==="scissor") {
            return 1;
            
        }else if(ComputerChoice==="paper"){
            return 0;
        }
        else{
            return 2;
        }
    }else if(playerChoice.toLowerCase()==="scissor"){
        if (ComputerChoice==="scissor") {
            return 2;
            
        }else if(ComputerChoice==="paper"){
            return 1;
        }
        else{
            return 0;
        }
    }
    else if(playerChoice.toLowerCase()==="paper"){
        if (ComputerChoice==="scissor") {
            return 0;
            
        }else if(ComputerChoice==="paper"){
            return 2;
        }
        else{
            return 1;
        }
    }
    else {
        return "error";
    }
}

function game(outcome) {
    
   
    console.log(outcome);
    
    if (outcome===1) {
        
        playerScore++;
        
        document.getElementById("pscore").innerText=playerScore;
        document.getElementById('extra').innerText="you won damn";
        
        
    }
    else if(outcome===0){
        computerScore++;
        document.querySelector("#cscore").innerText=computerScore;
        document.getElementById('extra').innerText="You lost damn";
    }
    else{
        document.getElementById('extra').innerText="its a tie";
        
    }
    
    
   
    const container=document.querySelector("#container");
    const results=document.querySelector("#results");
    let closing=document.createElement("p");
    let outcome2=document.getElementById('extra');
    if (playerScore===5) {
        outcome2.innerText="gameover you win";
        rock.disabled=true;
        scissor.disabled=true;
        paper.disabled=true;
        closing.innerText="reload to play the game again";
        results.appendChild(closing);

        

    }
    else if(computerScore===5){
        outcome2.innerText="game over you lost damn";
        rock.disabled=true;
        scissor.disabled=true;
        paper.disabled=true;
        closing.innerText="reload to play the game again";
        results.appendChild(closing);
    }
    else{

    }
    
    
}
