import { useNavigate } from 'react-router-dom';
import classes from './goBackButton.module.css';

export function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className={classes.goBackButton} onClick={handleGoBack}>
      Назад
    </button>
  );
}
