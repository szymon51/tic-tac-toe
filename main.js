const Gameboard = (() => {
  this.gameBoard = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
  this.displayBoard = () => {
    const container = document.querySelector('.container');
    for (let i = 1; i <= 9; i++) {
      const div = document.createElement('div');
      container.appendChild(div);
    }
    const gameFields = document.querySelectorAll('.container div');
    gameFields.forEach((field, iterator) => {
      console.log(field);
      field.textContent = gameBoard[iterator];
    });
  };
  return { gameBoard, displayBoard };
})();

const Player = (name) => {
  this.name = name;
  return { name };
};

const Game = (() => {
  const playerOne = Player('jeff');
  const playerTwo = Player('mark');
  Gameboard.displayBoard();
})();
