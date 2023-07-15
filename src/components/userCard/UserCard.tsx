import { IUser } from '@/types/user';
import { RoutePaths } from '@/consts/routes';
import { useNavigate } from 'react-router-dom';
import classes from './userCard.module.css';

export function UserCard({ user }: { user: IUser }) {
  const navigate = useNavigate();

  return (
    <div
      className={classes.userCardWrapper}
      onClick={() => {
        navigate(`${RoutePaths.USER_INFO}/${user.id}`);
      }}>
      <img className={classes.avatar} src={user.avatar} alt="avatar" />

      <h3>{`${user.first_name} ${user.last_name}`}</h3>

      <div className={classes.likesWrapper}>
        <img src="/like.svg" alt="like" />
      </div>
    </div>
  );
}
