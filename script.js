function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "You win the round!";
    } else {
        return "You lose the round!";
    }
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