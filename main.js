const Gameboard = (() => {
  let gameBoard = [null, null, null, null, null, null, null, null, null];
  const getFieldValue = (indexOfField) => {
    return gameBoard[indexOfField];
  };
  const addNewMark = (indexOfField, value) => {
    gameBoard[indexOfField] = value;
  };
  const clearGameboard = () => {
    gameBoard = [null, null, null, null, null, null, null, null, null];
  };
  return { getFieldValue, addNewMark, clearGameboard };
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
    const activePlayer = round % 2 ? playerOne : playerTwo;
    round += 1;
    Gameboard.addNewMark(indexOfField, activePlayer.mark);
    checkIfGameOver(activePlayer);
    screenController.updateScreen();
  };

  const gameOver = (activePlayer) => {
    if (activePlayer === undefined) console.log('It is a tie!');
    else console.log(`'${activePlayer.mark}' won the game!`);
  };

  const checkIfGameOver = (activePlayer) => {
    if (round >= 10) {
      gameOver();
    } else if (
      Gameboard.getFieldValue(0) === activePlayer.mark &&
      Gameboard.getFieldValue(1) === activePlayer.mark &&
      Gameboard.getFieldValue(2) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    } else if (
      Gameboard.getFieldValue(3) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(5) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    } else if (
      Gameboard.getFieldValue(6) === activePlayer.mark &&
      Gameboard.getFieldValue(7) === activePlayer.mark &&
      Gameboard.getFieldValue(8) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    } else if (
      Gameboard.getFieldValue(0) === activePlayer.mark &&
      Gameboard.getFieldValue(3) === activePlayer.mark &&
      Gameboard.getFieldValue(6) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    } else if (
      Gameboard.getFieldValue(1) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(7) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    } else if (
      Gameboard.getFieldValue(2) === activePlayer.mark &&
      Gameboard.getFieldValue(5) === activePlayer.mark &&
      Gameboard.getFieldValue(8) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    } else if (
      Gameboard.getFieldValue(0) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(8) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    } else if (
      Gameboard.getFieldValue(2) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(6) === activePlayer.mark
    ) {
      gameOver(activePlayer);
    }
  };
  return { playRound };
})();
