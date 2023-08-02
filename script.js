function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const gameOutcome = {
		text: "",
		winner: "",
	};
    // TODO logic that compares playerSelection to computerSelection
	if (playerSelection == computerSelection) {
		gameOutcome.text = "The round is a draw! You both picked " + playerSelection;
		gameOutcome.winner = "draw";
	} else {
		switch (playerSelection) {
			case "Rock":
				if (computerSelection == "Paper") {
					gameOutcome.winner = "computer";
				}
				break;
			case "Paper":
				if (computerSelection == "Scissors") {
					gameOutcome.winner = "computer";
				}	
				break;
			case "Scissors":
				if (computerSelection == "Rock") {
					gameOutcome.winner = "computer";
				}
				break;
		}
		if (gameOutcome.winner == "computer") {
			gameOutcome.text = `You lost the round! ${computerSelection} beats ${playerSelection}!`;
		} else {
			gameOutcome.text = `You won the round! ${playerSelection} beats ${computerSelection}!`;
			gameOutcome.winner = "player";
		}
	}
    return gameOutcome;
}

function game() {
    console.log("Welcome to the game");
	// TODO game starts flavour text (get player name?)
	let playerWins = 0;
	let computerWins = 0;
	let draws = 0;
	const gameLength = 4;
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