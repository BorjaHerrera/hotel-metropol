import riddleData from '../utils/Riddles';

export const INITIAL_STATE = {
  currentRiddleIndex: 0,
  score: 0,
  hasAnswered: false,
  selectedOption: null,
  selectedAnswer: null,
  riddle: riddleData,
  showClue: false
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT_ANSWER':
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
        selectedAnswer: action.payload.selectedAnswer,
        hasAnswered: true
      };

    case 'NEXT_RIDDLE':
      return {
        ...state,
        currentRiddleIndex: state.currentRiddleIndex + 1,
        hasAnswered: false,
        selectedAnswer: null,
        selectedOption: null,
        showClue: false
      };

    case 'SELECT_OPTION':
      return {
        ...state,
        selectedOption: action.payload
      };

    case 'TOGGLE_CLUE':
      return {
        ...state,
        showClue: !state.showClue
      };

    case 'RESTART_GAME':
      return INITIAL_STATE;
    default:
      return state;
  }
};
