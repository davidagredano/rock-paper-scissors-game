// Global configuration
const OBJECTS = ["rock", "paper", "scissors"];
const BEATS = { rock: "scissors", paper: "rock", scissors: "paper" };
const SCORE = { player: 0, computer: 0 };
const ROUNDS = 5;
const ICONS = {
  facingRight: {
    rock: "<i class='fa-solid fa-hand-back-fist fa-rotate-90'></i>",
    paper: "<i class='fa-solid fa-hand fa-rotate-90'></i>",
    scissors: "<i class='fa-solid fa-hand-scissors fa-flip-horizontal'></i>",
  },
  facingLeft: {
    rock: "<i class='fa-solid fa-hand-back-fist fa-rotate-270'></i>",
    paper: "<i class='fa-solid fa-hand fa-rotate-270'></i>",
    scissors: "<i class='fa-solid fa-hand-scissors'></i>",
  },
};

// Capitalize a string (helper)
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Randomly return an element from an array
function getComputerChoice(objects) {
  const randomIndex = Math.floor(Math.random() * objects.length);
  return objects[randomIndex];
}

// Add an event listener to the buttons that call the playRound function
// with the correct playerChoice every time a button is clicked
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => playRound(event.target.id));

// Trigger all the fonctionality involved in playing a round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice(OBJECTS);
  const winner = getWinner(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, winner);
  updateScore(SCORE, winner);
}

// Compare 2 objects and return the winner
function getWinner(playerChoice, computerChoice) {
  if (BEATS[playerChoice] == computerChoice) {
    return "player";
  } else if (BEATS[computerChoice] == playerChoice) {
    return "computer";
  } else {
    return null;
  }
}

// Display round results in the DOM
function displayResult(playerChoice, computerChoice, winner) {
  const player = document.querySelector("#player");
  const computer = document.querySelector("#computer");
  const result = document.querySelector("p.result");
  player.innerHTML = ICONS.facingRight[playerChoice];
  computer.innerHTML = ICONS.facingLeft[computerChoice];
  result.textContent = winner ? `${capitalize(winner)} wins` : "Tie";
}

// Display the running score, and announce a winner of the game
// once one player reaches 5 points.
function updateScore(scoreObject, winner) {
  if (winner) {
    const scoreDOMElement = document.querySelector(`#${winner}-score`);
    scoreDOMElement.textContent = ++scoreObject[winner];
    if (scoreObject[winner] === 5) displayWinner(winner);
  }
}

// Announce the winner of the game
function displayWinner(winner) {
  alert(winner + " WINS!");
}
