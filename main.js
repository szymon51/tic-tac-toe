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

const clickHandlerBoard = (() => {
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

const screenController = (() => {
  const updateScreen = () => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((field, index) => {
      field.textContent = Gameboard.getFieldValue(index);
    });
  };
  return { updateScreen };
})();

const gameController = (() => {
  let round = 1;
  const addNewMark = (indexOfField) => {
    let newMark;
    if (round % 2 === 0) newMark = 'x';
    else if (round % 2 === 1) newMark = 'o';

    if (Gameboard.getFieldValue(indexOfField) === null) {
      Gameboard.setFieldValue(indexOfField, newMark);
    }
    screenController.updateScreen();
    round += 1;
  };
  return { addNewMark };
})();
