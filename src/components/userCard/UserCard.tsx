import classes from './userCard.module.css';

export function UserCard() {
  return (
    <div className={classes.userCardWrapper}>
      <img
        className={classes.avatar}
        src="@/../public/eyeClosed.svg"
        alt="avatar"
      />

      <h3>Артур Королёв</h3>

      <div className={classes.likesWrapper}>
        <img src="@/../public/like.svg" alt="like" />
      </div>
    </div>
  );
}
