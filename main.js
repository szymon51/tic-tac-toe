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
    renderBoard();
  };
  return { addNewMark };
})();

const Player = (mark) => {
  this.mark = mark;
  return { mark };
};

const Game = (() => {
  const playerOne = Player('o');
  const playerTwo = Player('x');
  let round = 1;

  const addFieldEventListeners = (() => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((element) => {
      const field = element;
      element.addEventListener(
        'click',
        () => {
          if (round % 2 === 1) {
            Gameboard.addNewMark(playerOne.mark, field.id);
          } else {
            Gameboard.addNewMark(playerTwo.mark, field.id);
          }
          round += 1;
        },
        { once: true }
      );
    });
  })();
})();
