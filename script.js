let i=0;
let playerScore = 0;
let computerScore = 0;
let playerName = "You";

// main loop
while(i<5){
   if(i==0){
        console.log("Let's Play Rock Paper Scissors and test your luck ;)");
        playerName = prompt("How do want me to call you?");
        console.log("Hi "+playerName.toString());
        console.log("Round "+(i+1).toString());
        computerSelection = computerPlay();
        console.log(playRound(computerSelection));
        i++;
    }
    else{
        console.log("Score:        "+playerName.toString()+": "+playerScore.toString()+" Computer:"+computerScore.toString());
        
        let continueGame = prompt("Do you wanna play another round ? (y/n)"); 
        while(continueGame !== "y" && continueGame !== "n"){
            continueGame = prompt("Do you wanna play another round ? (y/n)"); 
        }
        console.log("\nRound "+(i+1).toString());
        if(continueGame==="n"){
            i=0;
            alert("Thanks for playing with us!\nFinal Score\n"+playerName.toString()+": "+playerScore.toString()+" Computer:"+computerScore.toString());
        }else{
            //play the next round
            computerSelection = computerPlay();
            console.log(playRound(computerSelection));
            i++;
        }
    }
   

}

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3); 
    switch(randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        
     }
}

function playRound(computerSelection) {
    let resultMessage = "";
    let userInput = prompt('Enter rock, paper or scissors');
    playerSelection = userInput.toLowerCase();
    while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        userInput = prompt('Enter rock, paper or scissors'); 
        playerSelection = userInput.toLowerCase();
    }
     if (computerSelection === playerSelection) {
                //tie game condition
                resultMessage = 'Tie Game! You both selected'+playerSelection+'.';

    } 
    else if(computerSelection==="rock") { 
                switch(playerSelection){
                        case "paper":    resultMessage = 'You won! '+playerSelection.toString()+' beats '+computerSelection.toString()+'.';
                                             playerScore++;
                                             break;
                        case "scissors": resultMessage = 'Aaah You lost! '+computerSelection.toString()+' beats '+playerSelection.toString()+'.';
                                             computerScore++;
                                             break;
                }
        }
    else if(computerSelection==="paper") { 
                switch(playerSelection){
                        case "scissors": resultMessage = 'You won! '+playerSelection.toString()+' beats '+computerSelection.toString()+'.';
                                         playerScore++;
                                         break;
                        case "rock": resultMessage = 'Aaah You lost! '+computerSelection.toString()+' beats '+playerSelection.toString()+'.';
                                         computerScore++;
                                         break;
                }
        }
    else if(computerSelection==="scissors") { 
                switch(playerSelection){
                        case "rock":    resultMessage = 'You won! '+playerSelection.toString()+' beats '+computerSelection.toString()+'.';
                                         playerScore++;
                                         break;
                        case "paper": resultMessage = 'Aaah You lost! '+computerSelection.toString()+' beats '+playerSelection.toString()+'.';
                                         computerScore++;
                                         break;
                }
        }

            return resultMessage;
    }

alert("Thanks for playing with us!\nFinal Score\n"+playerName.toString()+": "+playerScore.toString()+" Computer: "+computerScore.toString());

    


