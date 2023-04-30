const Gameboard = (() => {
  const gameBoard = [null, null, null, null, null, null, null, null, null];
  const getFieldValue = (indexOfField) => {
    return gameBoard[indexOfField];
  };
  const setFieldValue = (indexOfField, value) => {
    gameBoard[indexOfField] = value;
  };
  return { getFieldValue, setFieldValue };
})();

const displayController = (() => {
  const renderBoard = () => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((field, index) => {
      field.textContent = Gameboard.getFieldValue(index);
    });
  };
  return { renderBoard };
})();

const gameController = (() => {
  let round = 1;
  addNewMark = (indexOfField) => {
    let newMark;
    if (round % 2 === 0) newMark = 'x';
    else if (round % 2 === 1) newMark = 'o';

    if (Gameboard.getFieldValue(indexOfField) === null) {
      Gameboard.setFieldValue(indexOfField, newMark);
    }
    displayController.renderBoard();
    round += 1;
  };
  return { addNewMark };
})();

const Player = () => {
  return {};
};

const game = (() => {
  const addFieldEventListeners = (() => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((element) => {
      const field = element;
      element.addEventListener(
        'click',
        () => {
          gameController.addNewMark(field.id);
        },
        { once: true }
      );
    });
  })();
})();
