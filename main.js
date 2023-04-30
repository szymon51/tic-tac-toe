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
        gameController.playRound(field.id);
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

const Player = (mark) => {
  return { mark };
};

const gameController = (() => {
  const playerOne = Player('o');
  const playerTwo = Player('x');
  let round = 1;

  const playRound = (indexOfField) => {
    if (round % 2 === 0) addNewMark(indexOfField, playerTwo.mark);
    else if (round % 2 === 1) addNewMark(indexOfField, playerOne.mark);
    round += 1;
  };

  const addNewMark = (indexOfField, newMark) => {
    if (Gameboard.getFieldValue(indexOfField) === null) {
      Gameboard.setFieldValue(indexOfField, newMark);
    }
    screenController.updateScreen();
  };
  return { playRound };
})();
