function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let gameOutcome = {};
    // TODO logic that compares playerSelection to computerSelection
	if (playerSelection == computerSelection) {
		gameOutcome.text = "The round is a draw! You both picked " + playerSelection;
		gameOutcome.winner = "draw";
	} else {
		switch (playerSelection) {
			case "Rock":
				if (computerSelection == "Paper") {
					gameOutcome.winner = "computer";
					break;
				}
				gameOutcome.winner = "player";
				break;
			case "Paper":
				if (computerSelection == "Scissors") {
					gameOutcome.winner = "computer";
					break;
				}	
				gameOutcome.winner = "player";
				break;
			case "Scissors":
				if (computerSelection == "Rock") {
					gameOutcome.winner = "computer";
					break;
				}
				gameOutcome.winner = "player";
				break;
		}
		if (gameOutcome.winner == "player") {
			gameOutcome.text = `You won the round! ${playerSelection} beats ${computerSelection}!`
		} else {
			gameOutcome.text = `You lost the round! ${computerSelection} beats ${playerSelection}!`;
		}
	}
    return gameOutcome // "You Lose! Paper beats Rock", "computer"
}

function game() {
    console.log("Welcome to the game");
	// TODO game starts flavour text (get player name?)
	let playerWins = 0;
	let computerWins = 0;
	let draws = 0;
	let gameLength = 4;
    for (let i = 0; i <= gameLength; i++) {
        let playerSelection = prompt(); // TODO input validation & error handling (add a timer?)
        let computerSelection = computerPlay();
		console.log("Computer picked " + computerSelection);
        let gameOutcome = playRound(playerSelection, computerSelection);
		switch (gameOutcome.winner) {
			case "player":
				playerWins++;
				break;
			case "computer":
				computerWins++;
				break;
			case "draw":
				draws++;
				break;
		}
        console.log(gameOutcome.text);
    }
    // TODO game end logic
}

game();