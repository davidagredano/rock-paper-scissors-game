const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  const encounter = playerSelection + " vs " + computerSelection;
  switch (encounter) {
    case "Rock vs Scissors":
    case "Scissors vs Paper":
    case "Paper vs Rock":
      return `You Won! ${playerSelection} beats ${computerSelection}`;
    case "Scissors vs Rock":
    case "Paper vs Scissors":
    case "Rock vs Paper":
      return `You Lose! ${playerSelection} is beatten by ${computerSelection}`;
    default:
      return `It's a tie! ${playerSelection} equals ${computerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(CHOICES);
console.log(playRound(playerSelection, computerSelection));
