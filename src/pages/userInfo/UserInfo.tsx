import { ExitButton } from '@/components/exitButton/ExitButton';
import { GoBackButton } from '@/components/goBackButton/GoBackButton';
import classes from './userInfo.module.css';

export function UserInfo() {
  return (
    <div className={classes.userInfoWrapper}>
      <header className={`generalHeader ${classes.userInfoHeader}`}>
        <GoBackButton />

        <div className={classes.headerContent}>
          <img
            className={classes.avatar}
            src="../../../public/eyeClosed.svg"
            alt="avatar"
          />

          <div className={classes.headerContent__text}>
            <h1>Артур Королёв</h1>
            <h2>Партнер</h2>
          </div>
        </div>

        <ExitButton />
      </header>

      <main className={classes.userInfo}>
        <div className={classes.userInfo__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          animi at dolores aliquam eligendi neque corporis quo blanditiis. Dolor
          voluptatem odit culpa nam, ad facilis maxime dignissimos sint
          consectetur obcaecati?
        </div>

        <div className={classes.userInfo__contacts}>
          <div className={classes.contact}>
            <img src="../../../public/phone.svg" alt="phone" />
            <a href="tel:+79543334455">+7 (954) 333-44-55</a>
          </div>

          <div className={classes.contact}>
            <img src="../../../public/envelope.svg" alt="phone" />
            <a
              href="mailto:sykfafkar@gmail.com"
              className={classes.userInfo__contacts__mail}>
              sykfafkar@gmail.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
