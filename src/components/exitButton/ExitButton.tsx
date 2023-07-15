import { useAppDispatch } from '@/hooks/reduxHooks';
import { setIsLogged } from '@/store/slices/usersSlice';
import classes from './exitButton.module.css';

export function ExitButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(setIsLogged(false));
      }}
      className={classes.exitButton}>
      Выход
    </button>
  );
}
