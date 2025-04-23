import { ClueButton } from '../ClueButton/ClueButton';
import './GameLogic.css';

const GameLogic = ({
  currentRiddle,
  currentIntro,
  isIntroComplete,
  hasAnswered,
  selectedOption,
  handleBackgroundAnswer,
  handleAnswer,
  handleScore,
  dispatch,
  showClue
}) => {
  return (
    <>
      <h1>{currentRiddle.title}</h1>
      <p className='intro'>{currentIntro}</p>
      {isIntroComplete && (
        <div className='quiz-container'>
          <p className='question'>{currentRiddle.question}</p>
          <ClueButton
            showClue={showClue}
            dispatch={dispatch}
            clue={currentRiddle.clue}
          />
          <div className='answers-container'>
            {currentRiddle.options.map((option, index) => (
              <p
                className={`answer-option ${
                  selectedOption === option ? 'selected' : ''
                }`}
                key={index}
                onClick={() => {
                  if (!hasAnswered) {
                    handleBackgroundAnswer({
                      dispatch,
                      selectedOption: option
                    });
                  }
                }}
              >
                {option}
              </p>
            ))}
            <button
              className='play-button'
              onClick={() => {
                if (!selectedOption) return;
                handleAnswer({
                  dispatch,
                  selectedAnswer: selectedOption,
                  correctAnswer: currentRiddle.correctAnswer
                });
                handleScore(dispatch);
              }}
              disabled={!selectedOption || hasAnswered}
            >
              SIGUIENTE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GameLogic;
