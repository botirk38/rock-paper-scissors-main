function computerPlay() {
    const choices = ['rock 👊🏼', 'paper 🖐🏼', 'scissors ✂️'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function isValidChoice(choice) {
    const validChoices = ['rock', 'paper', 'scissors'];
    return validChoices.includes(choice.toLowerCase());
}

function game() {
	// TODO game starts flavour text (get player name?)
	let playerWins = 0;
	let computerWins = 0;
	let draws = 0;
	const gameLength = 4;
    for (let i = 0; i <= gameLength; i++) {
		console.log("%c--------------",'color: blue; font-weight: bold;');
		console.log("%cRound "+ (i+1) ,"font-weight:bold;");
        let playerSelection = prompt("Type either rock, paper, or scissors!"); // TODO input validation & error handling (add a timer?)
		if (!isValidChoice(playerSelection)) {
            console.log('%cInvalid option! Options are rock, paper, or scissors.','color:red; font-weight:bold;');
            i--;
            continue;
        }
        let computerSelection = computerPlay();
		console.log("Computer picked " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.includes('win')) {
            console.log("You win this round!");
            playerWins++;
        } else if (roundResult.includes('lose')) {
            console.log("%cYou lose this round! 🤦🏽‍♂️", "color:red;");
            computerWins++;
        } else {
            console.log("Looks like a draw!");
			draws++;
		}
    }
	console.log("--------------");
	// Ending game
	if (playerWins > computerWins) {
		console.log("Congratulations! You have won!");
	} else if (computerWins > playerWins) {
		console.log("You lost :(");
	} else {
		console.log("It is a draw!");
	}
	console.log("%cThe final score is:", "color:blue; border-bottom:blue 2px solid; text-transform:uppercase;paper");
	console.log("👨🏽‍💻 You: " + playerWins);
	console.log("💻 Computer: " + computerWins);
	console.log(draws != 0 ? "Draws: " + draws : "");
	console.log("--------------");
	console.log("--------------");
	let playAgain = prompt("Want to play again? y/n"); //TODO Validation
	if (playAgain = "y") {
		game();
	}
}

console.log("%c👊🏼 🖐🏼 ✂️ Welcome to the game 👊🏼 🖐🏼 ✂️ ", 'color:white; font-weight:bold; text-transform:uppercase; background-color:#111; padding:1em 2em; border-radius:20px;');
game();