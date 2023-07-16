import { useAppSelector } from '@/hooks/reduxHooks';
import { selectorLoader } from '@/store/selectors/usersSelectors';
import classes from './loader.module.css';

export function Loader() {
  const isLoaderOn = useAppSelector(selectorLoader);

  return (
    <>
      {isLoaderOn && (
        <div className={classes.loaderWrapper}>
          <div className={classes.loader}></div>
        </div>
      )}
    </>
  );
}
