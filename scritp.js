function getComputerValue(){
    let computerChoice = ["rock","paper","scissors"];
    let randomValue = Math.ceil(Math.random()*computerChoice.length);
    if(randomValue == 1){
        return computerChoice[randomValue-1];
    }

    else if(randomValue ==2){
        return computerChoice[randomValue-1];
    }

    else if(randomValue ==3){
        return computerChoice[randomValue-1];
    }
}

let win = "You Win!";
let lose =  "You Lose!";

let user = 0;
let computer = 0;
function playRound(){
    let getUserValue = prompt("Enter you value ").toLowerCase();
    let getComputerChoice = getComputerValue();

    if(getComputerChoice=="rock" && getUserValue=="paper"){
        return win;
        user= user+1;s;
    }
    else if(getComputerChoice=="paper" && getUserValue=="scissors"){
        return win;
        user++;
    }

    else if(getComputerChoice == "scissors" && getUserValue=="rock"){
        return win;
        user++;
    }

    else if(getUserValue=="rock" && getComputerChoice=="paper"){
        return lose;
        computer++;
    }
    else if(getUserValue=="paper" && getComputerChoice=="scissors"){
        return lose;
        computer++;
    }


    else if(getUserValue == "scissors" && getComputerChoice=="rock"){
        return lose;
        computer++;
    }

    else{
        return `Tie! ${getComputerChoice} Cancels ${getUserValue}`;
    }
}

function game(){
    playRound();
    console.log(playRound());
    console.log("Your Score",user);
    console.log("Computer Score",computer);
}

