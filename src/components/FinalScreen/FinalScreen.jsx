import { GetEscapeMessage } from '../EscapMessage/EscapeMessage';
import './FinalScreen.css';

const FinalScreen = ({ score, total, onRestart }) => {
  return (
    <div className='final-container'>
      <p className='score'>
        Puntuación final:{' '}
        <span className='span-score'>
          {score} de {total} acertadas
        </span>
      </p>
      <p className='final-message'>
        <GetEscapeMessage />
      </p>
      <button className='play-again' onClick={onRestart}>
        JUGAR DE NUEVO
      </button>
    </div>
  );
};

export default FinalScreen;
