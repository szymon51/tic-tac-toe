const Gameboard = (() => {
  this.gameBoard = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
  this.renderBoard = () => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((field, index) => {
      field.textContent = gameBoard[index];
    });
  };
  return { gameBoard, renderBoard };
})();

const Player = (name) => {
  this.name = name;
  return { name };
};

const Game = (() => {
  const playerOne = Player('jeff');
  const playerTwo = Player('mark');
  Gameboard.renderBoard();
})();
