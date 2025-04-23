export const submitAnswer = ({ dispatch, selectedAnswer, correctAnswer }) => {
  const isCorrect = selectedAnswer === correctAnswer;
  dispatch({
    type: 'SUBMIT_ANSWER',
    payload: {
      isCorrect,
      selectedAnswer
    }
  });
};

export const nextRiddle = (dispatch) => {
  dispatch({ type: 'NEXT_RIDDLE' });
};

export const selectOption = ({ dispatch, selectedOption }) => {
  dispatch({
    type: 'SELECT_OPTION',
    payload: selectedOption
  });
};

export const visibleClue = (dispatch) => {
  dispatch({ type: 'TOGGLE_CLUE' });
};

export const restartGame = (dispatch) => {
  dispatch({ type: 'RESTART_GAME' });
};
