import { UserCard } from '@/components/userCard/UserCard';
import { ExitButton } from '@/components/exitButton/ExitButton';
import classes from './userCards.module.css';

export function UserCards() {
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
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </main>

      <footer className={classes.footer}>
        <button className={classes.showMoreButton}>
          Показать еще
          <img src="../../../assets/arrowDown.svg" alt="arrowDown" />
        </button>
      </footer>
    </div>
  );
}
