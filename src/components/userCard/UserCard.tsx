import { IUser } from '@/types/user';
import { RoutePaths } from '@/consts/routes';
import { useNavigate } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import { likesUtils } from '@/utils/likesUtils';
import { useInView } from 'react-intersection-observer';
import classes from './userCard.module.css';

function UserCard({ user }: { user: IUser }) {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
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
      ref={ref}
      onClick={() => {
        navigate(`${RoutePaths.USER_INFO}/${user.id}`);
      }}>
      {inView && user.avatar ? (
        <img
          className={classes.avatar}
          src={user.avatar}
          alt={`user:${user.first_name}`}
        />
      ) : (
        <div className={classes.noAvatar}>No cover</div>
      )}

      <h3>{`${user.first_name} ${user.last_name}`}</h3>

      <div className={classes.likesWrapper}>
        <button
          className={classes.likeIcon}
          onClick={event => {
            handleClick(event);
          }}>
          <img src={like ? '/like.svg' : '/noLikes.svg'} alt="like" />
        </button>
      </div>
    </div>
  );
}

export const MemoizedUserCard = memo(UserCard);
