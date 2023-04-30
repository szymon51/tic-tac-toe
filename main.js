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

const clickHandler = (() => {
  const addFieldEventListeners = () => {
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
  };
  addFieldEventListeners();
  const newGameBtn = document.querySelector('#new-game');
  newGameBtn.addEventListener('click', () => gameController.newGame());
  return { addFieldEventListeners };
})();

const screenController = (() => {
  const updateScreen = () => {
    const fields = document.querySelectorAll('.field');
    fields.forEach((field, index) => {
      field.textContent = Gameboard.getFieldValue(index);
    });
  };
  const displayResults = (message) => {
    const resultDiv = document.querySelector('#results');
    resultDiv.textContent = message;
  };
  const clearScreen = () => {
    Gameboard.clearGameboard();
    screenController.updateScreen();
    screenController.displayResults('');
  };
  return { updateScreen, displayResults, clearScreen };
})();

const Player = (mark) => {
  return { mark };
};

const gameController = (() => {
  const playerOne = Player('o');
  const playerTwo = Player('x');
  let round = 1;

  const newGame = () => {
    clickHandler.addFieldEventListeners();
    round = 1;
    screenController.clearScreen();
  };

  const playRound = (indexOfField) => {
    const activePlayer = round % 2 ? playerOne : playerTwo;
    round += 1;
    Gameboard.addNewMark(indexOfField, activePlayer.mark);
    checkIfGameOver(activePlayer);
    screenController.updateScreen();
  };

  const gameOver = (activePlayerMark) => {
    let message;
    if (activePlayerMark === undefined) message = 'It is a tie!';
    else {
      if (activePlayerMark === 'o') {
        message = 'First player won!';
      } else {
        message = 'Second player won!';
      }
    }
    screenController.displayResults(message);
  };

  const checkIfGameOver = (activePlayer) => {
    if (
      Gameboard.getFieldValue(0) === activePlayer.mark &&
      Gameboard.getFieldValue(1) === activePlayer.mark &&
      Gameboard.getFieldValue(2) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (
      Gameboard.getFieldValue(3) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(5) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (
      Gameboard.getFieldValue(6) === activePlayer.mark &&
      Gameboard.getFieldValue(7) === activePlayer.mark &&
      Gameboard.getFieldValue(8) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (
      Gameboard.getFieldValue(0) === activePlayer.mark &&
      Gameboard.getFieldValue(3) === activePlayer.mark &&
      Gameboard.getFieldValue(6) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (
      Gameboard.getFieldValue(1) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(7) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (
      Gameboard.getFieldValue(2) === activePlayer.mark &&
      Gameboard.getFieldValue(5) === activePlayer.mark &&
      Gameboard.getFieldValue(8) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (
      Gameboard.getFieldValue(0) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(8) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (
      Gameboard.getFieldValue(2) === activePlayer.mark &&
      Gameboard.getFieldValue(4) === activePlayer.mark &&
      Gameboard.getFieldValue(6) === activePlayer.mark
    ) {
      gameOver(activePlayer.mark);
    } else if (round >= 10) {
      gameOver();
    }
  };
  return { playRound, newGame };
})();
