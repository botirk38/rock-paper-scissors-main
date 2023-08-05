function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "win";
    } else {
        return "lose";
    }
}

function isValidChoice(choice) {
    const validChoices = ["rock", "paper", "scissors"];
    return choice ? validChoices.includes(choice.toLowerCase()) : false;
}

function playAgain() {
	let playAgainPrompt = prompt("Want to play again? y/n");
	if (!playAgainPrompt || (playAgainPrompt.toLowerCase() !== "y" && playAgainPrompt.toLowerCase() !== "n")) {
		console.log("%cInvalid option! Options are y(yes) or n(no).","color:red; font-weight:bold;");
		playAgain();
	} else if (playAgainPrompt.toLowerCase() == "y") {
		console.log("%cYay! Let's paly again 😊","color:blue; font-weight:bold;");
		console.log("%cRemember:", "color:#999; font-weight:bold;");
		console.log("%cRock👊🏼 beats scissors✂️", "color:#999; font-weight:bold;");
		console.log("%cScissors✂️ beats paper🖐🏼", "color:#999; font-weight:bold;");
		console.log("%cPaper🖐🏼 beats rock👊🏼", "color:#999; font-weight:bold;");
		console.log("%cGood luck! We'll play 5 rounds", "color:#cdbc3a; font-weight:bold;");
		game();
	} else if (playAgainPrompt.toLowerCase() == "n") {
		console.log("%cThank you for playing! 😊","color:blue; font-weight:bold;");
		console.log("%cMeant to say say? Type game() in this console","color:#ccc; font-size: 9px;");
	}
}

function game() {
	let playerWins = 0;
	let computerWins = 0;
	let draws = 0;
	const gameLength = 4;
	let validInput = true;
    for (let i = 0; i <= gameLength; i++) {
		if (validInput) {
			console.log("%c--------------","color: blue; font-weight: bold;");
			console.log("%cRound "+ (i+1) ,"font-weight:bold;");
		}
        let playerSelection = prompt("Type either rock, paper, or scissors!");
		if (!isValidChoice(playerSelection)) {
            console.log("%cInvalid option! Options are rock, paper, or scissors.","color:red; font-weight:bold;");
            i--;
			validInput = false;
            continue;
        }
		validInput = true;
        let computerSelection = computerPlay();
		console.log("Computer picked " + computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "win") {
            console.log(playerSelection + " beats " + computerSelection);
            console.log("You win this round! ✨");
            playerWins++;
        } else if (roundResult === "lose") {
            console.log(computerSelection + " beats " + playerSelection);
            console.log("%cYou lose this round! 🤦🏽‍♂️", "color:red;");
            computerWins++;
        } else {
            console.log("Looks like a draw! 🤝");
			draws++;
		}
    }
	console.log("--------------");
	// Ending game
	if (playerWins > computerWins) {
		console.log("%c💥❇✨🎇🎆 Congratulations! You have won! 🎆🎇✨❇💥", "color:#cdbc3a; font-weight:bold;font-size: 15px;");
	} else if (computerWins > playerWins) {
		console.log("%cYou lost 😔", "color:#999; font-weight:bold;font-size: 15px;");
	} else {
		console.log("It is a draw! 🙃", "color:#999; font-weight:bold;font-size: 15px;");
	}
	console.log("%cThe final score is:", "color:blue; border-bottom:blue 2px solid; text-transform:uppercase;paper");
	console.log("👨🏽‍💻 You: " + playerWins);
	console.log("💻 Computer: " + computerWins);
	console.log("Draws: " + draws);
	console.log("--------------");
	console.log("--------------");
	playAgain();
}

console.log("%c👊🏼 🖐🏼 ✂️ Welcome to the ultimate rock paper scissors game! 👊🏼 🖐🏼 ✂️ ", "color:white; font-weight:bold; text-transform:uppercase; background-color:#111; padding:1em 2em; border-radius:20px;");
console.log("%cRemember:", "color:#999; font-weight:bold;");
console.log("%cRock👊🏼 beats scissors✂️", "color:#999; font-weight:bold;");
console.log("%cScissors✂️ beats paper🖐🏼", "color:#999; font-weight:bold;");
console.log("%cPaper🖐🏼 beats rock👊🏼", "color:#999; font-weight:bold;");
console.log("%cGood luck! We'll play 5 rounds", "color:#cdbc3a; font-weight:bold;");
game();