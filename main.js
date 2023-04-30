const Gameboard = (() => {
  const gameBoard = [null, null, null, null, null, null, null, null, null];
  const renderBoard = () => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((field, index) => {
      field.textContent = gameBoard[index];
    });
  };
  addNewMark = (newMark, indexOfMark) => {
    if (gameBoard[indexOfMark] === null) {
      gameBoard[indexOfMark] = newMark;
    }
    renderBoard();
  };
  return { addNewMark };
})();

const Player = (mark) => {
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
