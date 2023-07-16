import { UserCard } from '@/components/userCard/UserCard';
import { ExitButton } from '@/components/exitButton/ExitButton';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import {
  selectorAllUsers,
  selectorCountPages,
  selectorCurrentPage,
} from '@/store/selectors/usersSelectors';
import { getUsers } from '@/store/thunk/usersThunk';
import { useEffect } from 'react';
import { setCurrentPage } from '@/store/slices/usersSlice';
import classes from './userCards.module.css';

export function UserCards() {
  const allUsers = useAppSelector(selectorAllUsers);
  const countPages = useAppSelector(selectorCountPages);
  const currentPage = useAppSelector(selectorCurrentPage);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, [currentPage]);

  return (
    <div className={classes.userCardsWrapper}>
      <header className="generalHeader">
        <div className={classes.exitButtonContainer}>
          <ExitButton />
        </div>

        <h1>Наша команда</h1>

        <div className={classes.usersDescription}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </div>
      </header>

      <main className={classes.userCardsList}>
        {allUsers ? (
          allUsers.map(user => <UserCard user={user} key={user.id} />)
        ) : (
          <div>no users</div>
        )}
      </main>

      {allUsers.length && countPages !== currentPage ? (
        <footer className={classes.footer}>
          <button className={classes.showMoreButton} onClick={handleClick}>
            Показать еще
            <img src="/arrowDown.svg" alt="arrowDown" />
          </button>
        </footer>
      ) : null}
    </div>
  );
}
