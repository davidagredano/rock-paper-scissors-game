// Global configuration
const CHOICES = ["Rock", "Paper", "Scissors"];
const ROUNDS = 5;

// Capitalize a string (helper)
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Randomly return an element from an array
function getComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Compare 2 objects and return the winner
function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  const encounter = playerSelection + " vs " + computerSelection;
  switch (encounter) {
    case "Rock vs Scissors":
    case "Scissors vs Paper":
    case "Paper vs Rock":
      return "Player";
    case "Scissors vs Rock":
    case "Paper vs Scissors":
    case "Rock vs Paper":
      return "Computer";
    default:
      return;
  }
}

// Play 5 rounds, keep scores and report a winner or loser at the end
function game(rounds) {
  // Initialize scores
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds
  for (let i = 1; i <= rounds; i++) {
    // Get player and computer choices
    const playerSelection = prompt("Choose your move! (rock, paper, scissors)");
    const computerSelection = getComputerChoice(CHOICES);

    // Get the result of the round
    const result = playRound(playerSelection, computerSelection);

    // Show the result of the round
    result == "Player" || result == "Computer"
      ? console.log(`Round ${i}: ${result} won the round`)
      : console.log(`Round ${i}: It's a tie`);

    // Update scores
    if (result == "Player") {
      playerScore++;
    } else if (result == "Computer") {
      computerScore++;
    }
  }

  // Show the winner and the score at the end of the 5 rounds
  if (playerScore > computerScore) {
    console.log(
      `Result: Player won the game (${playerScore}-${computerScore})`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Result: Computer won the game (${playerScore}-${computerScore})`
    );
  } else {
    console.log(
      `Result: Game result in a tie (${playerScore}-${computerScore})`
    );
  }
}

// Call the main game loop
game(ROUNDS);
