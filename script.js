// Retrieve score from localStorage or initialize it
let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
  totalMoves: 0
};

// Update the score display on the page
updateScoreElement();

/**
 * Play the game based on the player's move.
 * @param {string} playerMove - The move chosen by the player ('Rock', 'Paper', 'Scissors').
 */
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  // Determine the result of the game
  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.';
    } else if (computerMove === 'Paper') {
      result = 'You win.';
    } else {
      result = 'Tie.';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else {
      result = 'You lose.';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
  }

  // Update score based on the result
  score.totalMoves++;
  if (result === 'You win.') {
    score.Wins++;
  } else if (result === 'You lose.') {
    score.Losses++;
  } else {
    score.Ties++;
  }

  // Save updated score to localStorage
  localStorage.setItem('score', JSON.stringify(score));

  // Update the UI
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `
    You
    <img src="./${playerMove}-emoji.png" class="move-icon">
    <img src="./${computerMove}-emoji.png" class="move-icon">
    Computer
  `;
}

/**
 * Update the score element in the UI.
 */
function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `
    Moves: ${score.totalMoves} &nbsp;&nbsp; 
    Wins: ${score.Wins} &nbsp;&nbsp; 
    Losses: ${score.Losses} &nbsp;&nbsp; 
    Ties: ${score.Ties}
  `;
  const scoreElement = document.querySelector('.js-score');
  scoreElement.classList.add('style');
}

/**
 * Generate a random move for the computer.
 * @returns {string} - The move chosen by the computer ('Rock', 'Paper', 'Scissors').
 */
function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}
