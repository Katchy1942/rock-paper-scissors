let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
  totalMoves: 0
};


updateScoreElement()

/*
if (!score) {
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };
}

*/
function playGame (playerMove) {
  const computerMove = pickComputerMove();



  let result = '';

  if (playerMove === 'Scissors') {
  if (computerMove === 'Rock') {
    result = 'You lose.';
  } else if (computerMove === 'Paper') {
    result = 'You win.';
  } else if (computerMove === 'Scissors') {
    result = 'Tie.';
  }

  } else if (playerMove === 'Paper') {
  if (computerMove === 'Rock') {
    result = 'You win.';
  } else if (computerMove === 'Paper') {
    result = 'Tie.';
  } else if (computerMove === 'Scissors') {
    result = 'You lose.';
  }
      
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You lose.';
    } else if (computerMove === 'Scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.totalMoves += 1
    score.Wins += 1
  } else if (result === 'You lose.') {
    score.totalMoves += 1
    score.Losses += 1;
  } else if (result === 'Tie.') {
    score.totalMoves += 1
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').
  innerHTML = result;

  document.querySelector('.js-moves').innerHTML
  = `You
  <img src="./${playerMove}-emoji.png" class="move-icon">
  <img src="./${computerMove}-emoji.png" class="move-icon">
  Computer
  `
}

function updateScoreElement () {
  document.querySelector('.js-score')
  .innerHTML = `Moves: ${score.totalMoves} &nbsp &nbsp Wins: ${score.Wins} &nbsp &nbsp Losses: ${score.Losses} &nbsp &nbsp Ties: ${score.Ties}`;
  const scoreElement = document.querySelector('.js-score');
  scoreElement.classList.add('style');
  
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';


  if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'Scissors';
  }

  return computerMove;
}