import { IUser } from '@/types/user';
import { RoutePaths } from '@/consts/routes';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { likesUtils } from '@/utils/likesUtils';
import classes from './userCard.module.css';

export function UserCard({ user }: { user: IUser }) {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  const handler = () => {
    const likeLocalStorage = likesUtils.isUserLiked(user.id);

    if (likeLocalStorage) {
      likesUtils.unlikeUser(user.id);
      setLike(false);
    } else {
      likesUtils.likeUser(user.id);
      setLike(true);
    }
  };

  useEffect(() => {
    const likeLocalStorage = likesUtils.isUserLiked(user.id);
    setLike(likeLocalStorage);
  }, []);

  return (
    <div
      className={classes.userCardWrapper}
      onClick={() => {
        navigate(`${RoutePaths.USER_INFO}/${user.id}`);
      }}>
      <img className={classes.avatar} src={user.avatar} alt="avatar" />

      <h3>{`${user.first_name} ${user.last_name}`}</h3>

      <div className={classes.likesWrapper}>
        <button
          className={classes.likeIcon}
          onClick={e => {
            e.stopPropagation();
            handler();
          }}>
          <img src={like ? '/like.svg' : '/noLikes.svg'} alt="like" />
        </button>
      </div>
    </div>
  );
}
