import {
  nextRiddle,
  restartGame,
  selectOption,
  submitAnswer,
  visibleClue
} from '../reducer/actions';

export const handleAnswer = ({ dispatch, selectedAnswer, correctAnswer }) => {
  submitAnswer({ dispatch, selectedAnswer, correctAnswer });
};

export const handleBackgroundAnswer = ({ dispatch, selectedOption }) => {
  selectOption({ dispatch, selectedOption });
};

export const handleScore = (dispatch) => {
  nextRiddle(dispatch);
};

export const handleOption = ({ dispatch, option }) => {
  selectOption({ dispatch, option });
};

export const handleClue = (dispatch) => {
  visibleClue(dispatch);
};

export const handleReestart = (dispatch) => {
  restartGame(dispatch);
};
