const Gameboard = (() => {
  this.gameBoard = [null, null, null, null, null, null, null, null, null];
  this.renderBoard = () => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((field, index) => {
      field.textContent = gameBoard[index];
    });
  };
  this.addNewMark = (newMark, indexOfMark) => {
    if (gameBoard[indexOfMark] === null) {
      gameBoard[indexOfMark] = newMark;
    }
    Gameboard.renderBoard();
  };
  return { gameBoard, renderBoard, addNewMark };
})();

const Player = () => {
  this.addNewMark = (mark, indexOfMark) => {
    Gameboard.addNewMark(mark, indexOfMark);
  };
  return { addNewMark };
};

const Game = (() => {
  const playerOne = Player();
  const playerTwo = Player();
  Gameboard.renderBoard();
  playerOne.addNewMark('x', 3);
})();
