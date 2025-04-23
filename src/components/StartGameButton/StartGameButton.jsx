import './StartGameButton.css';
import { useNavigationPage } from '../../CustomHook/useNavigationPage';

export const StartGameButton = () => {
  const { goToPage } = useNavigationPage();

  return (
    <button className='start-button' onClick={() => goToPage('game')}>
      JUGAR
    </button>
  );
};
