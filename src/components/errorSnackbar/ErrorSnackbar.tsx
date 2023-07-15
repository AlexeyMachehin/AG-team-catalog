import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { selectorError } from '@/store/selectors/usersSelectors';
import { removeError } from '@/store/slices/usersSlice';
import classes from './errorSnackbar.module.css';

export function ErrorSnackbar() {
  const error = useAppSelector(selectorError);
  const dispatch = useAppDispatch();

  setTimeout(() => {
    dispatch(removeError());
  }, 3000);

  return error ? <div className={classes.snackbar}>{error}</div> : null;
}
