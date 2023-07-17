import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '@/consts/routes';
import classes from './goBackButton.module.css';

export function GoBackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(RoutePaths.INDEX);
  };

  return (
    <button className={classes.goBackButton} onClick={handleClick}>
      Назад
    </button>
  );
}
