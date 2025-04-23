import { useNavigate } from 'react-router-dom';

export const useNavigationPage = () => {
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(`/${page}`);
  };
  return { goToPage };
};
