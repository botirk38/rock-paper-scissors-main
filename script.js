function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let gameOutcome;
    // TODO logic that compares playerSelection to computerSelection
    return gameOutcome, winner // "You Lose! Paper beats Rock", "computer"
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
        let gameOutcome, winner = playRound(playerSelection, computerSelection);
		switch (winner) {
			case "player":
				playerWins++
				break;
			case "computer":
				computerWins++
				break;
			default:
				draws++
				break;
		}
        console.log(gameOutcome);
    }
    // TODO game end logic
}

game();