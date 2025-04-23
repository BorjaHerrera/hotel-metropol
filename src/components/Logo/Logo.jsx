import './Logo.css';
import { useNavigationPage } from '../../CustomHook/useNavigationPage';

export const Logo = () => {
  const { goToPage } = useNavigationPage();

  return (
    <img
      className='logo'
      src='assets/logo.png'
      alt='logo'
      onClick={() => goToPage('')}
    />
  );
};
