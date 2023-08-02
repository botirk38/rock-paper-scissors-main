function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It\'s a draw!";
    }else if
        ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return "You win!";
    }else{
        return "You lose!";
    }
}

function game() {
    console.log("Welcome to the game");
	// TODO game starts flavour text (get player name?)
	let playerWins = 0;
	let computerWins = 0;
	let gameLength = 4;
    for (let i = 0; i <= gameLength; i++) {
        let playerSelection = prompt(); // TODO input validation & error handling (add a timer?)

        if (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
            alert('Invalid input, try again');
            continue;
        }

        let computerSelection = computerPlay();
        let gameOutcome = playRound(playerSelection, computerSelection);
		if(gameOutcome.includes('win')){
            playerWins++;
        }else if(gameOutcome.includes('lose')){
            computerWins++;
        }
        console.log(gameOutcome);

    }

    if(playerWins > computerWins){
        console.log("You win the game!");

    }else if(playerWins < computerWins){
        console.log("You lose the game!");
    }else{
        console.log("It's a draw!");
    }
    
}

game();