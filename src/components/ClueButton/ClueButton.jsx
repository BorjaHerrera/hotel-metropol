import './ClueButton.css';
import { handleClue } from '../../functions/gameFunctions';

export const ClueButton = ({ showClue, dispatch, clue }) => {
  return (
    <div className='clue-div'>
      <img
        className='img-clue'
        src='assets/idea.png'
        alt='pista oculta'
        onClick={() => handleClue(dispatch)}
      />
      <p style={{ color: showClue ? 'var(--hm-color-4)' : 'transparent' }}>
        {clue}
      </p>
    </div>
  );
};
