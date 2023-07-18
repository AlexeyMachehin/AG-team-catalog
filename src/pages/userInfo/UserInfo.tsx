/* eslint-disable react/no-unescaped-entities */
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setIsRedirected } from '@/store/slices/usersSlice';
import { getUser } from '@/store/thunk/usersThunk';
import {
  selectorCurrentUser,
  selectorIsRedirected,
} from '@/store/selectors/usersSelectors';
import { ExitButton } from '@/components/exitButton/ExitButton';
import { GoBackButton } from '@/components/goBackButton/GoBackButton';
import { RoutePaths } from '@/consts/routes';
import classes from './userInfo.module.css';

export default function UserInfo() {
  const currentUser = useAppSelector(selectorCurrentUser);
  const isRedirected = useAppSelector(selectorIsRedirected);
  const { idParam } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (idParam) {
      dispatch(getUser(idParam));
    }
  }, []);

  useEffect(() => {
    if (isRedirected) {
      dispatch(setIsRedirected(false));
      navigate(RoutePaths.INDEX);
    }
  }, [isRedirected]);

  return (
    <div className={classes.userInfoWrapper}>
      <header className={`${classes.header} ${classes.userInfoHeader}`}>
        <GoBackButton />

        <div className={classes.headerContent}>
          <img
            className={classes.avatar}
            src={currentUser?.avatar}
            alt="avatar"
          />

          <div className={classes.headerContent__text}>
            <h1>{`${currentUser?.first_name} ${currentUser?.last_name}`}</h1>
            <h2>Партнер</h2>
          </div>
        </div>

        <ExitButton />
      </header>

      <main className={classes.userInfo}>
        <div className={classes.userInfo__text}>
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты. В работе с
          клиентами недостаточно просто решить конкретную проблему или помочь
          справиться с трудностями. Не менее важно уделять внимание обмену
          знаниями: "Один из самых позитивных моментов — это осознание того, что
          ты помог клиенту перейти на совершенно новый уровень компетентности,
          уверенность в том, что после окончания проекта у клиента есть все
          необходимое, чтобы дальше развиваться самостоятельно". Помимо
          разнообразных проектов для клиентов финансового сектора, Сорин ведет
          активную предпринимательскую деятельность. Он является совладельцем
          сети клиник эстетической медицины в Швейцарии, предлагающей
          инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </div>

        <div className={classes.userInfo__contacts}>
          <div className={classes.contact}>
            <img src="/phone.svg" alt="phone" />
            <a href="tel:+79543334455">+7 (954) 333-44-55</a>
          </div>

          <div className={classes.contact}>
            <img src="/envelope.svg" alt="phone" />
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
