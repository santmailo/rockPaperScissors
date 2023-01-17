function getComputerChoice(){
    let a = Math.ceil(Math.random()*3);    
    if(a==1) return "rock";
    else if(a==2) return "paper";
    else if(a==3) return "scissor";

}



function playRound(){
    const computerChoice = getComputerChoice();
    const playerSelection = prompt("Enter your value:- Rock,Paper,Scissor");
    playerSelection.toLowerCase();
    if(playerSelection==="rock" && computerChoice ==="paper") {return `You Lose! ${computerChoice} beats ${playerSelection}`;}
    else if(playerSelection==="paper" && computerChoice === "scissor")  {return `You Lose! ${computerChoice} beats ${playerSelection}`;}
    else if(playerSelection==="scissor" && computerChoice === "rock") {return `You Lose! ${computerChoice} beats ${playerSelection}`;}
    else if(playerSelection===computerChoice) {return `You and Computer is battling ${playerSelection} vs ${computerChoice}`;}
    else if(playerSelection == "rock" ||playerSelection == "paper" || playerSelection == "scissor") {return `Hooray!! You Win ${playerSelection} beats ${computerChoice}`};
    return "Please type valid options ";
}

var bag = "";
for(var i=0; i<5; i++){
    bag+=playRound() + "\n";
}
console.log(bag); 
