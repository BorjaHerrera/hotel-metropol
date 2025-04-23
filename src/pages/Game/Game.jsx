import { useEffect, useReducer, useState } from 'react';
import './Game.css';
import { gameReducer, INITIAL_STATE } from '../../reducer/gameReducer';
import {
  handleAnswer,
  handleBackgroundAnswer,
  handleReestart,
  handleScore
} from '../../functions/gameFunctions';
import GameLogic from '../../components/GameLogic/GameLogic';
import FinalScreen from '../../components/FinalScreen/FinalScreen';
import { BackgroundGame } from '../../components/BackgroundGame/BackgroundGame';

export const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  //prettier-ignore
  const { currentRiddleIndex, score, hasAnswered, selectedOption, selectedAnswer, riddle, showClue } = state;
  //prettier-ignore
  const currentRiddle = currentRiddleIndex < riddle.length ? riddle[currentRiddleIndex] : null;
  const [currentIntro, setCurrentIntro] = useState('');
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    if (currentRiddle) {
      const text = currentRiddle.intro || '';
      let index = 1;

      setCurrentIntro('');
      setIsIntroComplete(false);

      const firstCharTimeout = setTimeout(() => {
        setCurrentIntro(text[0]);
        index = 0;
      }, 0);

      const interval = setInterval(() => {
        if (index < text.length) {
          setCurrentIntro((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            setIsIntroComplete(true);
          }, 300);
        }
      }, 20);

      return () => {
        clearTimeout(firstCharTimeout);
        clearInterval(interval);
      };
    }
  }, [currentRiddle]);

  return (
    <>
      <BackgroundGame />
      <section id='game'>
        {currentRiddle ? (
          <>
            <GameLogic
              currentRiddle={currentRiddle}
              currentIntro={currentIntro}
              isIntroComplete={isIntroComplete}
              hasAnswered={hasAnswered}
              selectedOption={selectedOption}
              handleBackgroundAnswer={handleBackgroundAnswer}
              handleAnswer={handleAnswer}
              handleScore={handleScore}
              dispatch={dispatch}
              selectedAnswer={selectedAnswer}
              showClue={showClue}
            />
          </>
        ) : (
          <FinalScreen
            score={score}
            total={riddle.length}
            onRestart={() => handleReestart(dispatch)}
          />
        )}
      </section>
    </>
  );
};

export default Game;
