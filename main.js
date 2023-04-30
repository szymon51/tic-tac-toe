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
  const isFull = () => {
    const isNotNull = (value) => value !== null;
    return gameBoard.every(isNotNull);
  };
  return { getFieldValue, addNewMark, clearGameboard, isFull };
})();

const clickHandler = (() => {
  const fields = document.querySelectorAll('.field');
  fields.forEach((element) => {
    const field = element;
    element.addEventListener('click', () => {
      if (Gameboard.getFieldValue(field.id) === null)
        gameController.playRound(field.id);
    });
  });
  const newGameBtn = document.querySelector('#new-game');
  newGameBtn.addEventListener('click', () => {
    screenController.clearScreen();
  });
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
  let isFirstPlayersTurn = true;

  const playRound = (indexOfField) => {
    let activePlayer = isFirstPlayersTurn ? playerOne : playerTwo;
    isFirstPlayersTurn = !isFirstPlayersTurn;
    Gameboard.addNewMark(indexOfField, activePlayer.mark);
    checkIfGameOver(activePlayer.mark);
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

  const checkIfGameOver = (activePlayerMark) => {
    if (
      Gameboard.getFieldValue(0) === activePlayerMark &&
      Gameboard.getFieldValue(1) === activePlayerMark &&
      Gameboard.getFieldValue(2) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (
      Gameboard.getFieldValue(3) === activePlayerMark &&
      Gameboard.getFieldValue(4) === activePlayerMark &&
      Gameboard.getFieldValue(5) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (
      Gameboard.getFieldValue(6) === activePlayerMark &&
      Gameboard.getFieldValue(7) === activePlayerMark &&
      Gameboard.getFieldValue(8) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (
      Gameboard.getFieldValue(0) === activePlayerMark &&
      Gameboard.getFieldValue(3) === activePlayerMark &&
      Gameboard.getFieldValue(6) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (
      Gameboard.getFieldValue(1) === activePlayerMark &&
      Gameboard.getFieldValue(4) === activePlayerMark &&
      Gameboard.getFieldValue(7) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (
      Gameboard.getFieldValue(2) === activePlayerMark &&
      Gameboard.getFieldValue(5) === activePlayerMark &&
      Gameboard.getFieldValue(8) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (
      Gameboard.getFieldValue(0) === activePlayerMark &&
      Gameboard.getFieldValue(4) === activePlayerMark &&
      Gameboard.getFieldValue(8) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (
      Gameboard.getFieldValue(2) === activePlayerMark &&
      Gameboard.getFieldValue(4) === activePlayerMark &&
      Gameboard.getFieldValue(6) === activePlayerMark
    ) {
      gameOver(activePlayerMark);
    } else if (Gameboard.isFull()) {
      gameOver();
    }
  };
  return { playRound };
})();
