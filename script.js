function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
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

function displayGameResult(playerWins, computerWins) {
    if (playerWins > computerWins) {
        console.log("You win the game!");
        console.log("Score: " + playerWins + " : " + computerWins);
    } else if (playerWins < computerWins) {
        console.log("You lose the game!");
        console.log("Score: " + computerWins + " : " + playerWins);
    } else {
        console.log("It's a draw!");
        console.log("Score: " + playerWins + " : " + computerWins);
    }
}

function isValidChoice(choice) {
    const validChoices = ['rock', 'paper', 'scissors'];
    return validChoices.includes(choice.toLowerCase());
}


function game() {
    console.log("Welcome to the game");
    let playerReady = prompt("Are you ready? (y/n): ").toLowerCase();
    if (playerReady === 'n') {
        console.log("Bye!");
        return;
    }

    let playerWins = 0;
    let computerWins = 0;
    let gameLength = 5;

    for (let i = 0; i < gameLength; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors: ").toLowerCase();

        if (!isValidChoice(playerSelection)) {
            console.log('Invalid input, try again');
            i--;
            continue;
        }

        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes('win')) {
            // console.log("You win this round!")
            playerWins++;
        } else if (roundResult.includes('lose')) {
            // console.log("You lose this round!")
            computerWins++;
        }
    }

    displayGameResult(playerWins, computerWins);
}

game();