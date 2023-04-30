let round = 1;

const Gameboard = (() => {
  const gameBoard = [null, null, null, null, null, null, null, null, null];
  const renderBoard = () => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((field, index) => {
      field.textContent = gameBoard[index];
    });
  };
  addNewMark = (indexOfMark) => {
    let newMark;
    if (round % 2 === 0) newMark = 'x';
    else if (round % 2 === 1) newMark = 'o';

    if (gameBoard[indexOfMark] === null) {
      gameBoard[indexOfMark] = newMark;
    }
    renderBoard();
    round += 1;
  };
  return { addNewMark };
})();

const Player = (mark) => {
  return { mark };
};

const Game = (() => {
  const playerOne = Player('o');
  const playerTwo = Player('x');

  const addFieldEventListeners = (() => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((element) => {
      const field = element;
      element.addEventListener(
        'click',
        () => {
          Gameboard.addNewMark(field.id);
        },
        { once: true }
      );
    });
  })();
})();
