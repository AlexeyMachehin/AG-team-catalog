import { UserCard } from '@/components/userCard/UserCard';
import { ExitButton } from '@/components/exitButton/ExitButton';
import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { selectorAllUsers } from '@/store/selectors/usersSelectors';
import { getUsers } from '@/store/thunk/usersThunk';
import { useEffect } from 'react';
import classes from './userCards.module.css';

export function UserCards() {
  const allUsers = useAppSelector(selectorAllUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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

      {allUsers && (
        <footer className={classes.footer}>
          <button className={classes.showMoreButton}>
            Показать еще
            <img src="/arrowDown.svg" alt="arrowDown" />
          </button>
        </footer>
      )}
    </div>
  );
}
